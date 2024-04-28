import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SideMenu from "@/components/SideMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vision Pro Article",
  description: "Article",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideMenu />
        <main className="pl-52 bg-slate-50 w-full min-h-screen pr-6 py-6">
          {children}
        </main>
        <Toaster />
      </body>
    </html>
  );
}
