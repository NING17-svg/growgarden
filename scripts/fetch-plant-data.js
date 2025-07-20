const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// 读取现有的植物数据
const dataPath = path.join(__dirname, '../public/data/plant_images.json');
const plantsData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

// 找出缺少数据的植物
const missingDataPlants = plantsData.filter(plant => 
  !plant.hasOwnProperty('default_weight') || !plant.hasOwnProperty('base_value')
);

console.log(`发现 ${missingDataPlants.length} 个植物缺少数据`);

async function fetchPlantData() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  try {
    // 访问网站
    await page.goto('https://www.growagardencalculator.com/');
    await page.waitForTimeout(2000);
    
    for (let i = 0; i < missingDataPlants.length; i++) {
      const plant = missingDataPlants[i];
      console.log(`正在处理: ${plant.name} (${i + 1}/${missingDataPlants.length})`);
      
      try {
        // 点击植物按钮
        await page.click(`#${plant.name}`);
        await page.waitForTimeout(1000);
        
        // 获取页面文本内容
        const pageText = await page.textContent('body');
        
        // 使用正则表达式提取重量和价值
        const weightMatch = pageText.match(/([\d.]+)kg/);
        const valueMatch = pageText.match(/≈\$([\d,]+)/); 
        
        if (weightMatch && valueMatch) {
          const weight = parseFloat(weightMatch[1]);
          const valueStr = valueMatch[1].replace(/,/g, '');
          const value = parseFloat(valueStr);
          const baseValue = value / weight;
          
          // 更新植物数据
          const plantIndex = plantsData.findIndex(p => p.name === plant.name);
          if (plantIndex !== -1) {
            plantsData[plantIndex].default_weight = weight;
            plantsData[plantIndex].base_value = parseFloat(baseValue.toFixed(5));
            
            console.log(`✓ ${plant.name}: ${weight}kg, $${value}, 基础价值: ${baseValue.toFixed(2)}/kg`);
          }
        } else {
          console.log(`✗ 无法获取 ${plant.name} 的数据`);
        }
        
      } catch (error) {
        console.log(`✗ 处理 ${plant.name} 时出错:`, error.message);
      }
      
      // 短暂延迟避免请求过快
      await page.waitForTimeout(500);
    }
    
    // 保存更新后的数据
    fs.writeFileSync(dataPath, JSON.stringify(plantsData, null, 2), 'utf8');
    console.log('\n数据已保存到文件!');
    
  } catch (error) {
    console.error('脚本执行出错:', error);
  } finally {
    await browser.close();
  }
}

// 运行脚本
fetchPlantData().catch(console.error);