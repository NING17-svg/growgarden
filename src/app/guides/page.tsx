import { getAllPosts } from '@/lib/mdx';

// 攻略页面组件
export default function GuidesPage() {
  const posts = getAllPosts('guides');

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Game Guides</h1>
      <p className="mb-8">
        Find helpful guides for Grow a Garden, from beginner tutorials to advanced strategies. These guides will help you optimize your garden and maximize your profits.
      </p>

      {/* 攻略列表 */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.metadata.slug} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">{post.metadata.title.replace(' | growgarden.run', '')}</h2>
            <p className="text-gray-500 mb-4">
              Published: {new Date(post.metadata.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })} • {post.metadata.readTime}
            </p>
            <p className="mb-4">{post.metadata.description}</p>
            <a href={`/guides/${post.metadata.slug}`} className="text-blue-600 hover:underline">
              Read More →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}