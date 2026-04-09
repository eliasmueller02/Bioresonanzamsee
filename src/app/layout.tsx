import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const BASE_URL = "https://www.bioresonanzamsee.at";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "BIORESONANZ am See | Ilse Müller | Jois am Neusiedler See",
    template: "%s | BIORESONANZ am See",
  },
  description:
    "Bioresonanzpraxis in Jois am Neusiedler See. HOLOSAN© Bioresonanzmethode bei energetischen Blockaden und Dysbalancen. Ilse Müller - deine Expertin für ganzheitliches Wohlbefinden.",
  keywords: [
    "Bioresonanz",
    "HOLOSAN",
    "Jois",
    "Neusiedler See",
    "Energetik",
    "Wohlbefinden",
    "Ilse Müller",
    "Bioresonanz Burgenland",
    "Frequenztherapie",
    "HRV Messung",
  ],
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "de_AT",
    url: BASE_URL,
    siteName: "BIORESONANZ am See",
    title: "BIORESONANZ am See | Ilse Müller",
    description:
      "HOLOSAN© Bioresonanzmethode in Jois am Neusiedler See. Sanfte, schmerzfreie Anwendung bei energetischen Blockaden und Dysbalancen.",
    images: [
      {
        url: "/images/praxis-collage.png",
        width: 1200,
        height: 630,
        alt: "BIORESONANZ am See - Praxis in Jois",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BIORESONANZ am See | Ilse Müller",
    description:
      "HOLOSAN© Bioresonanzmethode in Jois am Neusiedler See.",
    images: ["/images/praxis-collage.png"],
  },
  alternates: {
    canonical: BASE_URL,
  },
};

function LocalBusinessJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: "BIORESONANZ am See e.U.",
    description:
      "Bioresonanzpraxis mit HOLOSAN© Methode für ganzheitliches Wohlbefinden in Jois am Neusiedler See.",
    url: BASE_URL,
    email: "praxis@bioresonanzamsee.at",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bahnstraße 22",
      addressLocality: "Jois",
      postalCode: "7093",
      addressCountry: "AT",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 47.9561316,
      longitude: 16.7904565,
    },
    founder: {
      "@type": "Person",
      name: "Ilse Müller",
    },
    sameAs: [
      "https://www.facebook.com/bioresonanzamsee",
      "https://www.instagram.com/bioresonanz_am_see/",
    ],
    priceRange: "€€",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body>
        <LocalBusinessJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyMobileCTA />
        <CookieBanner />
      </body>
    </html>
  );
}
