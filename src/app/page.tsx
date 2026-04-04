import Link from "next/link";
import {
  Brain,
  Heart,
  Shield,
  Zap,
  Leaf,
  Activity,
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";

const treatments = [
  {
    icon: Brain,
    title: "Druck im Kopf",
    desc: "Unterstützung bei Kopfdruck und Spannungsgefühlen durch gezielte Frequenzanwendung.",
  },
  {
    icon: Heart,
    title: "Unwohlsein im Darm",
    desc: "Harmonisierung des Verdauungssystems und Förderung des Wohlbefindens.",
  },
  {
    icon: Sparkles,
    title: "Psychische Belastungen",
    desc: "Energetische Balance bei Stress, Erschöpfung und emotionaler Belastung.",
  },
  {
    icon: Zap,
    title: "Konzentration",
    desc: "Steigerung der geistigen Leistungsfähigkeit und Fokus.",
  },
  {
    icon: Shield,
    title: "Immunsystem",
    desc: "Stärkung der körpereigenen Abwehrkräfte und Vitalität.",
  },
  {
    icon: Leaf,
    title: "Hautbild",
    desc: "Verbesserung des Hautbildes durch energetische Harmonisierung.",
  },
  {
    icon: Activity,
    title: "Rücken & Bewegung",
    desc: "Unterstützung bei Rückenbeschwerden und Bewegungseinschränkungen.",
  },
  {
    icon: Star,
    title: "Sport & Leistung",
    desc: "HOLOSAN© SPORT Konzept für Hobby- und Leistungssportler.",
  },
];

const steps = [
  {
    num: "01",
    title: "Austestung",
    desc: "Schmerzfreie Messung mit dem HOLOSAN© Gerät über Klebeelektroden an der Handfläche. Über 200 energetische Werte werden erfasst.",
  },
  {
    num: "02",
    title: "Analyse",
    desc: "Auswertung der Messergebnisse und Identifizierung energetischer Blockaden und Dysbalancen im Körper.",
  },
  {
    num: "03",
    title: "Anwendung",
    desc: "Individuell abgestimmte Frequenzanwendung zur Aktivierung der Selbstheilungskräfte des Körpers.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl" />
        </div>
        <div className="container-max relative z-10 py-20 px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-100/60 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles size={16} />
              HOLOSAN© Bioresonanzmethode
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-dark leading-tight mb-6">
              Ihre Energie.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-700">
                Ihre Balance.
              </span>
              <br />
              Ihr Wohlbefinden.
            </h1>
            <p className="text-lg text-dark/60 max-w-xl mb-8 leading-relaxed">
              Die HOLOSAN© Bioresonanzmethode kann bei verschiedenen
              energetischen Blockaden und Dysbalancen im Körper angewendet
              werden. Willkommen in Ihrer Praxis in Jois am Neusiedler See.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.bioresonanzamsee.at/termine-online"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Termin vereinbaren
              </a>
              <Link href="/leistungen" className="btn-outline">
                Leistungen ansehen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
              Was ist{" "}
              <span className="text-primary-600">Bioresonanz</span>?
            </h2>
            <p className="text-dark/60 text-lg leading-relaxed mb-8">
              Die HOLOSAN© Bioresonanzmethode ist eine sanfte, schmerzfreie
              energetische Anwendung. Mithilfe modernster Geräte werden
              körpereigene Frequenzmuster erfasst und harmonisiert, um die
              Selbstheilungskräfte des Körpers zu aktivieren.
            </p>
            <div className="grid sm:grid-cols-3 gap-6 text-sm">
              {[
                { label: "Schmerzfrei", desc: "Sanfte Anwendung ohne Nebenwirkungen" },
                { label: "Bis 3m Distanz", desc: "Keine Nahkörperarbeit erforderlich" },
                { label: "Ärztlich verordnungsfähig", desc: "Für Krankenkassen relevant" },
              ].map((item) => (
                <div key={item.label} className="card text-center">
                  <CheckCircle2 className="mx-auto mb-3 text-primary-500" size={28} />
                  <h3 className="font-heading font-semibold mb-1">{item.label}</h3>
                  <p className="text-dark/50">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Anwendungsgebiete */}
      <section className="section-padding gradient-bg">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              Anwendungsgebiete
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              Die Bioresonanz kann bei vielfältigen energetischen Dysbalancen
              unterstützend eingesetzt werden.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {treatments.map((t) => (
              <div key={t.title} className="card group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center mb-4 group-hover:bg-primary-200 transition-colors">
                  <t.icon className="text-primary-600" size={24} />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">
                  {t.title}
                </h3>
                <p className="text-dark/50 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
              So läuft Ihre Behandlung ab
            </h2>
            <p className="text-dark/60 max-w-2xl mx-auto">
              In drei einfachen Schritten zu Ihrem energetischen Wohlbefinden.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="relative">
                <span className="text-6xl font-heading font-bold text-primary-100">
                  {step.num}
                </span>
                <h3 className="font-heading font-semibold text-xl mt-2 mb-3">
                  {step.title}
                </h3>
                <p className="text-dark/50 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hinweis */}
      <section className="section-padding bg-primary-50/50">
        <div className="container-max">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Gut zu wissen
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 text-left text-sm">
              {[
                "Ärztlich verordnungsfähig (relevant für Krankenkassen)",
                "Funktioniert bis 3 Meter Distanz - keine Nahkörperarbeit",
                "Einige österreichische Krankenkassen übernehmen Kosten",
                "Kosten ggf. über Arbeitnehmerveranlagung absetzbar",
                "Anerkannte energetische Anwendungsmethode",
                "Ersetzt NICHT den Besuch beim Arzt",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 bg-white rounded-xl p-4"
                >
                  <CheckCircle2
                    className="text-primary-500 shrink-0 mt-0.5"
                    size={18}
                  />
                  <span className="text-dark/70">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark text-white text-center">
        <div className="container-max">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">
            Bereit für Ihre{" "}
            <span className="text-primary-300">Balance</span>?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8">
            Vereinbaren Sie jetzt Ihren Termin und starten Sie Ihren Weg zu
            mehr Wohlbefinden und Energie.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.bioresonanzamsee.at/termine-online"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Termin buchen
              <ArrowRight className="inline ml-2" size={18} />
            </a>
            <a
              href="mailto:praxis@bioresonanzamsee.at"
              className="btn-outline !border-white/30 !text-white hover:!bg-white/10"
            >
              Kontakt aufnehmen
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
