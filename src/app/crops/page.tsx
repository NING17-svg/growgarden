// 作物页面组件
export default function CropsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Crop Database</h1>
      <p className="mb-8">
        Browse all plantable crops in Grow a Garden. This database will be expanded with detailed information about growth times, selling prices, and mutation conditions.
      </p>
      
      {/* 占位内容 - 将来会替换为从Supabase获取的实际数据 */}
      <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-8">
        <p className="text-yellow-700">
          Coming soon: Interactive crop database with filtering and search functionality.
        </p>
      </div>
      
      {/* 示例表格 */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Name</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Type</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Growth Time</th>
              <th className="py-2 px-4 border-b border-gray-200 bg-gray-50 text-left">Base Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Carrot</td>
              <td className="py-2 px-4 border-b border-gray-200">Vegetable</td>
              <td className="py-2 px-4 border-b border-gray-200">30 minutes</td>
              <td className="py-2 px-4 border-b border-gray-200">10 Sheckles</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Tomato</td>
              <td className="py-2 px-4 border-b border-gray-200">Fruit</td>
              <td className="py-2 px-4 border-b border-gray-200">45 minutes</td>
              <td className="py-2 px-4 border-b border-gray-200">15 Sheckles</td>
            </tr>
            <tr>
              <td className="py-2 px-4 border-b border-gray-200">Rose</td>
              <td className="py-2 px-4 border-b border-gray-200">Flower</td>
              <td className="py-2 px-4 border-b border-gray-200">60 minutes</td>
              <td className="py-2 px-4 border-b border-gray-200">25 Sheckles</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
} 