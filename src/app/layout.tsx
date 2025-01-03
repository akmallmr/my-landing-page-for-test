import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Footer, Header } from '@/components';
import { MenuHeaderProvider } from '@/context/MenuHeaderContext';
import { ProductProvider } from '@/context/ProductContext';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CartX - Landing Page',
  description: 'Landing page CartX for testing edot purposed',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} antialiased scrollbar-hide`}>
        <ProductProvider>
          <MenuHeaderProvider>
            <Header />
            {children}
            <Footer />
          </MenuHeaderProvider>
        </ProductProvider>
      </body>
    </html>
  );
}
