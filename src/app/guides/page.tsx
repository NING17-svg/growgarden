// 攻略页面组件
export default function GuidesPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Game Guides</h1>
      <p className="mb-8">
        Find helpful guides for Grow a Garden, from beginner tutorials to advanced strategies. These guides will help you optimize your garden and maximize your profits.
      </p>
      
      {/* 示例攻略列表 */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Beginner's Guide to Grow a Garden</h2>
          <p className="text-gray-500 mb-4">Published: July 8, 2025 • 15 min read</p>
          <p className="mb-4">
            New to Grow a Garden? This comprehensive guide covers all the basics you need to know to get started, including initial setup, understanding the core mechanics, and tips for your first harvest.
          </p>
          <a href="/guides/beginners-guide" className="text-blue-600 hover:underline">Read More →</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Crop Mutation Guide</h2>
          <p className="text-gray-500 mb-4">Published: June 3, 2025 • 8 min read</p>
          <p className="mb-4">
            Learn how to trigger mutations in your crops to grow rare and valuable variants. This guide explains the mutation mechanics, optimal conditions, and strategies for increasing your chances.
          </p>
          <a href="/guides/crop-mutation-guide" className="text-blue-600 hover:underline">Read More →</a>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Maximizing Profit: Advanced Farming Techniques</h2>
          <p className="text-gray-500 mb-4">Published: July 12, 2025 • 15 min read</p>
          <p className="mb-4">
            Ready to take your garden to the next level? This advanced guide covers optimal crop rotation, pet synergies, and land utilization strategies to maximize your Sheckles income.
          </p>
          <a href="/guides/maximizing-profit" className="text-blue-600 hover:underline">Read More →</a>
        </div>
      </div>
    </div>
  );
} 