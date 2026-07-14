import { ExternalLink, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kooperationen",
  description: "Unsere Partner: BASENbasics, RINGANA, BIOGENA, doTERRA, Kraftwunder, TZ-Gesundheit und mehr.",
};

const partners = [
  {
    name: "BASENbasics",
    category: "Gekeimte Lebensmittel",
    description: "Gekeimte Hülsenfrüchte, Reis, Dinkel-Pasta, Kerne & Samen. Durch Keimung und schonende Trocknung verarbeitete Lebensmittel für eine abwechslungsreiche pflanzliche Küche.",
    url: "https://www.basenbasics.at",
  },
  {
    name: "ROOT Brands - Clean Slate",
    category: "Nahrungsergänzung",
    description: "Bioavailable Silica-Tropfen mit Zeolith, Spurenmineralen und Vitamin C.",
    url: "https://therootbrands.com",
  },
  {
    name: "RINGANA",
    category: "Frischekosmetik & Supplements",
    description: "Vegane Frischekosmetik und ausgewählte Nahrungsergänzungsmittel. Frisch und hochwertig.",
    url: "https://ilsemueller.ringana.com",
    note: "Geschenkgutscheine in der Praxis erhältlich",
  },
  {
    name: "BIOGENA",
    category: "Nahrungsergänzung",
    description: "Wohlbefinden- und Wellnessprodukte, individuell auf persönliche Bedürfnisse abgestimmt.",
    url: "https://www.biogena.com",
    promo: "Code AD1345173: €25 Rabatt ab €75 Bestellwert",
  },
  {
    name: "TZ-Gesundheit",
    category: "Earthing-Produkte",
    description: "Erdungsprodukte für die Anwendung im Alltag und während der Ruhezeiten.",
    url: "https://tz-gesundheit.de",
    promo: "Code sinnbalance836: 5% Rabatt",
  },
  {
    name: "vetevo Tier-Tests",
    category: "Veterinär-Tests",
    description: "Tests für zu Hause für Hunde, Katzen und Pferde rund um Verträglichkeiten und Wohlbefinden.",
    url: "https://vetevo.de/?sca_ref=9915834.WPal1P89ZUDZpFm&utm_source=affiliate-ilse-m%C3%BCller-9915834&utm_medium=affiliate&utm_campaign=231981&utm_term=Offline-Partner-(Flyer+Code)",
  },
  {
    name: "doTERRA",
    category: "Ätherische Öle",
    description: "Hochwertige ätherische Öle und Aromatherapie-Produkte für Wohlbefinden im Alltag.",
    url: "https://office.doterra.com/ilsemueller/#/",
  },
  {
    name: "Kraftwunder",
    category: "EMS-Fitness",
    description: "EMS-Anzüge für zu Hause. Muskelaktivierung mit minimalem Zeitaufwand durch Elektromuskelstimulation.",
    url: "https://kraftwunder.de",
    promo: "Code sinnbalance5: 5% Rabatt",
  },
  {
    name: "Bücher von Ilse Müller",
    category: "Publikationen",
    description: "Veröffentlichte Bücher: Humorvolles, Affirmationen, Rezepte und Malbücher - erhältlich auf Amazon.",
    url: "https://www.amazon.de/s?k=ilse+m%C3%BCller&crid=3QSE0VZEVVG72&sprefix=ilse+m%C3%BCller%2Caps%2C159&ref=nb_sb_noss_1",
  },
];

export default function KooperationenPage() {
  return (
    <>
      <section className="section-padding pt-32 section-bg">
        <div className="container-max text-center">
          <h1 className="text-4xl font-heading font-bold mb-3">Kooperationen</h1>
          <p className="text-dark/50 max-w-lg mx-auto">
            Starke Partner für Ihr ganzheitliches Wohlbefinden.
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
                    <span className="text-[11px] font-medium text-sage-400">{p.category}</span>
                  </div>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs text-dark/30 hover:text-sage-400 transition-colors shrink-0"
                  >
                    Website <ExternalLink size={11} />
                  </a>
                </div>
                <p className="text-sm text-dark/50 leading-relaxed">{p.description}</p>
                {"note" in p && p.note && (
                  <p className="mt-2 text-xs text-dark/35 italic">{p.note}</p>
                )}
                {"promo" in p && p.promo && (
                  <div className="mt-3 flex items-center gap-2 bg-sage-50 rounded-md px-3 py-2">
                    <Sparkles className="text-sage-400 shrink-0" size={13} />
                    <span className="text-xs text-sage-600">{p.promo}</span>
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
