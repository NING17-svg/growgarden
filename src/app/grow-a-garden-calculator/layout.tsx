import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FREE Plant Calculator - Max Your Profits! | growgarden.run',
  description: '💰 Calculate EXACT plant values instantly! Rainbow & Gold mutations, all modifiers included. Maximize your Sheckles earnings in Grow A Garden!',
  keywords: 'Grow A Garden calculator, plant value calculator, Roblox calculator, mutation calculator, Rainbow plant value, Gold plant value, modifier calculator',
  robots: 'index, follow',
  openGraph: {
    title: 'FREE Plant Calculator - Max Your Profits! | growgarden.run',
    description: '💰 Calculate EXACT plant values instantly! Rainbow & Gold mutations, all modifiers included. Maximize your Sheckles earnings!',
    url: 'https://growgarden.run/grow-a-garden-calculator',
    siteName: 'Grow A Garden',
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://growgarden.run/grow-a-garden-calculator',
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}