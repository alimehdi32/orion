

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Orion",
  description: "A no-code playground for Solana smart contracts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full bg-[#0f0f12]">
      <body className={`${inter.variable} font-sans h-full antialiased text-white bg-[#0f0f12]`}>
        {/* Header */}
        <header className="fixed top-0 w-full h-14 bg-transparent flex items-center justify-between px-4 md:px-8 py-4 z-50">
          <div className="flex items-center py-2 px-4 md:px-6 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-2xl border border-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer overflow-hidden">
            <span className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-400 drop-shadow-lg z-10">
              Orion
            </span>
          </div>
        </header>

        {/* Main content with top padding to offset fixed header */}
        <main className="pt-20 px-4 sm:px-6 md:px-12">
          {children}
        </main>
      </body>
    </html>

  );
}
