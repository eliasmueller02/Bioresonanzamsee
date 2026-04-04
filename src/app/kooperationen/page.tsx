import { ExternalLink, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kooperationen | BIORESONANZ am See",
  description: "Partner: JOY NATURALS, RINGANA, HOLOSAN©, Apotheke Jois, Remove-Toxins.",
};

const partners = [
  {
    name: "JOY NATURALS",
    category: "Nahrungsergänzung",
    description: "Premium Nahrungsergänzungsmittel in Pulverform. Hochwertige Inhaltsstoffe, optimale Dosierungen - ohne Zusatzstoffe.",
    promo: "Code BEWUSSTPFLANZLICH: 10% auf die erste Bestellung",
    url: "https://www.bewusst-pflanzlich.online",
  },
  {
    name: "RINGANA",
    category: "Frischekosmetik",
    description: "Frische Kosmetik- und Wellnessprodukte mit max. 6 Monaten Haltbarkeit. Höchste Wirkstoffkonzentration bei minimalen Konservierungsstoffen.",
    url: "https://ilse-mueller.ringana.com",
  },
  {
    name: "HOLOSAN©",
    category: "Medizintechnik",
    description: "In Österreich entwickelte und in Deutschland hergestellte Bioresonanz-Geräte der neuesten Generation.",
    url: "https://www.holosan-bioresonanz.com",
  },
  {
    name: "Apotheke Jois",
    category: "Pharmazie",
    description: "Individuell angefertigte pharmazeutische Produkte als ergänzende Unterstützung zur Bioresonanzbehandlung.",
    url: "https://www.apothekejois.at",
  },
  {
    name: "Remove-Toxins",
    category: "Entgiftung",
    description: "Programm zur zellulären Entgiftung von Umweltschadstoffen und Schwermetallen.",
    url: "https://www.remove-toxins.com",
  },
];

export default function KooperationenPage() {
  return (
    <>
      <section className="section-padding pt-32 section-bg">
        <div className="container-max text-center">
          <h1 className="text-4xl font-heading font-bold mb-3">Kooperationen</h1>
          <p className="text-dark/50 max-w-lg mx-auto">
            Starke Partner für Ihre ganzheitliche Gesundheit.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="space-y-4">
            {partners.map((p) => (
              <div key={p.name} className="card-hover">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <h3 className="font-heading font-semibold">{p.name}</h3>
                    <span className="text-[11px] font-medium text-sage-600">{p.category}</span>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-dark/30 hover:text-sage-600 transition-colors shrink-0"
                  >
                    Website <ExternalLink size={11} />
                  </a>
                </div>
                <p className="text-sm text-dark/50 leading-relaxed">{p.description}</p>
                {"promo" in p && p.promo && (
                  <div className="mt-3 flex items-center gap-2 bg-sage-50 rounded-md px-3 py-2">
                    <Sparkles className="text-sage-500 shrink-0" size={13} />
                    <span className="text-xs text-sage-700">{p.promo}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
