# 植物数据获取脚本

这个脚本用于自动从 Grow a Garden Calculator 网站获取缺少的植物数据。

## 安装依赖

```bash
cd scripts
npm install
npx playwright install
```

## 运行脚本

```bash
npm start
```

## 脚本功能

1. 自动读取 `../public/data/plant_images.json` 文件
2. 识别缺少 `default_weight` 和 `base_value` 数据的植物
3. 自动访问网站并点击每个植物按钮
4. 提取重量和价值数据
5. 计算基础价值（价值/重量）
6. 更新JSON文件

## 注意事项

- 脚本会在非无头模式下运行，你可以看到浏览器操作过程
- 每个植物之间有500ms的延迟，避免请求过快
- 如果某个植物数据获取失败，会跳过并继续处理下一个
- 所有数据会自动保存回原JSON文件

## 输出示例

```
发现 40 个植物缺少数据
正在处理: beebalm (1/40)
✓ beebalm: 2.850kg, $45125, 基础价值: 15833.33/kg
正在处理: nectarthorn (2/40)
✓ nectarthorn: 1.900kg, $28500, 基础价值: 15000.00/kg
...
数据已保存到文件!
```