import Script from 'next/script';

// Google Adsense 组件
export default function GoogleAdsense() {
  return (
    <Script
      async
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4194035852162505"
      crossOrigin="anonymous"
      strategy="afterInteractive"
    />
  );
} 