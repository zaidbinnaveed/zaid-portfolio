import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  weight: ["300", "400", "500", "600", "700"]
});

export const metadata: Metadata = {
  title: "Zaid Bin Naveed | AI/ML Engineer",
  description: "AI/ML Engineer · Creative Technologist · Automation Enthusiast.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} bg-[#050508] text-slate-200 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}