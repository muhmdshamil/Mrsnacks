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
  metadataBase: new URL("https://mrsnackz.com"),
  title: {
    default: "mrsnackz - Authentic Kerala Banana Chips & Snacks",
    template: "%s | mrsnackz"
  },
  description: "Experience the authentic taste of Kerala with mrsnackz. Artisan-crafted Nendran banana chips, spicy mixtures, and traditional treats made with pure coconut oil.",
  keywords: ["banana chips", "kerala snacks", "nendran chips", "mrsnacks", "mrsnackz", "authentic south indian snacks", "coconut oil fried snacks"],
  authors: [{ name: "mrsnackz" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/assets/logo/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/logo/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo/logo.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "mrsnackz - Authentic Kerala Banana Chips & Snacks",
    description: "Handcrafted Nendran banana chips from the heart of Kerala. Pure, crispy, and delicious.",
    url: "https://mrsnackz.com",
    siteName: "mrsnackz",
    images: [
      {
        url: "/favicon.ico",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "mrsnackz - The Golden Crunch of Kerala",
    description: "Premium handcrafted Kerala snacks delivered to your door.",
    images: ["/assets/logo/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
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
