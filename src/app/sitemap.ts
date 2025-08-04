import { MetadataRoute } from 'next';

/**
 * 动态生成站点地图
 * @returns 站点地图配置
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // 定义网站域名
  const baseUrl = 'https://growgarden.run';

  // 静态页面路径
  const staticRoutes = [
    '/',
    '/guides',
    '/grow-a-garden-calculator',
  ];

  // 动态攻略页面路径
  const dynamicGuideRoutes = [
    '/guides/beginners-guide',
    '/guides/game-mechanics-complete-guide',
    '/guides/crop-mutation-secrets',
    '/guides/rare-crops-roadmap',
  ];

  // 合并所有路径并生成站点地图条目
  const allRoutes = [...staticRoutes, ...dynamicGuideRoutes];

  const sitemapEntries = allRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(), // 使用当前日期作为最后修改日期
  }));

  return sitemapEntries;
} 