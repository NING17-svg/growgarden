import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export interface PostMetadata {
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  slug: string;
  canonical: string;
}

export interface Post {
  metadata: PostMetadata;
  content: string;
}

export function getAllPosts(category: string): Post[] {
  const categoryPath = path.join(contentDirectory, category);
  
  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const files = fs.readdirSync(categoryPath);
  const posts = files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => {
      const filePath = path.join(categoryPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);
      
      return {
        metadata: data as PostMetadata,
        content,
      };
    })
    .sort((a, b) => new Date(b.metadata.publishedAt).getTime() - new Date(a.metadata.publishedAt).getTime());

  return posts;
}

export function getPostBySlug(category: string, slug: string): Post | null {
  try {
    const filePath = path.join(contentDirectory, category, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      metadata: data as PostMetadata,
      content,
    };
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllSlugs(category: string): string[] {
  const categoryPath = path.join(contentDirectory, category);
  
  if (!fs.existsSync(categoryPath)) {
    return [];
  }

  const files = fs.readdirSync(categoryPath);
  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace('.mdx', ''));
}
