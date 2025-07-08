import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO metadata configuration
export const metadata: Metadata = {
  title: "Grow A Garden - Game Guide & Database | growgarden.run",
  description: "Comprehensive guide, crop data, pet encyclopedia and advanced strategies for Roblox game Grow A Garden. Find growth times, selling prices and mutation conditions.",
  keywords: "Grow A Garden, Roblox, guide, crops, pets, mutations, game guide",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Grow A Garden - Game Guide & Database | growgarden.run",
    description: "Comprehensive guide, crop data, pet encyclopedia and advanced strategies for Roblox game Grow A Garden.",
    url: "https://growgarden.run",
    siteName: "Grow A Garden",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://growgarden.run" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-blue-100 to-blue-200`}
      >
        <header className="bg-green-600 text-white p-4 shadow-md">
          <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
            <Link href="/" className="text-2xl font-bold mb-2 sm:mb-0 flex items-center">
              <span className="text-yellow-300">Grow</span> 
              <span className="text-red-500 mx-1">A</span> 
              <span className="text-green-300">Garden</span>
            </Link>
            <nav>
              <ul className="flex space-x-4">
                <li><Link href="/crops" className="hover:underline">Plants</Link></li>
                <li><Link href="/pets" className="hover:underline">Pets</Link></li>
                <li><Link href="/guides" className="hover:underline">Guides</Link></li>
                <li><Link href="/calculator" className="hover:underline">Calculator</Link></li>
                <li><Link href="/codes" className="hover:underline">Codes</Link></li>
              </ul>
            </nav>
          </div>
        </header>
        <div className="min-h-screen">
          {children}
        </div>
        <footer className="bg-gray-800 text-white p-6 mt-8">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-3">About</h3>
              <p className="text-gray-300">
                Grow A Garden is a relaxing and fun farming simulation game where you can build your dream garden, raise animals and enjoy the peaceful life of a happy farmer!
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Pages</h3>
              <ul className="space-y-2">
                <li><Link href="/crops" className="text-gray-300 hover:text-white">Plants Tier List</Link></li>
                <li><Link href="/pets" className="text-gray-300 hover:text-white">Pet Tier List</Link></li>
                <li><Link href="/calculator" className="text-gray-300 hover:text-white">Fruit Value Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-3">Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Discord</a></li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto mt-6 pt-6 border-t border-gray-700 text-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Grow A Garden | growgarden.run</p>
            <p className="mt-1">This site is not officially affiliated with Grow A Garden, it&apos;s a fanmade tool.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
