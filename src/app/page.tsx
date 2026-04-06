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
import ScrollReveal from "@/components/ScrollReveal";

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

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

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
                Deine Energie.
                <br />
                Deine Balance.
                <br />
                <span className="text-sage-400">Dein Wohlbefinden.</span>
              </h1>
              <p className="text-dark/50 text-lg max-w-lg mb-10 leading-relaxed">
                Sanfte, schmerzfreie Bioresonanzmethode bei energetischen
                Blockaden und Dysbalancen. Deine Praxis in Jois am Neusiedler See.
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
                className="rounded-2xl shadow-xl shadow-sage-900/10"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Was ist Bioresonanz */}
      <section className="section-padding">
        <div className="container-max">
          <ScrollReveal>
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
          </ScrollReveal>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Schmerzfrei", sub: "Sanfte Anwendung" },
              { label: "Bis 3m Distanz", sub: "Keine Nahkörperarbeit" },
              { label: "Verordnungsfähig", sub: "Relevant für Privatversicherung" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 100}>
                <div className="card text-center py-8">
                  <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center mx-auto mb-3">
                    <Check className="text-sage-400" size={18} />
                  </div>
                  <h3 className="font-heading font-semibold text-sm mb-1">{item.label}</h3>
                  <p className="text-dark/40 text-sm">{item.sub}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Anwendungsgebiete */}
      <section className="section-padding section-bg">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold mb-3 text-center">
              Anwendungsgebiete
            </h2>
            <p className="text-dark/50 text-center mb-12 max-w-lg mx-auto">
              Unterstützung bei vielfältigen energetischen Dysbalancen.
            </p>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {treatments.map((t, i) => (
              <ScrollReveal key={t.title} delay={i * 60}>
                <div className="card-hover hover:-translate-y-1">
                  <t.icon className="text-sage-400 mb-3" size={20} />
                  <h3 className="font-heading font-semibold text-sm mb-1">{t.title}</h3>
                  <p className="text-dark/40 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Geräte */}
      <section className="section-padding">
        <div className="container-max">
          <ScrollReveal>
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
                className="rounded-xl shadow-lg shadow-sage-900/10"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ablauf */}
      <section className="section-padding section-bg">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold mb-3 text-center">
              Ablauf der Behandlung
            </h2>
            <p className="text-dark/50 text-center mb-12">
              In drei Schritten zu deinem Wohlbefinden.
            </p>
          </ScrollReveal>
          <div className="space-y-8">
            {steps.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 150}>
                <div className="flex gap-6 items-start">
                  <div className="w-10 h-10 rounded-lg bg-sage-100 flex items-center justify-center shrink-0">
                    <span className="font-heading font-bold text-sage-400 text-sm">{step.num}</span>
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold mb-1">{step.title}</h3>
                    <p className="text-dark/50 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bewertungen */}
      <section className="section-padding">
        <div className="container-max max-w-4xl">
          <ScrollReveal>
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-2 mb-3">
                <GoogleIcon className="w-6 h-6" />
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-dark/40">5,0</span>
              </div>
              <h2 className="text-3xl font-heading font-bold mb-2">
                Das sagen meine Klient:innen
              </h2>
              <a
                href="https://www.google.com/maps/place/BIORESONANZ+am+See+e.U./"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-dark/40 hover:text-sage-400 transition-colors"
              >
                Google Bewertungen
              </a>
            </div>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                name: "Ilse F.",
                text: "Deine Behandlungen haben mir sehr gut geholfen und auch die Ernährungsumstellung hat sich auf meinen Körper positiv ausgewirkt. Die Basic-Produkte von deiner Praxis sind schnell zubereitet und schmecken auch super gut. Ich empfehle dich zu 100% weiter.",
                time: "vor 11 Monaten",
              },
              {
                name: "Martina G.",
                text: "Ich bin zu Ilse gekommen, weil mir permanent schlecht und übel war. Durch Austestungen und sämtliche Therapien geht es meinem Magen mittlerweile hervorragend!! Zusätzlich habe ich Unterstützung für die Vorbereitung auf einen Laufbewerb in Anspruch genommen - den Bewerb konnte ich mit meiner persönlichen Bestmarke finishen!",
                time: "vor 2 Jahren",
              },
              {
                name: "Theresa W.",
                text: "Ilse Müller hat uns sehr sehr geholfen die Unverträglichkeiten unseres Sohnes in den Griff zu bekommen! Vor allem das Austesten über die Haare war für mich einfach der Wahnsinn! Das bedeutete überhaupt keine Schmerzen für meinen Sohn! Ich kann Ilse wirklich sehr weiterempfehlen!",
                time: "vor 2 Jahren",
              },
            ].map((r, i) => (
              <ScrollReveal key={r.name} delay={i * 100}>
                <div className="card flex flex-col h-full">
                  <div className="flex items-center gap-1.5 mb-3">
                    <GoogleIcon className="w-4 h-4" />
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <svg key={j} className="w-3.5 h-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-dark/55 leading-relaxed mb-4 flex-1">
                    &ldquo;{r.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-dark">{r.name}</span>
                    <span className="text-xs text-dark/30">{r.time}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="text-center mt-8">
              <a
                href="https://www.google.com/maps/place/BIORESONANZ+am+See+e.U./"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline !text-sm"
              >
                Alle Google-Bewertungen ansehen
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gut zu wissen */}
      <section className="section-padding section-bg">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-heading font-bold mb-8 text-center">
              Gut zu wissen
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              "Ärztlich verordnungsfähig",
              "Funktioniert bis 3 Meter Distanz",
              "Steuerlich absetzbar (Arbeitnehmerveranlagung)",
              "Anerkannte energetische Methode",
              "Ersetzt nicht den Arztbesuch",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={i * 80}>
                <div className="flex items-center gap-3 bg-white rounded-lg px-4 py-3 border border-sand-200">
                  <Check className="text-sage-400 shrink-0" size={16} />
                  <span className="text-sm text-dark/60">{item}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-dark via-dark to-sage-900 text-center">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-3xl font-heading font-bold text-white mb-3">
              Bereit für deine Balance?
            </h2>
            <p className="text-white/40 max-w-md mx-auto mb-8">
              Vereinbare deinen Termin und starte deinen Weg zu mehr Wohlbefinden.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a href={CTA_URL} target="_blank" rel="noopener noreferrer" className="btn-primary !bg-sage-400 hover:!bg-sage-300">
                Termin buchen <ArrowRight className="inline ml-2" size={16} />
              </a>
              <a href="mailto:praxis@bioresonanzamsee.at" className="btn-outline !border-white/20 !text-white/70 hover:!text-white hover:!bg-white/5">
                E-Mail schreiben
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Spacer for mobile sticky CTA */}
      <div className="h-16 lg:hidden" />
    </>
  );
}
