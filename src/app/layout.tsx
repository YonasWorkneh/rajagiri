import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RajaGiri",
  description: "Medical tourism",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#EB145B]`}>{children}</body>
    </html>
  );
}
