import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welinton Suarez | Full Stack Web Developer",
  description: "Desarrollador web Full Stack, especializado en React y Node.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
