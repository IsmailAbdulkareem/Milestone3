"use client";

import { CartProvider } from "../app/context/CartContext";
import { Inter } from "next/font/google";
import { usePathname } from "next/navigation";
import "./globals.css";
import Navbar from "./component/Navbar";
import Footer from "../app/component/Footer";
import { Provider } from "react-redux";
import { store } from "../app/redux/store"; // Corrected import

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/studio");

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <CartProvider>
            {!isStudioRoute && <Navbar />}
            <main>{children}</main>
            {!isStudioRoute && <Footer />}
          </CartProvider>
        </Provider>
      </body>
    </html>
  );
}
