import Link from "next/link";
import Image from "next/image";
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
  Check,
} from "lucide-react";

const CTA_URL = "https://myhellocash.com/widget/bioresonanz-am-see-e-u-121619";

const treatments = [
  { icon: Brain, title: "Kopfdruck", desc: "Spannungsgefühle und Druck im Kopf" },
  { icon: Heart, title: "Verdauung", desc: "Unwohlsein und Dysbalancen im Darm" },
  { icon: Sparkles, title: "Psyche", desc: "Stress, Erschöpfung und Belastungen" },
  { icon: Zap, title: "Konzentration", desc: "Geistige Leistungsfähigkeit und Fokus" },
  { icon: Shield, title: "Immunsystem", desc: "Körpereigene Abwehrkräfte stärken" },
  { icon: Leaf, title: "Hautbild", desc: "Energetische Harmonisierung der Haut" },
  { icon: Activity, title: "Rücken", desc: "Beschwerden und Bewegungseinschränkungen" },
  { icon: Star, title: "Sport", desc: "HOLOSAN© SPORT für Athleten" },
];

const steps = [
  {
    num: "1",
    title: "Austestung",
    desc: "Schmerzfreie Messung mit dem HOLOSAN© Gerät. Über 200 energetische Werte werden erfasst.",
  },
  {
    num: "2",
    title: "Analyse",
    desc: "Auswertung der Ergebnisse und Identifizierung energetischer Blockaden.",
  },
  {
    num: "3",
    title: "Anwendung",
    desc: "Individuell abgestimmte Frequenzanwendung zur Aktivierung der Selbstheilungskräfte.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center bg-sand-50">
        <div className="container-max py-24 px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sage-400 font-medium text-sm tracking-wide mb-4">
                HOLOSAN© Bioresonanzmethode
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-dark leading-[1.15] mb-6">
                Ihre Energie.
                <br />
                Ihre Balance.
                <br />
                <span className="text-sage-400">Ihr Wohlbefinden.</span>
              </h1>
              <p className="text-dark/50 text-lg max-w-lg mb-10 leading-relaxed">
                Sanfte, schmerzfreie Bioresonanzmethode bei energetischen
                Blockaden und Dysbalancen. Ihre Praxis in Jois am Neusiedler See.
              </p>
              <div className="flex flex-wrap gap-3">
                <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                  Termin vereinbaren
                </a>
                <Link href="/leistungen" className="btn-outline">
                  Leistungen ansehen
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <Image
                src="/images/praxis-collage.png"
                alt="BIORESONANZ am See - Praxis und Geräte"
                width={560}
                height={560}
                className="rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Was ist Bioresonanz */}
      <section className="section-padding">
        <div className="container-max">
          <div className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Was ist Bioresonanz?
            </h2>
            <p className="text-dark/50 leading-relaxed">
              Eine sanfte, schmerzfreie energetische Anwendung. Körpereigene
              Frequenzmuster werden erfasst und harmonisiert, um die
              Selbstheilungskräfte zu aktivieren.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Schmerzfrei", sub: "Sanfte Anwendung" },
              { label: "Bis 3m Distanz", sub: "Keine Nahkörperarbeit" },
              { label: "Verordnungsfähig", sub: "Relevant für Privatversicherung" },
            ].map((item) => (
              <div key={item.label} className="card text-center py-8">
                <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center mx-auto mb-3">
                  <Check className="text-sage-400" size={18} />
                </div>
                <h3 className="font-heading font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-dark/40 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Anwendungsgebiete */}
      <section className="section-padding section-bg">
        <div className="container-max">
          <h2 className="text-3xl font-heading font-bold mb-3 text-center">
            Anwendungsgebiete
          </h2>
          <p className="text-dark/50 text-center mb-12 max-w-lg mx-auto">
            Unterstützung bei vielfältigen energetischen Dysbalancen.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {treatments.map((t) => (
              <div key={t.title} className="card-hover">
                <t.icon className="text-sage-400 mb-3" size={20} />
                <h3 className="font-heading font-semibold text-sm mb-1">{t.title}</h3>
                <p className="text-dark/40 text-sm leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geräte */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-4">
                Modernste Technologie
              </h2>
              <p className="text-dark/50 leading-relaxed mb-6">
                Ich arbeite mit HOLOSAN© Bioresonanzgeräten der neuesten
                Generation - entwickelt in Österreich und hergestellt in
                Deutschland.
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/pruefsiegel-2026.png"
                  alt="BRGOE Prüfsiegel 2026"
                  width={72}
                  height={72}
                />
                <div>
                  <p className="text-sm font-medium text-dark">Geprüft & Zertifiziert</p>
                  <p className="text-xs text-dark/40">Bioresonanz Gesellschaft Österreich</p>
                </div>
              </div>
            </div>
            <Image
              src="/images/holosan-setup.jpeg"
              alt="HOLOSAN Bioresonanz Equipment"
              width={520}
              height={390}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section-padding section-bg">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-3 text-center">
            Ablauf der Behandlung
          </h2>
          <p className="text-dark/50 text-center mb-12">
            In drei Schritten zu Ihrem Wohlbefinden.
          </p>
          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-6 items-start">
                <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center shrink-0">
                  <span className="font-heading font-bold text-sage-400 text-sm">{step.num}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold mb-1">{step.title}</h3>
                  <p className="text-dark/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gut zu wissen */}
      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">
            Gut zu wissen
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Ärztlich verordnungsfähig",
              "Funktioniert bis 3 Meter Distanz",
              "Steuerlich absetzbar (Arbeitnehmerveranlagung)",
              "Anerkannte energetische Methode",
              "Ersetzt nicht den Arztbesuch",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 bg-sand-50 rounded-lg px-4 py-3 border border-sand-200">
                <Check className="text-sage-400 shrink-0" size={16} />
                <span className="text-sm text-dark/60">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-dark text-center">
        <div className="container-max">
          <h2 className="text-3xl font-heading font-bold text-white mb-3">
            Bereit für Ihre Balance?
          </h2>
          <p className="text-white/40 max-w-md mx-auto mb-8">
            Vereinbaren Sie Ihren Termin und starten Sie Ihren Weg zu mehr Wohlbefinden.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-sage-400 hover:!bg-sage-300">
              Termin buchen <ArrowRight className="inline ml-2" size={16} />
            </a>
            <a href="mailto:praxis@bioresonanzamsee.at" className="btn-outline !border-white/20 !text-white/70 hover:!text-white hover:!bg-white/5">
              E-Mail schreiben
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
