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

export const metadata = {
  title: "Royal Cinnamon Crown | Handcrafted Cinnamon Rolls",
  description:
    "Premium, handcrafted cinnamon rolls and pastries. Elegant flavors at an accessible price, baked fresh daily in Fontana, CA (ZIP 92336). Orders via Instagram DM.",

  // Favicon + icons
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Open Graph (Facebook, Instagram, WhatsApp previews)
  openGraph: {
    title: "Royal Cinnamon Crown | Handcrafted Cinnamon Rolls",
    description:
      "Handcrafted cinnamon rolls and pastries. Premium flavor, accessible luxury. Website under construction — orders via Instagram DM.",
    url: "https://www.royalcinnamoncrown.com",
    siteName: "Royal Cinnamon Crown",
    images: [
      {
        url: "/og-image.png", // 👉 place a promo banner or logo in /public
        width: 1200,
        height: 630,
        alt: "Royal Cinnamon Crown Rolls & Pastries",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "Royal Cinnamon Crown",
    description:
      "Premium cinnamon rolls & pastries. Elegant flavors at an accessible price. Pickup in Fontana, CA (92336).",
    images: ["/og-image.png"], // Same as Open Graph
    creator: "@royalcinnamoncrown", // if you make a Twitter/X account later
  },

  // Keywords (SEO)
  keywords: [
    "cinnamon rolls",
    "pastries",
    "Fontana bakery",
    "Royal Cinnamon Crown",
    "handcrafted desserts",
    "affordable luxury sweets",
  ],

  // Author / publisher
  authors: [{ name: "Royal Cinnamon Crown", url: "https://www.royalcinnamoncrown.com" }],
  creator: "Royal Cinnamon Crown",
  publisher: "Royal Cinnamon Crown",

  // Theme color (browser + PWA look)
  themeColor: "#0B1A2B", // navy blue
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable} antialiased bg-navy text-white`}>
        {children}
      </body>
    </html>
  );
}
