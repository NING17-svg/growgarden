import Head from 'next/head';
import { Metadata } from 'next';

// 设置页面的元数据，用于SEO优化
export const metadata: Metadata = {
  title: 'Complete Beginner\'s Guide to Grow a Garden | growgarden.run',
  description: 'Master Grow a Garden with our comprehensive beginner\'s guide. Learn game basics, mutation systems, weather events, and advanced strategies to grow your garden empire.',
  viewport: 'width=device-width, initial-scale=1',
  // 其他元数据可以在此处添加
};

// 新手指南页面组件
export default function BeginnersGuidePage() {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Complete Beginner's Guide to Grow a Garden: Building Your Garden Empire</h1>
          
          <div className="text-gray-500 mb-8 flex items-center justify-center">
            <span>Published: July 8, 2025</span>
            <span className="mx-2">•</span>
            <span>15 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="what-is-grow-a-garden" className="text-2xl font-semibold mt-8 mb-4">What is Grow a Garden?</h2>
            <p>
              Grow a Garden is a farming simulation game on the Roblox platform where players can plant, harvest, and sell various crops, earning in-game currency called Sheckles by carefully managing their garden. The core gameplay is straightforward: buy seeds, plant them, wait for them to grow, harvest, and sell. Behind this simple loop, however, the game features rich mutation systems, pet mechanics, and weather events that can help players maximize their profits.
            </p>
            <p>
              Whether you're just starting with Grow a Garden or want to understand the basic mechanics, this guide will provide comprehensive guidance to help you grow from an ordinary farmer into a garden tycoon.
            </p>

            <h2 id="basic-gameplay" className="text-2xl font-semibold mt-8 mb-4">Basic Gameplay</h2>
            
            <h3 id="interface-and-controls" className="text-xl font-semibold mt-6 mb-3">Game Interface and Controls</h3>
            <p>
              The controls in Grow a Garden are very simple, using the default Roblox control keys:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>W, A, S, D</strong> - Character movement</li>
              <li><strong>Spacebar</strong> - Jump</li>
              <li><strong>E key</strong> - Interact</li>
              <li><strong>Click</strong> - Place seeds or harvest crops</li>
            </ul>
            <p>
              The game interface has several important buttons at the top, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Seeds</strong> - Teleport to the seed shop</li>
              <li><strong>Sell</strong> - Teleport to the merchant to sell crops</li>
              <li><strong>Plot</strong> - Teleport back to your garden</li>
              <li><strong>Gear</strong> - Teleport to the equipment shop</li>
              <li><strong>Pets</strong> - Teleport to the pet shop</li>
            </ul>

            <h3 id="buying-seeds" className="text-xl font-semibold mt-6 mb-3">Buying Seeds</h3>
            <p>
              To start your garden adventure, you first need to purchase seeds. Click the "Seeds" button at the top of the screen or walk to the seed shop. As a beginner, you have 20 Sheckles as starting funds, enough to buy some basic seeds like carrots.
            </p>
            <p>
              The seed shop refreshes its inventory every 5 minutes, offering seeds of different rarities. Seed rarities range from Common, Uncommon, Rare, Legendary, to Mythical. The higher the rarity of a seed, the lower its probability of appearing in the shop, but the higher the return.
            </p>

            <h3 id="planting-crops" className="text-xl font-semibold mt-6 mb-3">Planting Crops</h3>
            <p>
              Return to your garden (you can quickly return by clicking the "Plot" button), equip your seeds, and then click on the tillable plots to plant. Your garden initially has 3 rows and 2 columns of tillable area, for a total of 6 plots.
            </p>

            <h3 id="waiting-for-growth" className="text-xl font-semibold mt-6 mb-3">Waiting for Growth</h3>
            <p>
              Different crops have different growing times. For example:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Carrots: about 5 minutes</li>
              <li>Strawberries: about 10 minutes</li>
              <li>Tomatoes: about 15 minutes</li>
            </ul>
            <p>
              You can hover your mouse over a crop to check its growth status. Some equipment, such as watering cans, can speed up the growth process.
            </p>

            <h3 id="harvesting-and-selling" className="text-xl font-semibold mt-6 mb-3">Harvesting and Selling</h3>
            <p>
              When a crop is fully mature, interact with it to harvest. After harvesting, you can click the "Sell" button at the top of the screen to go to the merchant. The merchant offers three options:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>I want to sell my inventory</strong> - Sells everything in your backpack except gear</li>
              <li><strong>I want to sell this</strong> - Sells the currently held item (needs to be equipped first)</li>
              <li><strong>How much is this worth?</strong> - Queries the value of the currently held item</li>
            </ul>
            <p>
              Once sold, you will receive Sheckles, which can be used to buy more seeds, equipment, or pets.
            </p>

            <h2 id="advanced-strategies" className="text-2xl font-semibold mt-8 mb-4">Advanced Strategies</h2>
            
            <h3 id="understanding-crop-types" className="text-xl font-semibold mt-6 mb-3">Understanding Crop Types</h3>
            <p>
              There are two main types of crops in Grow a Garden:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li><strong>Single-harvest crops</strong>: Like carrots, they disappear from the ground after harvest and need to be replanted.</li>
              <li><strong>Multi-harvest crops</strong>: Like strawberries and tomatoes, they can be harvested multiple times without needing to be replanted. These crops are usually more cost-effective because you only need to buy the seed once but can harvest multiple times.</li>
            </ol>
            <p>
              As a beginner, once you have enough funds, it's recommended to invest in multi-harvest crops such as strawberries or blueberries. While they have a higher initial cost, they provide better long-term returns.
            </p>

            <h3 id="mutation-system" className="text-xl font-semibold mt-6 mb-3">Mutation System</h3>
            <p>
              Mutations are the key to making money in Grow a Garden. Mutated crops sell for several times or even dozens of times more than regular crops. Here are some common mutation types:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li><strong>Gold mutation</strong>: Crops appear golden, selling for 20 times more than regular crops. Has a 1% natural occurrence rate.</li>
              <li><strong>Rainbow mutation</strong>: Crops have a rainbow aura around them, selling for 50 times more than regular crops. Has a 0.1% natural occurrence rate.</li>
              <li><strong>Wet mutation</strong>: Crops become wet when it rains, selling for 2 times more than regular crops.</li>
              <li><strong>Shocked mutation</strong>: During thunderstorms, if lightning strikes crops, this mutation appears, selling for 50 times more than regular crops.</li>
              <li><strong>Chilled mutation</strong>: Appears in snowy weather, selling for 2 times more than regular crops.</li>
              <li><strong>Frozen mutation</strong>: When already Wet crops are in snowy weather, they transform into the Frozen mutation, selling for 10 times more than regular crops.</li>
              <li><strong>Moonlit mutation</strong>: Appears at night, selling for 2 times more than regular crops.</li>
              <li><strong>Pollinated mutation</strong>: Obtained from bee events or using bee pets, selling for 3 times more than regular crops.</li>
            </ol>
            <p>
              These mutations can stack. For example, if a crop has both Rainbow and Wet mutations, its value will be 100 times (50×2) that of a regular crop!
            </p>

            <h3 id="weather-system" className="text-xl font-semibold mt-6 mb-3">Weather System</h3>
            <p>
              The game's weather system changes randomly, affecting your crop growth and mutation chances:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Sunny</strong>: Standard growth rate</li>
              <li><strong>Rainy</strong>: Increases growth speed and gives crops the Wet mutation</li>
              <li><strong>Thunderstorm</strong>: Chance to give crops the Shocked mutation</li>
              <li><strong>Snow</strong>: Chance to give crops the Chilled mutation; if crops already have the Wet mutation, they will transform to Frozen</li>
              <li><strong>Night</strong>: Chance to give crops the Moonlit mutation</li>
              <li><strong>Blood Moon</strong>: Chance to give crops the Bloodlit mutation, worth 4 times more than regular crops</li>
            </ul>
            <p>
              Wisely utilizing the weather system can significantly increase your earnings. For example, planting many crops during rain can get you more Wet mutations, increasing overall earnings.
            </p>

            <h3 id="gear-system" className="text-xl font-semibold mt-6 mb-3">Gear System</h3>
            <p>
              There are various pieces of equipment in the game that can help you improve efficiency and earnings:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li><strong>Watering Can</strong>: Increases crop growth speed, has a 10-use limit.</li>
              <li><strong>Basic Sprinkler</strong>: Increases crop size, lasts for 5 minutes.</li>
              <li><strong>Advanced Sprinkler</strong>: Increases crop mutation chance, lasts for 5 minutes.</li>
              <li><strong>Godly Sprinkler</strong>: Greatly increases crop mutation chance, lasts for 5 minutes.</li>
            </ol>
            <p>
              While equipment has usage limitations, using it at the right time can significantly increase earnings. For example, using an advanced sprinkler after your garden is filled with multi-harvest crops can increase the chances of getting rare mutations.
            </p>

            <h2 id="pet-system" className="text-2xl font-semibold mt-8 mb-4">Pet System</h2>
            <p>
              The pet system in Grow a Garden adds more strategic depth to the game. Pets are not only cute but also provide various useful passive abilities.
            </p>

            <h3 id="obtaining-pets" className="text-xl font-semibold mt-6 mb-3">Obtaining Pets</h3>
            <p>
              Pets are obtained by hatching eggs. You can purchase eggs at the pet shop, which refreshes its inventory every 30 minutes. Different eggs require different hatching times, and after hatching, you will randomly get a pet.
            </p>

            <h3 id="best-pets-recommendation" className="text-xl font-semibold mt-6 mb-3">Best Pets Recommendation</h3>
            <p>
              Here are some pets that are particularly useful for beginners:
            </p>
            <ol className="list-decimal pl-6 mb-4">
              <li><strong>Dragonfly</strong>: Turns a random crop into gold every 5 minutes, increasing the selling price by 20 times.</li>
              <li><strong>Raccoon</strong>: "Borrows" a mature plant from another player's garden every 15 minutes.</li>
              <li><strong>Giant Ant</strong>: Has a chance to duplicate harvested fruit.</li>
              <li><strong>Mole</strong>: Digs underground to get free gear and Sheckles.</li>
              <li><strong>Cow</strong>: Increases the growth rate of surrounding plants.</li>
              <li><strong>Sea Otter</strong>: Waters nearby plants, increasing growth speed and size.</li>
            </ol>
            <p>
              Beginners should prioritize getting pets that can increase earnings or provide additional resources, rather than those that merely add aesthetics.
            </p>

            <h3 id="pet-care" className="text-xl font-semibold mt-6 mb-3">Pet Care</h3>
            <p>
              Pets get hungry and need to be fed regularly to maintain their efficiency. You can purchase food or use some of your harvested crops to feed them. Healthy pets will provide the best effects.
            </p>

            <h2 id="essential-tips-for-beginners" className="text-2xl font-semibold mt-8 mb-4">Essential Tips for Beginners</h2>
            
            <h3 id="prioritize-multi-harvest-crops" className="text-xl font-semibold mt-6 mb-3">1. Prioritize Multi-Harvest Crops</h3>
            <p>
              In the initial stages of the game, once you have enough Sheckles, you should immediately invest in multi-harvest crops such as strawberries and blueberries. These crops can be harvested repeatedly, providing a stable source of income.
            </p>

            <h3 id="utilize-weather-events" className="text-xl font-semibold mt-6 mb-3">2. Utilize Weather Events</h3>
            <p>
              Pay close attention to weather changes in the game. When it rains, plant as many crops as possible, using the increased growth speed and Wet mutations to boost earnings. During thunderstorms, keep your garden filled with plants to increase the chance of getting Shocked mutations.
            </p>

            <h3 id="strategic-use-of-gear" className="text-xl font-semibold mt-6 mb-3">3. Strategic Use of Gear</h3>
            <p>
              Gear is temporary, so use it when it's most effective. For example, use an advanced sprinkler when your garden is filled with multi-harvest crops, not when you only have a few plants.
            </p>

            <h3 id="choose-pets-wisely" className="text-xl font-semibold mt-6 mb-3">4. Choose Pets Wisely</h3>
            <p>
              Don't buy every type of egg randomly. Research the abilities of different pets and prioritize those that can increase mutation chances, provide additional resources, or duplicate crops.
            </p>

            <h3 id="observe-the-market" className="text-xl font-semibold mt-6 mb-3">5. Observe the Market</h3>
            <p>
              The seed shop refreshes every 5 minutes. Keep an eye out for rare seeds like grapes, mangoes, or dragon fruit, as their base selling price is much higher than common crops.
            </p>

            <h3 id="be-patient" className="text-xl font-semibold mt-6 mb-3">6. Be Patient</h3>
            <p>
              Some of the most valuable mutations, such as Rainbow or Shocked, have extremely low natural occurrence rates. Be patient and focus on expanding the size of your garden and improving overall efficiency, rather than blindly pursuing these rare mutations.
            </p>

            <h2 id="long-term-development-goals" className="text-2xl font-semibold mt-8 mb-4">Long-term Development Goals</h2>
            
            <h3 id="expand-your-garden" className="text-xl font-semibold mt-6 mb-3">1. Expand Your Garden</h3>
            <p>
              As you accumulate funds, consider purchasing more garden plots to expand your planting area. A larger garden means more crops and higher earning potential.
            </p>

            <h3 id="collect-rare-pets" className="text-xl font-semibold mt-6 mb-3">2. Collect Rare Pets</h3>
            <p>
              Work on collecting rare pets that provide powerful passive abilities, such as the Dragonfly or Raccoon. These pets can significantly improve your earning efficiency.
            </p>

            <h3 id="pursue-rare-seeds" className="text-xl font-semibold mt-6 mb-3">3. Pursue Rare Seeds</h3>
            <p>
              As the game progresses, start pursuing rarer seeds. While they have a lower chance of appearing in the shop, their base selling price is higher, and their value after mutation is even more astonishing.
            </p>

            <h3 id="utilize-events-and-limited-time-content" className="text-xl font-semibold mt-6 mb-3">4. Utilize Events and Limited-Time Content</h3>
            <p>
              Pay attention to special events in the game, such as Easter or Halloween activities. These events often provide limited-time equipment, pets, or mutation types that can add extra value to your garden.
            </p>

            <h2 id="conclusion" className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
            <p>
              Grow a Garden is a simple yet deep game. By understanding its core mechanics and implementing effective strategies, you can develop from a small garden into a thriving agricultural empire. Starting with the basic planting and harvesting loop, gradually exploring mutation, weather, and pet systems, you'll discover many more joys to uncover in the game.
            </p>
            <p>
              We hope this beginner's guide will help you succeed in your Grow a Garden journey. May your garden flourish, mutations abound, and harvests be plentiful!
            </p>
            <p>
              If you have any questions or need more specific advice, feel free to discuss. Now, grab your seeds and start your garden adventure!
            </p>
          </div>
        </article>
      </div>
    </div>
  );
} 