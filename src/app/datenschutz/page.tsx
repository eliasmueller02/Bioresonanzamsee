import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der BIORESONANZ am See e.U. in Jois. Informationen zur Datenverarbeitung und Ihren Rechten.",
};

export default function DatenschutzPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-max max-w-2xl">
        <h1 className="text-3xl font-heading font-bold mb-8">
          Datenschutzerklärung
        </h1>

        <div className="space-y-6 text-dark/55 leading-relaxed text-sm">
          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              1. Verantwortlicher
            </h2>
            <p>
              BIORESONANZ am See e.U.<br />
              Ilse Müller<br />
              Bahnstraße 22, 7093 Jois, Österreich<br />
              E-Mail:{" "}
              <a href="mailto:praxis@bioresonanzamsee.at" className="text-sage-400 hover:underline">
                praxis@bioresonanzamsee.at
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch unserer Website werden automatisch technische
              Informationen erfasst (z.B. IP-Adresse, Browsertyp,
              Zugriffszeit). Diese Daten werden ausschließlich zur
              technischen Bereitstellung der Website verwendet.
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              3. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur
              Bearbeitung der Anfrage gespeichert. Diese Daten geben wir
              nicht ohne Ihre Einwilligung weiter.
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
              sowie auf Datenübertragbarkeit.
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              5. Cookies
            </h2>
            <p>
              Diese Website verwendet nur technisch notwendige Cookies. Es
              werden keine Tracking-Cookies oder Cookies von Drittanbietern
              eingesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              6. Änderungen
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
              anzupassen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
