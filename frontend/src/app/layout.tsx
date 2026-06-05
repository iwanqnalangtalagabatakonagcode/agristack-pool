import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgriStack Pool",
  description: "A farmer input-pooling escrow for seed, fertilizer, and shared purchase orders with transparent cooperative settlement.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
