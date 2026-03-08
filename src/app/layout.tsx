import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";
import "@/lib/storyblok";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Mr Snackz - Taste the Golden Crunch of Kerala",
  description: "Artisan-crafted Nendran banana chips from Kerala.",
  icons: {
    icon: "/assets/logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased bg-[#FEF9F2]`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
