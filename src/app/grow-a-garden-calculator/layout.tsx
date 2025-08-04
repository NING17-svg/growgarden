import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Grow A Garden Calculator - Plant Value Calculator | growgarden.run',
  description: 'Calculate exact plant values with mutations and modifiers in Grow A Garden. Free online calculator for Rainbow, Gold plants with all modifiers. Get precise selling prices instantly.',
  keywords: 'Grow A Garden calculator, plant value calculator, Roblox calculator, mutation calculator, Rainbow plant value, Gold plant value, modifier calculator',
  robots: 'index, follow',
  openGraph: {
    title: 'Grow A Garden Calculator - Plant Value Calculator | growgarden.run',
    description: 'Calculate exact plant values with mutations and modifiers in Grow A Garden. Free online calculator for Rainbow, Gold plants with all modifiers.',
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