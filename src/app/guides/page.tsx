// 攻略页面组件
export default function GuidesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Game Guides</h1>
      <p className="mb-8">
        Find helpful guides for Grow a Garden, from beginner tutorials to advanced strategies. These guides will help you optimize your garden and maximize your profits.
      </p>
      
      {/* 攻略列表 */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Beginner&apos;s Guide to Grow a Garden</h2>
          <p className="text-gray-500 mb-4">Published: July 8, 2025 • 15 min read</p>
          <p className="mb-4">
            New to Grow a Garden? This comprehensive guide covers all the basics you need to know to get started, including initial setup, understanding the core mechanics, and tips for your first harvest.
          </p>
          <a href="/guides/beginners-guide" className="text-blue-600 hover:underline">Read More →</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Game Mechanics Explained: The Complete Guide</h2>
          <p className="text-gray-500 mb-4">Published: June 15, 2025 • 12 min read</p>
          <p className="mb-4">
            Master Grow a Garden&apos;s core mechanics. This complete guide covers land cultivation, soil types, planting processes, watering, fertilizing, and optimal harvesting strategies to maximize your farm&apos;s potential.
          </p>
          <a href="/guides/game-mechanics-complete-guide" className="text-blue-600 hover:underline">Read More →</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Crop Mutation Secrets: A Complete Guide</h2>
          <p className="text-gray-500 mb-4">Published: July 15, 2025 • 18 min read</p>
          <p className="mb-4">
            Unlock the secrets of crop mutation in Grow a Garden! This complete guide covers all mutation types, how to trigger them, and advanced strategies to increase your mutation chances and profits.
          </p>
          <a href="/guides/crop-mutation-secrets" className="text-blue-600 hover:underline">Read More →</a>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Guide to Obtaining Rare Crops: From Common to Legendary</h2>
          <p className="text-gray-500 mb-4">Published: July 16, 2025 • 20 min read</p>
          <p className="mb-4">
            A complete roadmap to obtaining rare and legendary crops in Grow a Garden. Learn about seed rarity, strategic mutation paths, and how to maximize the value of your harvest.
          </p>
          <a href="/guides/rare-crops-roadmap" className="text-blue-600 hover:underline">Read More →</a>
        </div>
      </div>
    </div>
  );
} 