import { Metadata } from 'next';

// 遵循SEO规范，为页面提供独特的标题和描述
export const metadata: Metadata = {
  title: 'Game Mechanics: Land, Planting & Harvesting Guide | Grow a Garden',
  description:
    "Master Grow a Garden's core mechanics. This complete guide covers land cultivation, soil types, planting processes, watering, fertilizing, and optimal harvesting strategies to maximize your farm's potential.",
  alternates: {
    // 规范URL，避免重复内容
    canonical: '/guides/game-mechanics-complete-guide',
  },
};

/**
 * Grow a Garden 游戏基础机制完整攻略页面
 * 内容包括：土地系统、种植流程、日常管理和收获技巧
 */
export default function GameMechanicsGuide() {
  return (
    <article className="prose lg:prose-xl dark:prose-invert">
      {/* H1 标题，清晰描述页面核心内容 */}
      <h1>Game Mechanics Explained: The Complete Guide to Land Cultivation, Planting, and Harvesting</h1>

      <p className="lead">
        Welcome, aspiring gardeners, to the ultimate guide for mastering the foundational elements of Grow a Garden! This guide will walk you through everything you need to know about land cultivation, the planting process, daily management, and strategic harvesting. Let&apos;s dig in!
      </p>

      <h2>Understanding the Land System</h2>
      <p>
        In Grow a Garden, the land system is the foundation of your farm&apos;s development. Mastering land cultivation and management will give your gaming experience a significant boost.
      </p>

      <h3>Soil Types and Properties</h3>
      <p>The game features several soil types, each suited for different crops:</p>
      <ul>
        <li>
          <strong>Basic Soil:</strong> The default soil for new players, ideal for starter crops like carrots and strawberries.
        </li>
        <li>
          <strong>Rich Soil:</strong> Higher quality than basic soil, suitable for common vegetables and flowers. It can be purchased from the Garden Shop.
        </li>
        <li>
          <strong>Premium Soil:</strong> Best for rare flowers and exotic plants. It&apos;s more expensive but yields higher quality and quantity.
        </li>
        <li>
          <strong>Magical Soil:</strong> Only obtainable during special events, this soil is essential for growing event-specific plants.
        </li>
      </ul>

      <h3>Land Expansion Strategy</h3>
      <p>As you progress, you&apos;ll need to expand your farm:</p>
      <ul>
        <li>You start with a 3x2 grid (6 farm plots).</li>
        <li>Purchase additional plots with Sheckles (in-game currency) earned from selling your harvest to the Merchant.</li>
        <li>You can expand up to a maximum of 1,000 plots.</li>
        <li>Plan your layout by grouping similar crops together for easier management and watering.</li>
      </ul>
      <blockquote>
        <p><strong>Tip:</strong> Ensure you are fully utilizing your existing land before purchasing new plots. Expanding too quickly can spread your resources thin.</p>
      </blockquote>

      <h2>The Basic Planting Process</h2>
      <p>A proper planting process is crucial for success. Every step, from seed selection to harvesting, requires careful planning.</p>

      <h3>Seed Selection and Purchasing</h3>
      <ol>
        <li><strong>Seed Shop:</strong> Sam&apos;s Shop restocks every 30 minutes, offering a variety of seeds from common to rare.</li>
        <li>
          <strong>Recommended Beginner Seeds:</strong>
          <ul>
            <li><strong>Carrots:</strong> Short growth time (5 mins), single harvest, 10 Sheckles each.</li>
            <li><strong>Strawberries:</strong> Moderate growth time (10 mins), multi-harvest, 50 Sheckles each.</li>
            <li><strong>Pumpkins:</strong> Longer growth time (15 mins), large yield, high value.</li>
          </ul>
        </li>
      </ol>

      <h3>Step-by-Step Planting Guide</h3>
      <ol>
        <li><strong>Prepare the Land:</strong> Ensure you have empty plots ready.</li>
        <li><strong>Select Seeds:</strong> Choose the desired seeds from your inventory.</li>
        <li><strong>Place Seeds:</strong> Click on a plot to plant the seed.</li>
        <li><strong>Initial Watering:</strong> Water immediately after planting to promote growth.</li>
        <li><strong>Fertilize (Optional):</strong> Use fertilizer to increase growth speed and mutation chances.</li>
      </ol>
      <blockquote>
        <p><strong>Pro Tip:</strong> Pay attention to the in-game weather forecast! Some plants grow better in specific weather conditions, maximizing your profits.</p>
      </blockquote>

      <h2>Daily Management: Watering, Fertilizing, and More</h2>
      <h3>Effective Watering Systems</h3>
      <p>Water is essential for plant growth. Proper water management is vital:</p>
      <ul>
        <li><strong>Manual Watering:</strong> Use your starter watering can for individual plants.</li>
        <li>
          <strong>Automatic Sprinklers:</strong>
          <ul>
            <li><strong>Basic Sprinkler:</strong> Waters nearby plants automatically, very useful for early-stage farms.</li>
            <li><strong>Advanced Sprinkler:</strong> Wider coverage and higher efficiency.</li>
            <li><strong>Godly Sprinkler:</strong> Significantly boosts growth rate and mutation chances.</li>
          </ul>
        </li>
      </ul>

      <h3>Fertilizing Tips</h3>
      <p>Fertilizer improves crop quality and mutation rates, a must-have skill for advanced players:</p>
      <ul>
        <li><strong>Basic Fertilizer:</strong> Slightly increases the growth speed of common crops.</li>
        <li><strong>Advanced Fertilizer:</strong> Significantly boosts mutation chances and crop weight.</li>
        <li><strong>Mutation Sprays:</strong> Target specific mutation types like &quot;Frozen&quot; or &quot;Moonlit.&quot;</li>
      </ul>

      <h3>Weather System and Strategic Planting</h3>
      <p>The in-game weather system directly impacts your farm:</p>
      <ul>
        <li><strong>Sunny Day:</strong> Crop growth increases by 20%. The best time for planting.</li>
        <li><strong>Rainy Day:</strong> Provides free watering but less sunlight, affecting certain crops.</li>
        <li><strong>Heatwave:</strong> Plants require more water; be sure to keep them hydrated.</li>
        <li><strong>Thunderstorm:</strong> A chance to trigger a &quot;Shocked&quot; mutation. Use lightning rods to direct strikes.</li>
      </ul>

      <h2>Harvesting: Timing and Techniques</h2>
      <h3>Best Time to Harvest</h3>
      <p>Harvesting at the right time can significantly increase your income:</p>
      <ol>
        <li><strong>Maturity Indicator:</strong> Hover over a plant to see its growth status.</li>
        <li><strong>Single-Harvest Crops:</strong> Harvest crops like carrots and pumpkins immediately once they are fully mature.</li>
        <li><strong>Multi-Harvest Crops:</strong> Crops like strawberries and tomatoes can be harvested multiple times.</li>
        <li><strong>Mutation Watch:</strong> If you are aiming for mutations, you can delay harvesting to wait for weather events.</li>
      </ol>

      <h3>Strategies to Boost Your Yield</h3>
      <ol>
        <li><strong>Sprinkler Clustering Method:</strong> Group high-value crops and surround them with various sprinklers. Go offline for 1-2 hours and return to harvest.</li>
        <li><strong>Weather Forecasting Method:</strong> Plant crops just before an anticipated special weather event to increase mutation chances.</li>
        <li><strong>Mutation Stacking:</strong> Multiple mutations (e.g., Golden, Wet, Chilled, Moonlit) can stack, multiplying the crop&apos;s value.</li>
      </ol>

      <h3>The Mutation System Explained</h3>
      <p>Mutations are key to increasing crop value:</p>
      <ul>
        <li><strong>Natural Mutations:</strong> Occur randomly at a low rate.</li>
        <li>
          <strong>Weather-Triggered Mutations:</strong>
          <ul>
            <li><strong>Rain:</strong> Wet mutation</li>
            <li><strong>Snow:</strong> Frozen mutation</li>
            <li><strong>Thunderstorm:</strong> Shocked mutation</li>
            <li><strong>Night/Moonlight:</strong> Moonlit mutation</li>
          </ul>
        </li>
        <li><strong>Pet-Assisted Mutations:</strong> Certain pets like the Polar Bear or Dragonfly can increase specific mutation chances.</li>
      </ul>
      <blockquote>
        <p>
          <strong>Advanced Tip:</strong> Mutations can stack! A fruit with Golden, Wet, Chilled, and Moonlit mutations could be worth over 40 times more than a normal one.
        </p>
      </blockquote>

      <h2>The Role of Pets on Your Farm</h2>
      <p>Pets in Grow a Garden are more than just cosmetic; they are vital helpers for improving efficiency:</p>
      <h3>Pet Types and Their Roles:</h3>
      <ul>
        <li><strong>Golden Retriever, Dog, Red Fox:</strong> Can dig up free seeds.</li>
        <li><strong>Cow or Pig:</strong> Suitable for all garden types.</li>
        <li><strong>Legendary Pets:</strong> Can promote crop mutations.</li>
      </ul>
      <h3>Feeding and Upgrading Pets:</h3>
      <ul>
        <li>Feed pets regularly to prevent them from getting hungry.</li>
        <li>Level up pets to get free pet gear upgrades and additional egg slots.</li>
        <li>High-level pets can drastically improve your farm&apos;s productivity.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>
        By mastering Grow a Garden&apos;s land system, planting process, daily management, and harvesting techniques, you can build a prosperous farming empire. Remember, balancing resource acquisition and expenditure is the key to success. Proper planning will ensure the continuous growth of your garden.
      </p>

      <hr />
      <p>
        <em>Posted: June 15, 2025</em>
        <br />
        <em>Last Updated: June 15, 2025</em>
      </p>
    </article>
  );
} 