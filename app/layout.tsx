import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Link from "next/link";

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
        <div className="w-full bg-gray-950 text-gray-300 px-4 pt-4 text-xl">
          <header>
            <nav className="flex justify-end gap-5 pt-2 mx-5">
              <Link
                className="text-white
              hover:text-blue-500
              
              "
                href="/"
              >
                Home
              </Link>
              <Link
                className="text-white
              hover:text-blue-500
              
              "
                href="/blog"
              >
                Blog
              </Link>
            </nav>
          </header>
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
