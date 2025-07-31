import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getAllSlugs } from '@/lib/mdx';
import { mdxComponents } from '@/components/MDXComponents';

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

  return (
    <div className="py-12 bg-blue-50">
      <div className="container mx-auto px-4">
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
