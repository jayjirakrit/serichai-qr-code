import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ch.Paisarn QR Code Instructions",
  description: "This is website for Ch.Paisarn QR Code Instructions",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
