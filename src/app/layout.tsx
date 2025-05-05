import type { Metadata } from "next";
// Font imports are removed as per previous steps
import "./globals.css"; // Import the cleaned global styles

export const metadata: Metadata = {
  title: "XYZ Technologies | Expert Web & Mobile App Development",
  description: "XYZ Technologies builds high-performance websites and custom mobile apps (Android & iOS) to elevate your business. Contact us for a consultation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Body tag is now clean, styles come from globals.css */}
      <body>
        {children}
      </body>
    </html>
  );
}