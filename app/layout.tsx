import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Royalwood - Premium Handcrafted Wooden Furniture',
  description: 'Discover exceptional handcrafted wooden furniture made by master artisans. Premium quality, sustainable materials, and timeless designs for your home.',
  keywords: 'wooden furniture, handcrafted furniture, premium furniture, oak furniture, mahogany furniture, custom furniture',
  openGraph: {
    title: 'Royalwood - Premium Handcrafted Wooden Furniture',
    description: 'Discover exceptional handcrafted wooden furniture made by master artisans.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}