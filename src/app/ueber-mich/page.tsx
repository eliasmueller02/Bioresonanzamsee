import { Award, BookOpen, GraduationCap, Heart } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Mich | Ilse Müller | BIORESONANZ am See",
  description: "Ilse Müller - HOLOSAN© Bioresonanz-Praktikerin, vegane Ernährungstrainerin und Gründerin von BIORESONANZ am See in Jois.",
};

const certifications = [
  {
    year: "2018",
    title: "Vegane Ernährungstrainerin",
    detail: "ecodemy - Fernstudium für vegane Ernährung",
  },
  {
    year: "2018",
    title: "Vegane Sportlerernährung",
    detail: "Spezialisierung auf pflanzliche Ernährung im Sport",
  },
  {
    year: "2021",
    title: "HOLOSAN© Bioresonanz-Praktikerin",
    detail: "HOLOSAN© Akademie - Umfassende Ausbildung",
  },
  {
    year: "2021",
    title: "Vegane Ernährung für Mütter & Kinder",
    detail: "Spezialisierung auf Familienernährung",
  },
  {
    year: "2022",
    title: "Dunkelfeldmikroskopie",
    detail: "Phoenix Healing Seminar",
  },
  {
    year: "2023",
    title: "Vitalnährstoff-Therapie",
    detail: "Seminar zur Nährstoffoptimierung",
  },
  {
    year: "2024",
    title: "Mentalfeld-Technik Level I",
    detail: "nach Dr. Dietrich Klinghardt",
  },
];

const holosanModules = [
  "Anatomie, Physiologie & Pathologie",
  "ADHS & Lernschwierigkeiten",
  "Gewichtsmanagement (HOLOSLIM)",
  "Tierhaaranalyse",
  "Umweltmedizin",
  "Hormonelle Gesundheit",
  "Frauengesundheit",
];

export default function UeberMichPage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-bg section-padding pt-32">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-5 gap-10 items-center">
              <div className="md:col-span-2 flex justify-center">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center shadow-xl">
                  <span className="text-6xl font-heading font-bold text-white">
                    IM
                  </span>
                </div>
              </div>
              <div className="md:col-span-3">
                <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
                  Ilse <span className="text-primary-600">Müller</span>
                </h1>
                <p className="text-dark/60 text-lg leading-relaxed">
                  Geboren 1976 in Wien, hat Ilse Müller ihre Praxis in Jois -
                  ihrer Heimatgemeinde am Neusiedler See - aufgebaut. Seit 2023
                  empfängt sie ihre Klienten in einem neuen Tiny House in der
                  Bahnstraße.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Mein <span className="text-primary-600">Weg</span>
          </h2>
          <div className="space-y-6 text-dark/70 leading-relaxed">
            <p>
              Mein Weg zur Bioresonanz begann 2018 mit der Ausbildung zur
              veganen Ernährungstrainerin. In der Praxis stellte ich schnell
              fest, dass viele meiner Klienten mit Nahrungsmittelunverträglichkeiten
              zu kämpfen hatten - ein Problem, das allein durch
              Ernährungsberatung oft nicht ausreichend gelöst werden konnte.
            </p>
            <p>
              Diese Erkenntnis führte mich zur HOLOSAN© Bioresonanzmethode.
              2021 schloss ich meine umfassende Ausbildung an der HOLOSAN©
              Akademie ab und praktiziere seither professionell.
            </p>
            <p>
              Seit 2024 biete ich unter meinem Label{" "}
              <strong>BASENbasics</strong> auch gekeimte
              Lebensmittelprodukte für eine bessere Verträglichkeit an.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding gradient-bg">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-10 text-center">
            Ausbildungen & <span className="text-primary-600">Zertifikate</span>
          </h2>
          <div className="space-y-4">
            {certifications.map((cert) => (
              <div
                key={cert.title + cert.year}
                className="card flex items-start gap-4"
              >
                <div className="shrink-0 w-16 h-16 rounded-xl bg-primary-100 flex flex-col items-center justify-center">
                  <GraduationCap className="text-primary-600" size={20} />
                  <span className="text-xs font-bold text-primary-700 mt-0.5">
                    {cert.year}
                  </span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold">{cert.title}</h3>
                  <p className="text-sm text-dark/50">{cert.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOLOSAN Modules */}
      <section className="section-padding bg-white">
        <div className="container-max max-w-3xl">
          <h2 className="text-3xl font-heading font-bold mb-6 text-center">
            HOLOSAN© <span className="text-primary-600">Akademie</span> Module
          </h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {holosanModules.map((m) => (
              <div
                key={m}
                className="flex items-center gap-3 bg-primary-50/60 rounded-xl p-4"
              >
                <Award className="text-primary-500 shrink-0" size={18} />
                <span className="text-sm font-medium text-dark/80">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
