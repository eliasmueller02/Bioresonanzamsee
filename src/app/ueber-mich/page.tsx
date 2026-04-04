import { GraduationCap, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Mich | Ilse Müller | BIORESONANZ am See",
  description: "Ilse Müller - HOLOSAN© Bioresonanz-Praktikerin und vegane Ernährungstrainerin in Jois.",
};

const certifications = [
  { year: "2018", title: "Vegane Ernährungstrainerin", detail: "ecodemy" },
  { year: "2018", title: "Vegane Sportlerernährung", detail: "Spezialisierung" },
  { year: "2021", title: "HOLOSAN© Bioresonanz-Praktikerin", detail: "HOLOSAN© Akademie" },
  { year: "2021", title: "Vegane Ernährung Mütter & Kinder", detail: "Spezialisierung" },
  { year: "2022", title: "Dunkelfeldmikroskopie", detail: "Phoenix Healing" },
  { year: "2023", title: "Vitalnährstoff-Therapie", detail: "Seminar" },
  { year: "2024", title: "Mentalfeld-Technik Level I", detail: "Dr. Dietrich Klinghardt" },
];

const modules = [
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
      <section className="section-padding pt-32 section-bg">
        <div className="container-max max-w-3xl">
          <div className="flex flex-col sm:flex-row items-center gap-8">
            <div className="w-32 h-32 rounded-full bg-sage-200 flex items-center justify-center shrink-0">
              <span className="text-3xl font-heading font-bold text-sage-700">IM</span>
            </div>
            <div>
              <h1 className="text-4xl font-heading font-bold mb-2">Ilse Müller</h1>
              <p className="text-sage-600 font-medium text-sm mb-3">
                HOLOSAN© Bioresonanz-Praktikerin
              </p>
              <p className="text-dark/50 leading-relaxed">
                Geboren 1976 in Wien. Praxis in Jois am Neusiedler See, seit
                2023 im neuen Tiny House in der Bahnstraße.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-heading font-bold mb-5">Mein Weg</h2>
          <div className="space-y-4 text-dark/55 leading-relaxed text-[15px]">
            <p>
              Mein Weg begann 2018 mit der Ausbildung zur veganen
              Ernährungstrainerin. Viele Klienten kämpften mit
              Nahrungsmittelunverträglichkeiten - ein Problem, das allein
              durch Ernährungsberatung oft nicht gelöst werden konnte.
            </p>
            <p>
              Diese Erkenntnis führte mich zur HOLOSAN© Bioresonanzmethode.
              2021 schloss ich die Ausbildung an der HOLOSAN© Akademie ab.
            </p>
            <p>
              Seit 2024 biete ich unter dem Label <strong>BASENbasics</strong>{" "}
              gekeimte Lebensmittelprodukte für bessere Verträglichkeit an.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding section-bg">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-heading font-bold mb-8 text-center">
            Ausbildungen
          </h2>
          <div className="space-y-3">
            {certifications.map((c) => (
              <div key={c.title + c.year} className="card flex items-center gap-4 !py-4">
                <div className="w-12 h-12 rounded-lg bg-sage-100 flex flex-col items-center justify-center shrink-0">
                  <GraduationCap className="text-sage-600" size={16} />
                  <span className="text-[10px] font-bold text-sage-700 mt-0.5">{c.year}</span>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm">{c.title}</h3>
                  <p className="text-xs text-dark/40">{c.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-heading font-bold mb-6 text-center">
            HOLOSAN© Akademie Module
          </h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {modules.map((m) => (
              <div key={m} className="flex items-center gap-3 rounded-lg px-4 py-3 bg-sage-50">
                <Award className="text-sage-500 shrink-0" size={14} />
                <span className="text-sm text-dark/60">{m}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
