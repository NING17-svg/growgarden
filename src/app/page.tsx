import Link from 'next/link';
import { getAllPosts } from '@/lib/mdx';

// 首页组件
export default function Home() {
  // 获取最新的3篇文章
  const latestPosts = getAllPosts('guides').slice(0, 3);
  return (
    <div className="flex flex-col">
      {/* Hero Section with Game Logo */}
      <section className="relative bg-blue-100 py-12 md:py-16">
        <div className="container mx-auto px-4 flex flex-col items-center">
          <div className="text-center mb-8">
            {/* 游戏Logo样式，参考图片 */}
            <h1 className="text-4xl md:text-6xl font-bold mb-4 md:mb-6 text-center">
              <span className="text-green-600">GROW</span>
              <span className="text-red-500 mx-1 md:mx-2">A</span>
              <span className="text-green-600">GARDEN</span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 md:mb-8 max-w-2xl mx-auto px-2">
              The ultimate guide to the popular Roblox farming simulation game
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-4 md:mt-6">
              <Link
                href="/guides"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 text-center mb-3 sm:mb-0"
              >
                Browse Guides
              </Link>
              <Link
                href="/grow-a-garden-calculator"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 md:py-3 px-4 md:px-6 rounded-lg transition duration-300 text-center"
              >
                Value Calculator
              </Link>
            </div>
          </div>

          {/* 装饰性图像元素 - 模拟游戏中的水果/植物 */}
          <div className="relative w-full max-w-4xl h-16 md:h-24 mt-6 md:mt-8 hidden sm:block">
            <div className="absolute -top-16 right-12 transform rotate-12 w-12 md:w-16 h-12 md:h-16 bg-red-500 rounded-full opacity-80"></div>
            <div className="absolute -top-12 right-32 transform -rotate-6 w-10 md:w-12 h-14 md:h-16 bg-purple-500 rounded-full opacity-80"></div>
            <div className="absolute -top-20 left-24 transform rotate-12 w-12 md:w-14 h-12 md:h-14 bg-green-400 rounded-sm opacity-80"></div>
            <div className="absolute -top-16 left-48 transform -rotate-6 w-10 md:w-12 h-10 md:h-12 bg-yellow-400 rounded-full opacity-80"></div>
          </div>
        </div>
      </section>

      {/* Game Info Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">What is Grow A Garden?</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Grow A Garden is a popular farming simulation game on Roblox, developed by MiniPoP Games. In this relaxing and enjoyable game, you can build your dream garden, raise animals, and enjoy the peaceful life of a happy farmer!
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              As a player, you start your journey with a small piece of land. Plant seeds, water them, and watch them grow into beautiful flowers, fruits, and vegetables. From carrot fields to strawberry bushes, every crop you plant brings you closer to building a royal farm.
            </p>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              To advance from a novice gardener to an award-worthy expert, you need to induce mutations in your crops to enhance their value. Mutations can occur randomly, and they are key factors that can make you a millionaire (or even a billionaire). Weather events like snow can increase your chances of achieving the &quot;snowy&quot; mutation, while equipment and pets can affect crop growth speed, value, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Game Stats Section */}
      <section className="py-10 md:py-12 bg-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center">
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">10M+</p>
              <p className="text-sm md:text-base text-gray-600">Total Downloads</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">50+</p>
              <p className="text-sm md:text-base text-gray-600">Plant Types</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">30+</p>
              <p className="text-sm md:text-base text-gray-600">Pet Varieties</p>
            </div>
            <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
              <p className="text-3xl md:text-4xl font-bold text-green-600 mb-1 md:mb-2">15+</p>
              <p className="text-sm md:text-base text-gray-600">Mutation Types</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center">Game Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-green-500 rounded-full"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-center">Easy and Fun</h3>
              <p className="text-sm md:text-base text-gray-600">
                Grow A Garden is a relaxing and enjoyable farming simulation game where you can build your dream garden,
                raise animals, and enjoy the peaceful life of a happy farmer!
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-yellow-500 rounded-full"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-center">Raising Animals</h3>
              <p className="text-sm md:text-base text-gray-600">
                Take care of your animals, feed them, and collect useful resources like eggs, milk, and wool.
                You can even raise goats, rabbits, and friendly dogs or cats to keep you company!
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-center">Exquisite Graphics</h3>
              <p className="text-sm md:text-base text-gray-600">
                Enjoy bright, cheerful graphics that bring your garden to life! Each plant, animal, and decoration
                is meticulously crafted. Design your land the way you want.
              </p>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-gray-100">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <div className="w-7 h-7 md:w-8 md:h-8 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-center">Upgrade System</h3>
              <p className="text-sm md:text-base text-gray-600">
                As your agriculture continues to develop, you need to skillfully manage resources, such as selling your
                harvest on the market, upgrading your tools, and constructing new buildings to improve efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 md:py-16 bg-blue-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-center">Game Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* Plants Card */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-green-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-green-100 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-green-500 rounded-sm transform rotate-45"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-center text-green-700">Plants Database</h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-600 text-center">Browse all plantable crops, learn about their growth times, selling prices, and mutation conditions.</p>
              <div className="text-center">
                <Link href="/crops" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-5 md:px-6 rounded-full transition duration-300">
                  View Plants
                </Link>
              </div>
            </div>

            {/* Pets Card */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-blue-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-500 rounded-full"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-center text-blue-700">Pet Encyclopedia</h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-600 text-center">Explore all pets in the game, learn about their rarity, abilities, and how to obtain them.</p>
              <div className="text-center">
                <Link href="/pets" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 md:px-6 rounded-full transition duration-300">
                  View Pets
                </Link>
              </div>
            </div>

            {/* Guides Card */}
            <div className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-purple-200 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3 md:mb-4 mx-auto">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-purple-500 rounded-full"></div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 text-center text-purple-700">Game Guides</h3>
              <p className="mb-4 md:mb-6 text-sm md:text-base text-gray-600 text-center">Read detailed game guides, from beginner tutorials to advanced strategies, to help you become a gardening master.</p>
              <div className="text-center">
                <Link href="/guides" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-5 md:px-6 rounded-full transition duration-300">
                  View Guides
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Guides Section */}
      <section className="py-12 md:py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-1 md:mb-2 text-center">Latest Guides</h2>
          <p className="text-center text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Check out our most recent guides and tutorials</p>
          <div className="space-y-5 md:space-y-6 max-w-4xl mx-auto">
            {latestPosts.map((post) => (
              <div key={post.metadata.slug} className="bg-white p-5 md:p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl md:text-2xl font-semibold mb-2">
                  {post.metadata.title.replace(' | growgarden.run', '')}
                </h3>
                <p className="text-gray-500 mb-3 md:mb-4 text-sm md:text-base">
                  Published: {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="mb-3 md:mb-4 text-sm md:text-base text-gray-600">
                  {post.metadata.description}
                </p>
                <Link href={`/guides/${post.metadata.slug}`} className="text-blue-600 hover:underline font-medium text-sm md:text-base">
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-10 md:py-12 bg-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Looking for more information?</h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
            Explore our comprehensive guides and tools to enhance your Grow A Garden experience!
          </p>
          <div className="flex justify-center">
            <Link
              href="/guides"
              className="bg-white text-green-600 hover:bg-gray-100 font-bold py-2 md:py-3 px-6 md:px-8 rounded-full transition duration-300"
            >
              Explore All Guides
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
