import React from 'react';

interface WebsiteSchemaProps {
  url: string;
  name: string;
  description: string;
}

interface ArticleSchemaProps {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  author?: string;
  image?: string;
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

// 网站基础结构化数据
export function WebsiteSchema({ url, name, description }: WebsiteSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": name,
    "description": description,
    "url": url,
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Grow A Garden Guide",
      "url": url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 文章结构化数据
export function ArticleSchema({
  title,
  description,
  url,
  publishedAt,
  author = "Grow A Garden Guide Team",
  image
}: ArticleSchemaProps) {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "url": url,
    "datePublished": publishedAt,
    "dateModified": publishedAt,
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://growgarden.run"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Grow A Garden Guide",
      "url": "https://growgarden.run",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growgarden.run/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    }
  };

  if (image) {
    schema.image = {
      "@type": "ImageObject",
      "url": image
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 面包屑结构化数据
export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

// 游戏指南结构化数据
export function GameGuideSchema({ title, description, url, publishedAt }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": title,
    "description": description,
    "url": url,
    "datePublished": publishedAt,
    "author": {
      "@type": "Organization",
      "name": "Grow A Garden Guide Team",
      "url": "https://growgarden.run"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Grow A Garden Guide",
      "url": "https://growgarden.run"
    },
    "about": {
      "@type": "VideoGame",
      "name": "Grow a Garden",
      "gamePlatform": "Roblox",
      "genre": "Simulation Game"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
