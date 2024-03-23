import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/Chatbot/Chatbot";
const inter = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Sidebar } from "lucide-react";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-serif">{children}</body>
    </html>
  );
}
