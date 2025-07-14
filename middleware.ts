import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host');
  const protocol = request.headers.get('x-forwarded-proto') || 'https';
  
  // 检查是否是www子域名
  if (hostname?.startsWith('www.')) {
    // 构建规范域名URL
    const canonicalHostname = hostname.replace('www.', '');
    const url = new URL(request.url);
    url.host = canonicalHostname;
    url.protocol = 'https:';
    
    // 301永久重定向到规范域名
    return NextResponse.redirect(url.toString(), 301);
  }
  
  // 确保使用HTTPS
  if (protocol === 'http') {
    const url = new URL(request.url);
    url.protocol = 'https:';
    url.host = hostname?.replace('www.', '') || 'growgarden.run';
    
    return NextResponse.redirect(url.toString(), 301);
  }
  
  return NextResponse.next();
}

// 配置中间件仅在特定路由上运行
export const config = {
  matcher: [
    /*
     * 匹配除静态文件和API路由外的所有路径
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 