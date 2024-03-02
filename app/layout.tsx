import type { Metadata } from "next";

import "./globals.css";
import TopBar from "@/shared/ui/layout/TopBar";
import BottomBar from "@/shared/ui/layout/BottomBar";
import { CartProvider } from "./CartProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "toShip",
  description: "ship through best ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full bg-white">
        <CartProvider>
          <TopBar />
          <div className="absolute mt-48">
            {children}
            <BottomBar />
            <Toaster />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
