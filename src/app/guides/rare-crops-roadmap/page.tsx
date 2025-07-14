import { Metadata } from 'next';

// 设置页面的元数据，用于SEO优化
export const metadata: Metadata = {
  title: 'Guide to Obtaining Rare Crops: From Common to Legendary | growgarden.run',
  description: 'A complete roadmap to obtaining rare and legendary crops in Grow a Garden. Learn about seed rarity, strategic mutation paths, and how to maximize the value of your harvest.',
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://growgarden.run/guides/rare-crops-roadmap',
  },
  // 其他元数据可以在此处添加
};

// 稀有作物获取指南页面组件
export default function RareCropsRoadmapPage() {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">A Guide to Obtaining Rare Crops: The Roadmap from Common to Legendary</h1>
          
          <div className="text-gray-500 mb-8 flex items-center justify-center">
            <span>Published: July 16, 2025</span>
            <span className="mx-2">•</span>
            <span>20 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              In the world of Grow a Garden, the path to wealth is paved with rare and valuable crops. But how do you get your hands on these legendary plants? This guide provides a complete roadmap, detailing the two primary paths to acquiring rare crops: hunting for high-rarity seeds and mastering the art of strategic mutation.
            </p>

            <h2 id="seed-rarity-list" className="text-2xl font-semibold mt-8 mb-4">Understanding Seed Rarity</h2>
            <p>
              The first path to rare crops is through the seeds themselves. The seed shop refreshes its stock every 5 minutes, offering seeds of varying rarities. Higher rarity seeds have a lower chance of appearing but produce crops with a much higher base value.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rarity</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Examples</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Base Value Range</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Strategy</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4">Common</td>
                    <td className="px-6 py-4">Carrot, Blueberry</td>
                    <td className="px-6 py-4">1 - 50 Sheckles</td>
                    <td className="px-6 py-4">Ideal for beginners and for applying weather-based mutations in bulk.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Uncommon</td>
                    <td className="px-6 py-4">Strawberry, Tomato</td>
                    <td className="px-6 py-4">50 - 200 Sheckles</td>
                    <td className="px-6 py-4">Great for multi-harvest strategies to build a stable income.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Rare</td>
                    <td className="px-6 py-4">Watermelon, Grapes</td>
                    <td className="px-6 py-4">200 - 1,000 Sheckles</td>
                    <td className="px-6 py-4">Start focusing on these as soon as your economy allows. Their higher base value makes every mutation more profitable.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Legendary</td>
                    <td className="px-6 py-4">Mango, Cactus</td>
                    <td className="px-6 py-4">1,000 - 5,000 Sheckles</td>
                    <td className="px-6 py-4">Check the shop frequently. Getting these seeds is a significant boost. Protect them and apply your best gear.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">Mythical</td>
                    <td className="px-6 py-4">Cursed Fruit, Soul Fruit</td>
                    <td className="px-6 py-4">10,000 - 100,000+ Sheckles</td>
                    <td className="px-6 py-4">The ultimate prize. A single mutated Mythical crop can be worth millions. This is the endgame of seed hunting.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="mutation-paths" className="text-2xl font-semibold mt-8 mb-4">Mutation Paths: Crafting Value from Common Crops</h2>
            <p>
              The second, more strategic path to wealth is transforming common crops into legendary treasures through mutation. This isn't a linear A-to-B path, but rather a process of &quot;stacking&quot; different independent mutations onto a single plant. The goal is to combine as many multipliers as possible.
            </p>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic">
              &quot;A &apos;Legendary Crop&apos; is not just one with a high base value, but a crop, any crop, that has achieved a legendary combination of mutations.&quot;
            </blockquote>

            <h3 id="mutation-path-diagram" className="text-xl font-semibold mt-6 mb-3">Visualizing the Mutation Path</h3>
            <p>
              Imagine your crop at the center. Different external factors create mutation layers around it. Here’s a conceptual diagram:
            </p>
            <div className="p-4 border-2 border-dashed rounded-md my-4">
              <p className="text-center font-bold">Crop</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center mt-4">
                <div>
                  <p className="font-semibold">Layer 1: Base Mutations (RNG)</p>
                  <p className="text-sm">Golden (x20), Rainbow (x50)</p>
                </div>
                <div>
                  <p className="font-semibold">Layer 2: Weather-Induced Mutations</p>
                  <p className="text-sm">Wet (x2), Chilled (x2), Shocked (x100), Bloodlit (x4)</p>
                </div>
                <div>
                  <p className="font-semibold">Layer 3: Pet/Gear-Induced Mutations</p>
                  <p className="text-sm">Pollinated (x3), Zombified (x25), Frozen (x10)</p>
                </div>
              </div>
              <p className="text-center mt-4">↓</p>
              <p className="text-center font-bold">Final Value = Base Value × (Layer 1 Multiplier) × (Layer 2 Multiplier) × ...</p>
            </div>
            
            <h3 id="targeted-strategies" className="text-xl font-semibold mt-6 mb-3">Targeted Mutation Strategies</h3>
            <p>
              Instead of waiting for random luck, you can actively create conditions to favor specific, powerful mutation combos.
            </p>
            <ul className="list-decimal pl-6 space-y-4">
              <li>
                <strong>The &quot;Frozen Gold&quot; Strategy:</strong>
                <ul>
                  <li><strong>Goal:</strong> Combine Golden (x20) and Frozen (x10) for a x200 multiplier.</li>
                  <li><strong>Path:</strong>
                    <ol className="list-alpha pl-6">
                      <li>Use a Dragonfly pet to reliably generate Golden crops.</li>
                      <li>Wait for Rain to make the Golden crop &apos;Wet&apos;.</li>
                      <li>Wait for Snow to transform the &apos;Wet&apos; Golden crop into a &apos;Frozen&apos; Golden crop.</li>
                      <li>Alternatively, use a Polar Bear pet to freeze the Golden crop directly.</li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>
                <strong>The &quot;Shock and Sell&quot; Strategy:</strong>
                <ul>
                  <li><strong>Goal:</strong> Achieve the massive Shocked (x100) mutation.</li>
                  <li><strong>Path:</strong>
                    <ol className="list-alpha pl-6">
                      <li>Fill every single plot of your garden with multi-harvest crops like Strawberries or Tomatoes.</li>
                      <li>When a Thunderstorm begins, all your plants become &apos;Wet&apos; (x2).</li>
                      <li>The key is density. With a full garden, you maximize the chance that at least one of your crops will be struck by lightning. A single &apos;Shocked&apos; crop can be more valuable than an entire harvest of normal ones.</li>
                    </ol>
                  </li>
                </ul>
              </li>
              <li>
                <strong>The &quot;Mythical Multiplier&quot; Strategy:</strong>
                <ul>
                  <li><strong>Goal:</strong> Maximize the value of an extremely rare seed.</li>
                  <li><strong>Path:</strong>
                    <ol className="list-alpha pl-6">
                      <li>Obtain a Mythical seed like a Cursed Fruit (base value 10,000). Do NOT plant it immediately.</li>
                      <li>Wait for a high-potential scenario: a back-to-back forecast of Rain then Snow, a Thunderstorm, or an admin-triggered event.</li>
                      <li>Plant the seed, and use your absolute best gear (Godly Sprinkler) and mutation-enhancing pets (Dragonfly, etc.) simultaneously.</li>
                      <li>A Cursed Fruit (10,000) that becomes &apos;Frozen&apos; (x10) is worth 100,000. If it also naturally becomes &apos;Golden&apos; (x20), it&apos;s worth 2,000,000 Sheckles.</li>
                    </ol>
                  </li>
                </ul>
              </li>
            </ul>

            <h2 id="maximizing-value" className="text-2xl font-semibold mt-8 mb-4">Maximizing the Value of Rare Crops</h2>
            <p>
              Getting a rare crop or a powerful mutation stack is only half the battle. Don&apos;t rush to sell it.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Patience is a Virtue:</strong> If you get a Golden or Rainbow mutation, don&apos;t harvest it. It&apos;s a permanent state. Leave it in the ground and wait for weather events to add more multipliers. A Rainbow (x50) crop is great, but a Wet Rainbow (x100) crop is twice as good.</li>
              <li><strong>Protect Your Assets:</strong> High-value plants are your primary assets. Be careful with pets like the Raccoon that might &quot;borrow&quot; them from you or other players.</li>
              <li><strong>Know When to Hold &apos;em:</strong> The ultimate prize is something like a Rainbow (x50) + Shocked (x100) + Frozen (x10) crop. This would result in a x50,000 multiplier. The chance is infinitesimal, but it&apos;s the dream that keeps gardeners farming.</li>
            </ul>

            <h2 id="conclusion" className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
            <p>
              The journey from a common carrot to a legendary, multi-mutated Soul Fruit is the essence of Grow a Garden&apos;s endgame. It requires a deep understanding of both seed rarity and the art of mutation stacking. By following this guide&apos;s roadmap—hunting rare seeds, creating targeted mutation opportunities, and patiently layering multipliers—you can strategically navigate your way to becoming one of the wealthiest gardeners in the game.
            </p>

          </div>
        </article>
      </div>
    </div>
  );
} 