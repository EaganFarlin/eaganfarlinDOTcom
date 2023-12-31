import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import "./globals.css";

import Navbar from "@/app/navbar";
import Footer from "@/app/footer";

const archivo = Archivo({ subsets: ["latin"] });

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
      <body
        className={`${archivo.className} px-8 md:px-[20vw] py-14 text-gray-50 bg-gray-950`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
