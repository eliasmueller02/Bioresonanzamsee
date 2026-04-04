import { ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info-Ecke | BIORESONANZ am See",
  description: "Wissenswertes: Basische Ernährung, Thymusdrüse, Gluten, Entgiftung, Darmgesundheit und mehr.",
};

const topics = [
  {
    title: "Basische Ernährung",
    summary: "Eine zu säurelastige Ernährung kann mit Entzündungen und Gelenkschmerzen in Verbindung stehen. Basische Ernährung hilft, den pH-Wert auszugleichen.",
    details: [
      "Empfohlen: Frisches Obst & Gemüse, Nüsse, Samen, Vollkorn, Hülsenfrüchte, Kräuter",
      "Die Zubereitungsmethode beeinflusst die Säure-Basen-Wirkung",
      "Ausreichend Wasser unterstützt den Säure-Basen-Haushalt",
    ],
  },
  {
    title: "Thymusdrüse & Immunsystem",
    summary: "Die Thymusdrüse hinter dem Brustbein ist ein zentrales Immunorgan und bildet T-Zellen zur Infektionsabwehr.",
    details: [
      "Bioresonanz kann Allergeninformationen in Mastzellen modulieren",
      "Mastzellen zirkulieren durch den Thymus für Informationsupdates",
      "Autoimmunerkrankungen stehen im Zusammenhang mit Thymus-Dysfunktionen",
    ],
  },
  {
    title: "Gluten & Unverträglichkeiten",
    summary: "Gluten ist ein Protein in Weizen, Roggen und Gerste. Zöliakie löst Autoimmunreaktionen aus, die das Darmgewebe schädigen.",
    details: [
      "Symptome reichen von Verdauungsproblemen bis zu neurologischen Auswirkungen",
      "Glutenfreie Ernährung kann bei bestätigter Unverträglichkeit helfen",
      "Bioresonanz unterstützt bei der Identifizierung energetischer Dysbalancen",
    ],
  },
  {
    title: "Schwermetalle & Umweltgifte",
    summary: "Umweltschadstoffe verursachen diffuse Symptome und Stoffwechselblockaden.",
    details: [
      "Entgiftung über Leber, Niere, Lunge, Haut und Lymphsystem",
      "Die Leber wandelt Toxine in wasserlösliche Verbindungen um",
      "Bewegung und Flüssigkeit unterstützen die Entgiftung",
    ],
  },
  {
    title: "pH-Wert & Säure-Basen-Haushalt",
    summary: "Übersäuerung kann Muskel- und Gelenkschmerzen, Müdigkeit und Stoffwechselstörungen verursachen.",
    details: [
      "Ausgewogene Ernährung, Wasser und regelmäßige Bewegung helfen",
      "Stressreduktion spielt eine wichtige Rolle",
      "Basische Nahrungsergänzung nur nach ärztlicher Absprache",
    ],
  },
  {
    title: "Darmgesundheit",
    summary: "Der Darm beherbergt ca. 70% der Immunabwehrzellen und über 500 Bakterienarten.",
    details: [
      "Mikrobiom-Vielfalt hat sich in 100 Jahren um 50% verringert",
      "Ursachen: Verarbeitete Lebensmittel, Antibiotika und Stress",
      "Der Darm produziert über 20 Hormone, darunter Dopamin und Serotonin",
    ],
  },
  {
    title: "Leber & Nieren",
    summary: "Die zentralen Entgiftungsorgane des Körpers arbeiten zusammen.",
    details: [
      "Leber: Filtert Toxine, produziert Enzyme, speichert Nährstoffe",
      "Nieren: Filtern Abfall, regulieren Wasser- und Elektrolythaushalt",
      "Beide befreien den Körper von Schadstoffen",
    ],
  },
  {
    title: "Lymphsystem",
    summary: "Entfernt Abfallstoffe, überschüssige Flüssigkeiten und schädliche Mikroorganismen.",
    details: [
      "Unterstützt Immunabwehr durch Hemmung pathogener Keime",
      "Förderung: Herz-Kreislauf-Training, Massage, Stretching",
      "Gute Haltung und ausreichend Flüssigkeit sind essenziell",
    ],
  },
];

export default function InfoEckePage() {
  return (
    <>
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
