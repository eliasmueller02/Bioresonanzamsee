import Image from "next/image";
import { Clock, Check, CreditCard } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preise & Leistungen | BIORESONANZ am See",
  description: "Ersttermin, Folgetermin, Kaltrotlicht, Kälteanwendung, HRV-Messung und HOLOSAN-VET.",
};

const services = [
  {
    title: "Ersttermin",
    price: "160",
    duration: "ca. 2 Stunden",
    highlight: true,
    features: [
      "Energiefeldmessung (200 energetische Werte)",
      "HRV-Messung mit Atemübungsprogramm",
      "Umfassende BIORESONANZ-Austestung",
      "30-minütige Frequenzanwendung",
      "Detaillierte Auswertungen und Infoblätter",
    ],
  },
  {
    title: "Folgetermin",
    price: "100",
    duration: "ca. 1 Stunde",
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
    features: [
      "Pulsierendes, tiefenwirksames Kaltlicht",
      "Aktiviert Zellenergie",
      "Unterstützt natürliche Regeneration",
    ],
  },
  {
    title: "Kälteanwendung",
    price: "35",
    duration: "ca. 15 Minuten",
    features: [
      "Core Cooling Technologie",
      "Kältetherapie mit Vakuumdruck",
      "Stimuliert Durchblutung",
    ],
  },
  {
    title: "HRV-Messung",
    price: "79",
    duration: "ca. 20 Minuten",
    features: [
      "Herzraten-Variabilität Analyse",
      "Persönliches Atemübungsprogramm",
      "Optional: Ayurvedische Ernährungstipps",
    ],
  },
  {
    title: "HOLOSAN-VET",
    price: "160",
    duration: "ca. 2 Stunden",
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
      <section className="section-padding pt-32 section-bg">
        <div className="container-max text-center">
          <h1 className="text-4xl font-heading font-bold mb-3">
            Preise & Leistungen
          </h1>
          <p className="text-dark/50 max-w-lg mx-auto mb-8">
            Alle Leistungen und Preise transparent auf einen Blick.
          </p>
          <Image
            src="/images/holosan-equipment.jpeg"
            alt="HOLOSAN Bioresonanz Geräte"
            width={480}
            height={320}
            className="rounded-xl mx-auto"
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className={`card relative ${s.highlight ? "ring-1 ring-sage-400" : ""}`}
              >
                {s.highlight && (
                  <span className="absolute -top-2.5 left-5 bg-sage-500 text-white text-[11px] font-medium px-2.5 py-0.5 rounded-md">
                    Empfohlen
                  </span>
                )}
                <h3 className="font-heading font-semibold mb-2">{s.title}</h3>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-2xl font-heading font-bold text-sage-500">
                    &euro;{s.price}
                  </span>
                </div>
                <p className="flex items-center gap-1.5 text-xs text-dark/40 mb-5">
                  <Clock size={12} />
                  {s.duration}
                </p>
                <ul className="space-y-2 mb-6">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-dark/60">
                      <Check className="text-sage-400 shrink-0 mt-0.5" size={14} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="https://myhellocash.com/widget/bioresonanz-am-see-e-u-121619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center w-full py-2 rounded-lg text-sm font-medium transition-colors ${
                    s.highlight
                      ? "bg-sage-500 text-white hover:bg-sage-600"
                      : "bg-sand-100 text-dark/60 hover:bg-sage-100"
                  }`}
                >
                  Termin buchen
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-bg !py-16">
        <div className="container-max max-w-2xl">
          <h2 className="text-xl font-heading font-bold mb-5 text-center">
            Zahlung & Stornierung
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
            {["Barzahlung", "Karte", "Gutscheine", "Bitcoin"].map((m) => (
              <div key={m} className="card text-center !py-3">
                <span className="text-sm text-dark/60">{m}</span>
              </div>
            ))}
          </div>
          <p className="text-xs text-dark/40 text-center leading-relaxed">
            Für nicht wahrgenommene Termine ohne vorherige Absage wird eine
            Rechnung in Höhe von 75% des Terminwertes ausgestellt.
          </p>
        </div>
      </section>
    </>
  );
}
