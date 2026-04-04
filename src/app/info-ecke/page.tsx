import { BookOpen, ChevronRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Info-Ecke | BIORESONANZ am See",
  description: "Wissenswertes rund um Gesundheit: Basische Ernährung, Thymusdrüse, Gluten, Entgiftung, Darmgesundheit und mehr.",
};

const topics = [
  {
    title: "Basische Ernährung",
    summary:
      "Eine zu säurelastige Ernährung kann mit verschiedenen gesundheitlichen Problemen wie Entzündungen und Gelenkschmerzen in Verbindung gebracht werden. Basische Ernährung hilft, den pH-Wert des Körpers auszugleichen.",
    details: [
      "Empfohlene Lebensmittel: Frisches Obst & Gemüse, Nüsse, Samen, Vollkornprodukte, Hülsenfrüchte und Kräuter",
      "Die Zubereitungsmethode beeinflusst, ob Lebensmittel säure- oder basenbildend im Körper wirken",
      "Ausreichend Wasser trinken unterstützt den Säure-Basen-Haushalt",
    ],
  },
  {
    title: "Thymusdrüse & Immunsystem",
    summary:
      "Die Thymusdrüse befindet sich hinter dem Brustbein und ist ein zentrales Immunorgan. Sie bildet T-Zellen zur Infektionsabwehr.",
    details: [
      "Die Bioresonanzbehandlung kann Allergeninformationen in Mastzellen modulieren",
      "Mastzellen zirkulieren durch den Thymus für Informationsupdates",
      "Autoimmunerkrankungen wie Myasthenia Gravis stehen im Zusammenhang mit Thymus-Dysfunktionen",
    ],
  },
  {
    title: "Gluten & Unverträglichkeiten",
    summary:
      "Gluten ist ein Protein in Weizen, Roggen und Gerste, das als Bindemittel fungiert. Zöliakie löst Autoimmunreaktionen aus, die das Darmgewebe schädigen.",
    details: [
      "Symptome reichen von Verdauungsproblemen bis zu neurologischen Auswirkungen",
      "Eine glutenfreie Ernährung kann bei bestätigter Unverträglichkeit Linderung bringen",
      "Bioresonanz kann unterstützend zur Identifizierung energetischer Dysbalancen eingesetzt werden",
    ],
  },
  {
    title: "Schwermetalle & Umweltgifte",
    summary:
      "Umweltschadstoffe verursachen diffuse Symptome und Stoffwechselblockaden. Aluminium, das in Lebensmittelverpackungen und Deodorants vorkommt, steht im Zusammenhang mit neurodegenerativen Erkrankungen.",
    details: [
      "Entgiftung über Leber, Niere, Lunge, Haut und Lymphsystem",
      "Die Leber wandelt Toxine in wasserlösliche Verbindungen um",
      "Regelmäßige Bewegung und ausreichend Flüssigkeit unterstützen die Entgiftung",
    ],
  },
  {
    title: "pH-Wert & Säure-Basen-Haushalt",
    summary:
      "Übersäuerung (Azidose) kann Muskel- und Gelenkschmerzen, Müdigkeit und Stoffwechselstörungen verursachen.",
    details: [
      "Lösungen: Ausgewogene Ernährung, ausreichend Wasser, regelmäßige Bewegung",
      "Stressreduktion spielt eine wichtige Rolle beim Säure-Basen-Gleichgewicht",
      "Basische Nahrungsergänzung nur nach ärztlicher Absprache",
    ],
  },
  {
    title: "Darmgesundheit",
    summary:
      "Der Darm beherbergt ca. 70% der Immunabwehrzellen und über 500 Bakterienarten. Das Mikrobiom ist so individuell wie ein Fingerabdruck.",
    details: [
      "Die Vielfalt des Mikrobioms hat sich in den letzten 100 Jahren um 50% verringert",
      "Ursachen: Verarbeitete Lebensmittel, Medikamente (besonders Antibiotika) und Stress",
      "Der Darm produziert über 20 Hormone, darunter Dopamin und Serotonin",
    ],
  },
  {
    title: "Leber & Nieren",
    summary:
      "Leber und Nieren sind die zentralen Entgiftungsorgane des Körpers.",
    details: [
      "Leber: Filtert Toxine, produziert Verdauungsenzyme, speichert Nährstoffe, bildet Immunkomponenten",
      "Nieren: Filtern Abfallprodukte, regulieren Wasser- und Elektrolythaushalt, kontrollieren Blutdruck",
      "Beide Organe arbeiten zusammen, um den Körper von Schadstoffen zu befreien",
    ],
  },
  {
    title: "Lymphsystem",
    summary:
      "Das Lymphsystem entfernt Abfallstoffe, überschüssige Flüssigkeiten und schädliche Mikroorganismen aus dem Gewebe.",
    details: [
      "Unterstützt die Immunabwehr durch Hemmung pathogener Keime",
      "Förderung: Herz-Kreislauf-Training, spezielle Massage, Stretching",
      "Gute Haltung und ausreichend Flüssigkeit sind essenziell",
    ],
  },
];

export default function InfoEckePage() {
  return (
    <>
      <section className="gradient-bg section-padding pt-32">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Info-<span className="text-primary-600">Ecke</span>
          </h1>
          <p className="text-dark/60 max-w-2xl mx-auto text-lg">
            Wissenswertes rund um Gesundheit, Ernährung und Körper.
            Informieren Sie sich über wichtige Themen.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="space-y-6">
            {topics.map((topic) => (
              <details
                key={topic.title}
                className="group card cursor-pointer"
              >
                <summary className="flex items-center gap-4 list-none">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center shrink-0">
                    <BookOpen className="text-primary-600" size={20} />
                  </div>
                  <h3 className="font-heading font-semibold text-lg flex-1">
                    {topic.title}
                  </h3>
                  <ChevronRight
                    className="text-dark/30 transition-transform group-open:rotate-90"
                    size={20}
                  />
                </summary>
                <div className="mt-4 pl-14">
                  <p className="text-dark/60 mb-4 leading-relaxed">
                    {topic.summary}
                  </p>
                  <ul className="space-y-2">
                    {topic.details.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-dark/50"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-400 shrink-0 mt-1.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 bg-amber-50 border border-amber-200 rounded-2xl p-6 text-center">
            <p className="text-sm text-dark/60">
              <strong>Hinweis:</strong> Diese Informationen dienen der
              allgemeinen Bildung und ersetzen nicht den Besuch beim Arzt
              oder eine medizinische Beratung.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
