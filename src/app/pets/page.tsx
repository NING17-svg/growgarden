// 宠物页面组件
export default function PetsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Pet Encyclopedia</h1>
      <p className="mb-8">
        Explore all pets available in Grow a Garden. This encyclopedia will be expanded with detailed information about pet abilities, rarity, and how to obtain them.
      </p>
      
      {/* 占位内容 - 将来会替换为从Supabase获取的实际数据 */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
        <p className="text-yellow-700">
          Coming soon: Interactive pet database with filtering by rarity and abilities.
        </p>
      </div>
      
      {/* 示例宠物卡片 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Garden Gnome</h2>
            <div className="flex items-center mb-2">
              <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">Common</span>
            </div>
            <p className="text-gray-600 mb-4">A friendly garden gnome that helps speed up crop growth by 5%.</p>
            <p className="text-sm text-gray-500">Obtained from: Basic Egg (10% chance)</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Harvest Rabbit</h2>
            <div className="flex items-center mb-2">
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">Rare</span>
            </div>
            <p className="text-gray-600 mb-4">A speedy rabbit that increases harvesting speed by 10%.</p>
            <p className="text-sm text-gray-500">Obtained from: Forest Egg (5% chance)</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-2">Golden Butterfly</h2>
            <div className="flex items-center mb-2">
              <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">Legendary</span>
            </div>
            <p className="text-gray-600 mb-4">A magical butterfly that increases crop value by 15% and has a chance to produce rare mutations.</p>
            <p className="text-sm text-gray-500">Obtained from: Premium Egg (1% chance)</p>
          </div>
        </div>
      </div>
    </div>
  );
} 