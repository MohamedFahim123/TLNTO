import type { Metadata } from "next";
import "@/public/assets/css/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Favorite Job Portal",  
  description: "With Tlnto You Can Find Your Dream Job",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
