import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs } from '@/lib/mdx';
import { mdxComponents } from '@/components/MDXComponents';
import { GameGuideSchema, BreadcrumbSchema } from '@/components/StructuredData';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// 生成静态参数
export async function generateStaticParams() {
  const slugs = getAllSlugs('guides');
  return slugs.map((slug) => ({
    slug,
  }));
}

// 生成元数据
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug('guides', slug);
  
  if (!post) {
    return {
      title: 'Guide Not Found',
      description: 'The requested guide could not be found.',
    };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    keywords: `${post.metadata.title}, Grow A Garden guide, Roblox farming, game strategy`,
    robots: 'index, follow',
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      url: post.metadata.canonical,
      siteName: 'Grow A Garden',
      locale: 'en_US',
      type: 'article',
      publishedTime: post.metadata.publishedAt,
    },
    alternates: {
      canonical: post.metadata.canonical,
    },
  };
}



export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug('guides', slug);

  if (!post) {
    notFound();
  }

  // 面包屑数据
  const breadcrumbItems = [
    { name: 'Home', url: 'https://growgarden.run' },
    { name: 'Guides', url: 'https://growgarden.run/guides' },
    { name: post.metadata.title.replace(' | growgarden.run', ''), url: post.metadata.canonical }
  ];

  return (
    <div className="py-12 bg-blue-50">
      {/* 结构化数据 */}
      <GameGuideSchema
        title={post.metadata.title}
        description={post.metadata.description}
        url={post.metadata.canonical}
        publishedAt={post.metadata.publishedAt}
      />
      <BreadcrumbSchema items={breadcrumbItems} />

      <div className="container mx-auto px-4">
        {/* 面包屑导航 */}
        <nav className="mb-6 text-sm text-gray-600">
          <ol className="flex items-center space-x-2">
            <li><a href="/" className="hover:text-blue-600">Home</a></li>
            <li className="before:content-['/'] before:mx-2">
              <a href="/guides" className="hover:text-blue-600">Guides</a>
            </li>
            <li className="before:content-['/'] before:mx-2 text-gray-900">
              {post.metadata.title.replace(' | growgarden.run', '')}
            </li>
          </ol>
        </nav>

        <article className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="prose prose-lg max-w-none">
            <MDXRemote
              source={post.content}
              components={mdxComponents}
            />
          </div>
        </article>
      </div>
    </div>
  );
}
