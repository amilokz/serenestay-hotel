import { Cormorant_Garamond, Geist } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geist = Geist({
  variable: "--font-geist-body",
  subsets: ["latin"],
});

export const metadata = {
  title: "SereneStay — Boutique Hotel in Murree Hills",
  description:
    "Wake up above the clouds. SereneStay is a boutique mountain retreat on Cart Road, Murree — valley-view suites, bonfire nights, guided pine hikes and a Himalayan spa.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${cormorant.variable} ${geist.variable}`}>
      <body className="min-h-full bg-cream font-sans text-pine-900 antialiased">
        {children}
      </body>
    </html>
  );
}
