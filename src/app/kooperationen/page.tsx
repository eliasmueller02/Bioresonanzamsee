import { ExternalLink, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kooperationen | BIORESONANZ am See",
  description: "Unsere Partner: JOY NATURALS, RINGANA, HOLOSAN©, Apotheke Jois und Remove-Toxins.",
};

const partners = [
  {
    name: "JOY NATURALS",
    category: "Nahrungsergänzung",
    description:
      "Premium Nahrungsergänzungsmittel in Pulverform mit hochwertigen Inhaltsstoffen, optimalen Dosierungen und höchster Qualität - ohne Zusatzstoffe.",
    promo: "Code BEWUSSTPFLANZLICH: 10% Rabatt auf die erste Bestellung",
    url: "https://www.bewusst-pflanzlich.online",
  },
  {
    name: "RINGANA",
    category: "Frischekosmetik & Wellness",
    description:
      "Frische Kosmetik- und Wellnessprodukte mit maximal 6 Monaten Haltbarkeit. Höchste Wirkstoffkonzentration bei minimalen Konservierungsstoffen.",
    promo: null,
    url: "https://ilse-mueller.ringana.com",
  },
  {
    name: "HOLOSAN© Bioresonanz",
    category: "Medizintechnik",
    description:
      "In Österreich entwickelte und in Deutschland hergestellte Bioresonanz-Medizingeräte der neuesten Generation. Entwickelt von erfahrenen Ärzten und Therapeuten.",
    promo: null,
    url: "https://www.holosan-bioresonanz.com",
  },
  {
    name: "Apotheke Jois",
    category: "Pharmazie",
    description:
      "Individuell angefertigte pharmazeutische Produkte als ergänzende Unterstützung zur Bioresonanzbehandlung.",
    promo: null,
    url: "https://www.apothekejois.at",
  },
  {
    name: "Remove-Toxins",
    category: "Entgiftung",
    description:
      "Programm zur zellulären Entgiftung von Umweltschadstoffen und Schwermetallen. Ergänzend zur Bioresonanzbehandlung.",
    promo: null,
    url: "https://www.remove-toxins.com",
  },
];

export default function KooperationenPage() {
  return (
    <>
      <section className="gradient-bg section-padding pt-32">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Kooper<span className="text-primary-600">ationen</span>
          </h1>
          <p className="text-dark/60 max-w-2xl mx-auto text-lg">
            Starke Partner für Ihre ganzheitliche Gesundheit. Gemeinsam
            bieten wir Ihnen das Beste.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="space-y-8">
            {partners.map((p) => (
              <div key={p.name} className="card hover:-translate-y-1">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center shrink-0">
                    <span className="text-white font-heading font-bold text-xl">
                      {p.name[0]}
                    </span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="font-heading font-bold text-xl">
                          {p.name}
                        </h3>
                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                          {p.category}
                        </span>
                      </div>
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 font-medium shrink-0"
                      >
                        Website
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <p className="text-dark/60 mt-3 leading-relaxed">
                      {p.description}
                    </p>
                    {p.promo && (
                      <div className="mt-3 flex items-center gap-2 bg-primary-50 rounded-lg px-4 py-2">
                        <Sparkles
                          className="text-primary-500 shrink-0"
                          size={16}
                        />
                        <span className="text-sm font-medium text-primary-700">
                          {p.promo}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
