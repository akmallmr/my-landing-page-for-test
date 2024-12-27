import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components";
import { MenuHeaderProvider } from "@/context/MenuHeaderContext";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Specify weights you use (e.g., regular, medium, bold)
  display: "swap", // Improves font-loading behavior
});

export const metadata: Metadata = {
  title: "My Landing Page for Test",
  description: "Landing page for testing edot purposed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>
        <MenuHeaderProvider>
          <Header />
          {children}
        </MenuHeaderProvider>
      </body>
    </html>
  );
}
