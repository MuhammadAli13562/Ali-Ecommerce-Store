import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/shared/ui/layout/TopBar";
import BottomBar from "@/shared/ui/layout/BottomBar";
import { CartProvider } from "./CartProvider";
import ToastContainerWrapper from "./ToastContainerWrapper";

export const metadata: Metadata = {
  title: "Ali Store",
  description: "best clothing ecommerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="h-full bg-white">
        <CartProvider>
          <TopBar />
          <div className="mt-48 flex flex-col min-h-screen ">
            <div className="flex-1">{children}</div>
            <BottomBar />
          </div>
        </CartProvider>
        <ToastContainerWrapper />
      </body>
    </html>
  );
}
