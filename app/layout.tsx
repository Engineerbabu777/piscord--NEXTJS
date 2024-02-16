import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import {ClerkProvider} from '@clerk/nextjs';
const inter = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Discord Clone",
  description: "Building Discord Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ClerkProvider>
        {children}
      </ClerkProvider>

      </body>
    </html>
  );
}
