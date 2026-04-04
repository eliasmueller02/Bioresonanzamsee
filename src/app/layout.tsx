import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BIORESONANZ am See | Ilse Müller | Jois am Neusiedler See",
  description:
    "Bioresonanzpraxis in Jois am Neusiedler See. HOLOSAN© Bioresonanzmethode bei energetischen Blockaden und Dysbalancen. Ilse Müller - Ihre Expertin für ganzheitliche Gesundheit.",
  keywords:
    "Bioresonanz, HOLOSAN, Jois, Neusiedler See, Energetik, Gesundheit, Ilse Müller",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
