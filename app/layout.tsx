import { AppHeader } from "@/components/Header";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import { ReduxProvider } from "@/providers/ReduxProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frontend Typescript Test",
  description: "Test for Frontend Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <ReactQueryProvider>
            <AppHeader active="todos" />
            <div className="container mx-auto max-w-2xl">{children}</div>
          </ReactQueryProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
