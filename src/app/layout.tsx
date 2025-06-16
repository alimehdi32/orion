

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
      <body className={`${inter.variable} font-sans h-full antialiased gap-14 text-white bg-[#0f0f12] max-h-[600px]`}>
        <header className="fixed top-0 w-full h-14 mb-[150px] bg-transparent flex items-center justify-between px-8 py-14">
          <div className="flex items-center justify-between py-2 mt-8 px-6 mb-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl shadow-2xl border border-blue-600 transform transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer relative overflow-hidden">

            {/* Orion - Styled for prominence */}
            <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-300 to-purple-400 drop-shadow-lg z-10 flex-shrink-0">
              Orion
            </span>
          </div>
        </header>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
