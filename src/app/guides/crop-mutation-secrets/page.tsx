import { Metadata } from 'next';

// 设置页面的元数据，用于SEO优化
export const metadata: Metadata = {
  title: 'Crop Mutation Secrets: A Complete Guide | growgarden.run',
  description: 'Unlock the secrets of crop mutation in Grow a Garden! This complete guide covers all mutation types, how to trigger them, and advanced strategies to increase your mutation chances and profits.',
  viewport: 'width=device-width, initial-scale=1',
  alternates: {
    canonical: 'https://growgarden.run/guides/crop-mutation-secrets',
  },
  // 其他元数据可以在此处添加
};

// 作物变异秘籍页面组件
export default function CropMutationSecretsPage() {
  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
        <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Crop Mutation Secrets: A Complete Guide to Boosting Your Profits</h1>
          
          <div className="text-gray-500 mb-8 flex items-center justify-center">
            <span>Published: July 15, 2025</span>
            <span className="mx-2">•</span>
            <span>18 min read</span>
          </div>

          <div className="prose prose-lg max-w-none">
            <p>
              Welcome to the ultimate guide on crop mutations in Grow a Garden! Mutations are the key to transforming your humble farm into a money-making empire. They are special variations of crops that not only look cool but also sell for significantly higher prices. This guide will delve into every aspect of mutations, from the basic mechanics to advanced strategies for maximizing your odds and profits.
            </p>

            <h2 id="understanding-mutation-mechanism" className="text-2xl font-semibold mt-8 mb-4">Understanding the Mutation Mechanism</h2>
            <p>
              In Grow a Garden, mutations are special versions of your crops that can be triggered by various factors. These can range from random chance, specific weather events, the use of certain gear, or the abilities of your pets. When a crop mutates, its appearance changes, and more importantly, its selling price is multiplied. Understanding how to trigger and stack these mutations is essential for any serious gardener.
            </p>
            <p>
              Some mutations are common, like 'Wet' crops during rain, while others are incredibly rare, such as the coveted 'Rainbow' or 'Shocked' mutations. The rarest mutations offer the highest multipliers, turning a single harvest into a massive payday.
            </p>

            <h2 id="all-crop-mutations" className="text-2xl font-semibold mt-8 mb-4">A Complete List of Crop Mutations</h2>
            <p>
              Here is a comprehensive list of all known mutations in Grow a Garden, their effects, and how to obtain them. Note that some mutations are tied to specific, sometimes admin-triggered, events.
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Mutation</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Multiplier</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">How to Get</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr><td className="px-6 py-4">Wet</td><td className="px-6 py-4">x2</td><td className="px-6 py-4">During Rain or Thunderstorm weather.</td></tr>
                  <tr><td className="px-6 py-4">Chilled</td><td className="px-6 py-4">x2</td><td className="px-6 py-4">During Frost/Snow weather or from a Polar Bear pet.</td></tr>
                  <tr><td className="px-6 py-4">Chocolate</td><td className="px-6 py-4">x2</td><td className="px-6 py-4">Using a Chocolate Sprinkler (event-specific).</td></tr>
                  <tr><td className="px-6 py-4">Moonlit</td><td className="px-6 py-4">x2</td><td className="px-6 py-4">During a Lunar Glow event at night.</td></tr>
                  <tr><td className="px-6 py-4">Pollinated</td><td className="px-6 py-4">x3</td><td className="px-6 py-4">During a Bee Swarm event or from bee-type pets.</td></tr>
                  <tr><td className="px-6 py-4">Bloodlit</td><td className="px-6 py-4">x4</td><td className="px-6 py-4">During a Blood Moon event at night.</td></tr>
                  <tr><td className="px-6 py-4">Plasma</td><td className="px-6 py-4">x5</td><td className="px-6 py-4">During a Laser Event (usually admin-triggered).</td></tr>
                  <tr><td className="px-6 py-4">Honey Glazed</td><td className="px-6 py-4">x5</td><td className="px-6 py-4">Using a Honey Sprinkler or from a Bear Bee pet.</td></tr>
                  <tr><td className="px-6 py-4">Frozen</td><td className="px-6 py-4">x10</td><td className="px-6 py-4">When a &apos;Wet&apos; crop is exposed to Frost/Snow weather. Can also be triggered by a Polar Bear pet.</td></tr>
                  <tr><td className="px-6 py-4">Golden</td><td className="px-6 py-4">x20</td><td className="px-6 py-4">Has a 1% natural chance. Can be triggered by a Dragonfly pet.</td></tr>
                  <tr><td className="px-6 py-4">Zombified</td><td className="px-6 py-4">x25</td><td className="px-6 py-4">Infected by a Chicken Zombie pet.</td></tr>
                  <tr><td className="px-6 py-4">Rainbow</td><td className="px-6 py-4">x50</td><td className="px-6 py-4">Has a 0.1% natural chance to occur.</td></tr>
                  <tr><td className="px-6 py-4">Shocked</td><td className="px-6 py-4">x100</td><td className="px-6 py-4">When a crop is struck by lightning during a Thunderstorm.</td></tr>
                  <tr><td className="px-6 py-4">Celestial</td><td className="px-6 py-4">x120</td><td className="px-6 py-4">During a Meteor Shower event.</td></tr>
                  <tr><td className="px-6 py-4">Disco</td><td className="px-6 py-4">x125</td><td className="px-6 py-4">During an admin-triggered Disco Event.</td></tr>
                  <tr><td className="px-6 py-4">Void Touched</td><td className="px-6 py-4">x175</td><td className="px-6 py-4">During an admin-triggered Black Hole Event.</td></tr>
                </tbody>
              </table>
            </div>

            <h2 id="increase-mutation-chances" className="text-2xl font-semibold mt-8 mb-4">Strategies to Increase Mutation Probability</h2>
            <p>
              While some mutations are purely based on luck, you can significantly improve your odds by using the right strategies. Creating the perfect environment for mutations is an art.
            </p>

            <h3 id="leveraging-weather-events" className="text-xl font-semibold mt-6 mb-3">Leveraging Weather Events</h3>
            <p>
              Weather is one of the most reliable ways to get mutations. Always be prepared:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Rain/Thunderstorms:</strong> Keep your plots full of crops to get a garden full of &apos;Wet&apos; mutations. This also sets you up for the &apos;Frozen&apos; mutation if snow follows.</li>
              <li><strong>Thunderstorms:</strong> While all crops get &apos;Wet&apos;, only a few will be struck by lightning for the massive &apos;Shocked&apos; (x100) multiplier. It&apos;s a numbers game, so plant as much as you can.</li>
              <li><strong>Snow/Frost:</strong> This event triggers &apos;Chilled&apos; mutations. More importantly, if your crops are already &apos;Wet&apos;, they will turn &apos;Frozen&apos; for a huge x10 multiplier. Watch the weather forecast!</li>
              <li><strong>Blood Moon/Lunar Glow:</strong> These night-time events trigger &apos;Bloodlit&apos; (x4) and &apos;Moonlit&apos; (x2) mutations respectively. Make sure you are active during these events to plant and harvest.</li>
            </ul>

            <h3 id="strategic-use-of-gear" className="text-xl font-semibold mt-6 mb-3">Strategic Use of Gear</h3>
            <p>
              The right gear can directly influence your mutation chances.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Advanced & Godly Sprinklers:</strong> These sprinklers explicitly state they boost the mutation chance of your plants for five minutes. The best time to use them is when your garden is full of multi-harvest crops, maximizing the sprinkler&apos;s uptime and potential impact.</li>
              <li><strong>Event Sprinklers:</strong> Sprinklers like the &apos;Chocolate Sprinkler&apos; or &apos;Honey Sprinkler&apos; are the only way to get their respective mutations. Save them for when you have high-value crops planted.</li>
            </ul>

            <h3 id="the-power-of-pets" className="text-xl font-semibold mt-6 mb-3">The Power of Pets</h3>
            <p>
              Pets are not just for show; they are your mutation-triggering assistants. Some of the best pets for mutations are:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Dragonfly:</strong> Turns a random crop golden every few minutes. A reliable way to get the x20 Golden mutation.</li>
              <li><strong>Polar Bear:</strong> Can trigger both &apos;Chilled&apos; and &apos;Frozen&apos; mutations, giving you a powerful combo without relying on weather.</li>
              <li><strong>Bee-type Pets:</strong> A variety of bee pets can trigger the &apos;Pollinated&apos; (x3) mutation.</li>
              <li><strong>Chicken Zombie:</strong> The only way to get the &apos;Zombified&apos; (x25) mutation.</li>
            </ul>
            <p>Choosing your active pets wisely based on your mutation goals is a key advanced strategy.</p>
            
            <h3 id="stacking-mutations" className="text-xl font-semibold mt-6 mb-3">Stacking Mutations for Exponential Gains</h3>
            <p>
              The true path to wealth is by stacking mutations. Multipliers from different mutations combine, leading to astronomical values. For example, imagine a crop that naturally mutates to &apos;Rainbow&apos; (x50). If it then gets struck by lightning (&apos;Shocked&apos;, x100), its value becomes 5000 times the base price! While extremely rare, stacking is the ultimate goal.
            </p>
            <p>
              A more achievable combo is &apos;Golden&apos; (x20) + &apos;Wet&apos; (x2), resulting in a x40 multiplier. Always be aware of how different environmental effects can combine on your crops.
            </p>

            <h2 id="value-and-rarity-analysis" className="text-2xl font-semibold mt-8 mb-4">Analyzing Value and Rarity</h2>
            <p>
              It&apos;s crucial to balance the pursuit of rare mutations with steady income.
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li><strong>Low-Hanging Fruit:</strong> Focus on reliable, weather-based mutations like &apos;Wet&apos; and &apos;Frozen&apos;. A garden full of &apos;Frozen&apos; (x10) crops is often more profitable than waiting days for one &apos;Rainbow&apos; plant.</li>
              <li><strong>High-Risk, High-Reward:</strong> Pursuing &apos;Rainbow&apos; (0.1%) or &apos;Shocked&apos; mutations is a long-term goal. Dedicate a part of your garden to multi-harvest plants and hope for the best, but don&apos;t let it distract from consistent earnings.</li>
              <li><strong>Pet-Induced Mutations:</strong> Investing in a pet like the Dragonfly is a fantastic mid-game strategy. It provides a steady stream of valuable &apos;Golden&apos; crops.</li>
            </ul>

            <h2 id="conclusion" className="text-2xl font-semibold mt-8 mb-4">Conclusion</h2>
            <p>
              Mastering crop mutations in Grow a Garden is what separates amateur farmers from true tycoons. It requires knowledge, strategy, and a bit of luck. By understanding each mutation, actively leveraging weather, gear, and pets, and aiming for powerful stacked combinations, you can unlock the full economic potential of your garden.
            </p>
            <p>
              Now go forth, experiment with these strategies, and watch your profits soar. Happy farming!
            </p>

          </div>
        </article>
      </div>
    </div>
  );
} 