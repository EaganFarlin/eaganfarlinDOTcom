import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

import Navbar from "@/app/(ui)/navbar";
import Footer from "@/app/(ui)/footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: { template: "%s | Eagan Farlin", default: "Eagan Farlin" },
  description: "Passionate developer on an endless coding adventure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="px-8 md:px-[20vw] py-14 text-gray-50 bg-gray-950">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
