import { Clock, Euro, CheckCircle2, CreditCard, ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise & Leistungen | BIORESONANZ am See",
  description: "Ersttermin, Folgetermin, Kaltrotlicht, Kälteanwendung, HRV-Messung und HOLOSAN-VET. Alle Preise und Leistungen auf einen Blick.",
};

const services = [
  {
    title: "Ersttermin",
    price: "160",
    duration: "ca. 2 Stunden",
    highlight: true,
    features: [
      "Energiefeldmessung (200 energetische Werte)",
      "HRV-Messung mit Atemübungsprogramm für zu Hause",
      "Umfassende BIORESONANZ-Austestung",
      "30-minütige Frequenzanwendung",
      "Detaillierte Auswertungen und Infoblätter",
    ],
  },
  {
    title: "Folgetermin",
    price: "100",
    duration: "ca. 1 Stunde",
    highlight: false,
    features: [
      "Kontroll-Energiefeldmessung",
      "Vergleich mit vorherigen Messungen",
      "Individuell abgestimmte Frequenzanwendung",
    ],
  },
  {
    title: "REPULS Kalt-Rotlicht",
    price: "35",
    duration: "ca. 15 Minuten",
    highlight: false,
    features: [
      "Pulsierendes, tiefenwirksames rotes Kaltlicht",
      "Durchdringt Gewebe und aktiviert Zellenergie",
      "Unterstützt natürliche Regeneration",
    ],
  },
  {
    title: "Kälteanwendung",
    price: "35",
    duration: "ca. 15 Minuten",
    highlight: false,
    features: [
      "Core Cooling Technologie",
      "Kältetherapie kombiniert mit Vakuumdruck",
      "Stimuliert Durchblutung ohne Unbehagen",
    ],
  },
  {
    title: "Herzraten-Variabilität (HRV)",
    price: "79",
    duration: "ca. 20 Minuten",
    highlight: false,
    features: [
      "HRV-Messung und Analyse",
      "Persönliches Atemübungsprogramm",
      "Optional: Ayurvedische Ernährungstipps",
    ],
  },
  {
    title: "HOLOSAN-VET (Tiere)",
    price: "160",
    duration: "ca. 2 Stunden",
    highlight: false,
    features: [
      "Bioresonanz für Hunde",
      "Sanfte, schmerzfreie Anwendung",
      "Fördert Balance und Regeneration",
      "Nur nach Terminvereinbarung",
    ],
  },
];

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg section-padding pt-32">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            Preise & <span className="text-primary-600">Leistungen</span>
          </h1>
          <p className="text-dark/60 max-w-2xl mx-auto text-lg">
            Transparente Preise für Ihre ganzheitliche Gesundheit. Alle
            Leistungen auf einen Blick.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className={`card relative ${
                  s.highlight
                    ? "ring-2 ring-primary-300 shadow-lg"
                    : ""
                }`}
              >
                {s.highlight && (
                  <div className="absolute -top-3 left-6 bg-primary-300 text-dark text-xs font-bold px-3 py-1 rounded-full">
                    Empfohlen
                  </div>
                )}
                <h3 className="font-heading font-bold text-xl mb-3">
                  {s.title}
                </h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-3xl font-heading font-bold text-primary-600">
                    &euro;{s.price}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-dark/50 mb-5">
                  <Clock size={14} />
                  {s.duration}
                </div>
                <ul className="space-y-2.5 mb-6">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-dark/70"
                    >
                      <CheckCircle2
                        className="text-primary-500 shrink-0 mt-0.5"
                        size={16}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://www.bioresonanzamsee.at/termine-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-2.5 rounded-full font-heading font-semibold text-sm transition-all ${
                    s.highlight
                      ? "bg-primary-300 text-dark hover:bg-primary-400"
                      : "bg-gray-100 text-dark/70 hover:bg-primary-100"
                  }`}
                >
                  Termin buchen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-heading font-bold mb-6 text-center">
              Zahlungsinformationen
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                "Barzahlung",
                "Kartenzahlung",
                "Gutscheine",
                "Bitcoin",
              ].map((m) => (
                <div
                  key={m}
                  className="flex items-center gap-3 bg-white rounded-xl p-4"
                >
                  <CreditCard className="text-primary-500" size={20} />
                  <span className="font-medium">{m}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-white rounded-2xl p-6 border border-amber-200">
              <p className="text-sm text-dark/70">
                <strong className="text-dark">Stornierung:</strong> Für nicht
                wahrgenommene Termine ohne vorherige Absage wird eine Rechnung
                in Höhe von 75% des Terminwertes ausgestellt.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
