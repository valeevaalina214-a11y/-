import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

/**
 * Fonts:
 *  - Plus Jakarta Sans — wide modern grotesk for display + body (Clash/Satoshi-like).
 *  - Caveat — thin handwritten script for the "Creative Blogger Agency" accent.
 * Both are loaded via next/font and exposed as CSS variables consumed in tailwind.config.ts.
 */
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "latin-ext", "cyrillic-ext"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const caveat = Caveat({
  // Script accent is Latin only ("Creative Blogger Agency").
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rocket Agency — Creative Blogger Agency",
  description:
    "Rocket Agency — креативное блогерское агентство широкого спектра услуг на базе медийных возможностей Rocket Group.",
};

export const viewport: Viewport = {
  themeColor: "#c7bbff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={`${jakarta.variable} ${caveat.variable}`}
      // Display headings reuse Plus Jakarta Sans (heaviest grotesk weight).
      style={{ ["--font-display" as string]: jakarta.style.fontFamily }}
    >
      <body>{children}</body>
    </html>
  );
}
