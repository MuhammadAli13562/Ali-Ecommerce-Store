import type { Metadata } from "next";

import "./globals.css";
import TopBar from "@/shared/ui/TopBar";
import BottomBar from "@/shared/ui/BottomBar";
import { CartProvider } from "./CartProvider";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "toShip",
  description: "ship through best ecommerce platform",
};

export const revalidate = 0;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-full">
        <CartProvider>
          <TopBar />
          {children}
          <BottomBar />
          <Toaster />
        </CartProvider>
      </body>
    </html>
  );
}
