import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info-Ecke",
  description: "Wissenswertes rund um Ernährung, Wohlbefinden und energetische Begleitung in der Humanenergetik.",
};

const topics = [
  {
    title: "Basische Ernährung",
    summary: "Eine basische Ernährung setzt auf einen hohen Anteil an frischem Obst, Gemüse und pflanzlichen Lebensmitteln.",
    details: [
      "Empfohlen: Frisches Obst & Gemüse, Nüsse, Samen, Vollkorn, Hülsenfrüchte, Kräuter",
      "Die Zubereitungsmethode beeinflusst die Zusammensetzung der Mahlzeit",
      "Ausreichend trinken ist Teil einer ausgewogenen Ernährung",
    ],
  },
  {
    title: "Thymusdrüse",
    summary: "Die Thymusdrüse hinter dem Brustbein ist ein Organ des Immunsystems und an der Reifung von T-Zellen beteiligt.",
    details: [
      "Sie ist vor allem in jungen Jahren besonders aktiv",
      "Die Thymusdrüse spielt eine zentrale Rolle für die körpereigene Selbstregulation",
    ],
  },
  {
    title: "Gluten & Unverträglichkeiten",
    summary: "Gluten ist ein Protein, das in Weizen, Roggen und Gerste vorkommt.",
    details: [
      "Die individuelle Verträglichkeit kann sehr unterschiedlich sein",
      "Glutenfreie Ernährung kann bei bestätigter Unverträglichkeit helfen",
      "In der energetischen Austestung können individuelle Themenbereiche betrachtet werden",
    ],
  },
  {
    title: "Umwelteinflüsse",
    summary: "Im Alltag ist der Körper verschiedenen Umwelteinflüssen ausgesetzt.",
    details: [
      "Leber, Nieren, Lunge, Haut und Lymphsystem übernehmen Aufgaben bei Stoffwechsel und Ausscheidung",
      "Die Leber wandelt bestimmte Stoffe in wasserlösliche Verbindungen um",
      "Ausreichend Bewegung und Flüssigkeitszufuhr tragen zum allgemeinen Wohlbefinden bei",
    ],
  },
  {
    title: "pH-Wert & Säure-Basen-Haushalt",
    summary: "Der Säure-Basen-Haushalt beschreibt das Verhältnis von Säuren und Basen im Körper, das über verschiedene Puffersysteme reguliert wird.",
    details: [
      "Ausgewogene Ernährung, Wasser und regelmäßige Bewegung helfen",
      "Stressreduktion spielt eine wichtige Rolle",
      "Basische Nahrungsergänzung nur nach ärztlicher Absprache",
    ],
  },
  {
    title: "Darmwohlbefinden",
    summary: "Der Darm spielt eine wichtige Rolle für das allgemeine Wohlbefinden und beherbergt eine Vielzahl von Bakterienarten.",
    details: [
      "Ernährung, Medikamente, Lebensstil und Umweltfaktoren können die Zusammensetzung des Mikrobioms beeinflussen",
      "Verarbeitete Lebensmittel, Antibiotika und Stress zählen zu den möglichen Einflussfaktoren",
      "Der Darm ist an der Bildung und Regulation verschiedener Botenstoffe beteiligt und steht in engem Austausch mit dem Nervensystem",
    ],
  },
  {
    title: "Leber & Nieren",
    summary: "Die zentralen Entgiftungsorgane des Körpers arbeiten zusammen.",
    details: [
      "Leber: Filtert Toxine, produziert Enzyme, speichert Nährstoffe",
      "Nieren: Filtern Abfall, regulieren Wasser- und Elektrolythaushalt",
      "Leber und Nieren übernehmen wichtige Aufgaben bei Stoffwechsel, Umwandlung und Ausscheidung körpereigener und körperfremder Substanzen",
    ],
  },
  {
    title: "Lymphsystem",
    summary: "Das Lymphsystem transportiert Gewebsflüssigkeit und ist ein wichtiger Bestandteil des Immunsystems.",
    details: [
      "Transportiert überschüssige Gewebsflüssigkeit zurück in den Blutkreislauf",
      "Förderung: Ausdauerbewegung, Massage, Stretching",
      "Gute Haltung und ausreichend Flüssigkeit sind essenziell",
    ],
  },
];

function FaqJsonLd() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: topics.map((t) => ({
      "@type": "Question",
      name: t.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: `${t.summary} ${t.details.join(". ")}`,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  );
}

export default function InfoEckePage() {
  return (
    <>
      <FaqJsonLd />
      <section className="section-padding pt-32 section-bg">
        <div className="container-max text-center">
          <h1 className="text-4xl font-heading font-bold mb-3">Info-Ecke</h1>
          <p className="text-dark/50 max-w-lg mx-auto">
            Wissenswertes rund um Wohlbefinden, Ernährung und Körper.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="space-y-3">
            {topics.map((topic) => (
              <details key={topic.title} className="group card cursor-pointer">
                <summary className="flex items-center gap-3 list-none [&::-webkit-details-marker]:hidden">
                  <h3 className="font-heading font-semibold text-sm flex-1">
                    {topic.title}
                  </h3>
                  <ChevronRight
                    className="text-dark/20 transition-transform group-open:rotate-90 shrink-0"
                    size={16}
                  />
                </summary>
                <div className="mt-4 pt-4 border-t border-sand-200">
                  <p className="text-dark/50 text-sm mb-3 leading-relaxed">
                    {topic.summary}
                  </p>
                  <ul className="space-y-1.5">
                    {topic.details.map((d) => (
                      <li key={d} className="flex items-start gap-2 text-xs text-dark/40">
                        <span className="w-1 h-1 rounded-full bg-sage-400 shrink-0 mt-1.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>

          <p className="mt-10 text-xs text-dark/30 text-center">
            Diese Informationen dienen der allgemeinen Bildung und ersetzen
            nicht den Besuch beim Arzt.
          </p>
        </div>
      </section>
    </>
  );
}
