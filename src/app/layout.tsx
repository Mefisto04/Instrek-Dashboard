import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-pacifico",
});

export const metadata: Metadata = {
  title: "Instrek Technologies",
  description: "Shaping the Future with Next-Gen Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pacifico.variable}`}>{children}</body>
    </html>
  );
}
