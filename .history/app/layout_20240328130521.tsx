import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const space_Grotesk = Space_Grotesk({ subsets: ['latin'],
  weight: ['300', '400']
})

export const metadata: Metadata = {
  title: "Price wise",
  description: "Truck your product prices effortlessly and save on your online shopping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./favicon.ico" />
      </head>
      <body className={inter.className}>
        <main className="max-w-10xl mx-auto">
          <Navbar/>
          {children}
        </main>
      </body>
    </html>
  );
}
