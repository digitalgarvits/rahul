import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteData";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0B1528",
};

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.brandName} | Mentorship by Rahul (SDO HPGCL, NIT Kurukshetra Alumnus)`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description:
    "Personalised IIT-JEE guidance, GATE strategy, and core engineering mentorship from Rahul: NIT Kurukshetra EE Alumnus & Assistant Engineer / SDO at HPGCL, based at Sub-Divisional Offices, Khedar Power Plant, Barwala, Haryana.",
  keywords: [
    "Rahul JEE mentor",
    "NIT Kurukshetra EE alumnus",
    "SDO HPGCL",
    "IIT-JEE guidance",
    "GATE strategy",
    "PSU engineering mentorship",
    "JEE guidance Barwala",
    "Khedar Power Plant educational guidance",
    "college counselling JoSAA",
    "1-to-1 JEE GATE mentorship",
  ],
  authors: [{ name: "Rahul (SDO HPGCL, NIT Kurukshetra Alumnus)" }],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="flex min-h-full flex-col bg-[#F8F7F2] text-[#171717] antialiased font-sans selection:bg-[#F3A6C7] selection:text-[#171717]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
