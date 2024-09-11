import localFont from "next/font/local";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="emerald">
      <body className="antialiased">{children}</body>
    </html>
  );
}
