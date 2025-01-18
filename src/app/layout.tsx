"use client"; // Mark this as a Client Component

import { Inter } from "next/font/google";
import { usePathname } from "next/navigation"; // Import usePathname
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "../app/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // Get the current pathname

  // Check if the current route is part of Studio
  const isStudioRoute = pathname?.startsWith("/studio");

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Render Navbar only if not in Studio route */}
        {!isStudioRoute && <Navbar />}
        <main>{children}</main>
        {/* Render Footer only if not in Studio route */}
        {!isStudioRoute && <Footer />}
      </body>
    </html>
  );
}
