import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Datenschutz | BIORESONANZ am See",
};

export default function DatenschutzPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-heading font-bold mb-8">
          Datenschutzerklärung
        </h1>

        <div className="prose prose-gray max-w-none space-y-6 text-dark/70 leading-relaxed">
          <div>
            <h2 className="text-xl font-heading font-semibold text-dark mb-2">
              1. Verantwortlicher
            </h2>
            <p>
              BIORESONANZ am See e.U.
              <br />
              Ilse Müller
              <br />
              Bahnstraße 22, 7093 Jois, Österreich
              <br />
              E-Mail:{" "}
              <a
                href="mailto:praxis@bioresonanzamsee.at"
                className="text-primary-600 hover:underline"
              >
                praxis@bioresonanzamsee.at
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-semibold text-dark mb-2">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Beim Besuch unserer Website werden automatisch technische
              Informationen erfasst (z.B. IP-Adresse, Browsertyp,
              Zugriffszeit). Diese Daten werden ausschließlich zur
              technischen Bereitstellung der Website verwendet und nicht mit
              anderen Datenquellen zusammengeführt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-semibold text-dark mb-2">
              3. Kontaktaufnahme
            </h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben zur
              Bearbeitung der Anfrage und für den Fall von Anschlussfragen
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
              weiter.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-semibold text-dark mb-2">
              4. Ihre Rechte
            </h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
              Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
              Außerdem haben Sie das Recht auf Datenübertragbarkeit und
              können eine Beschwerde bei der zuständigen Aufsichtsbehörde
              einreichen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-semibold text-dark mb-2">
              5. Cookies
            </h2>
            <p>
              Diese Website verwendet nur technisch notwendige Cookies, die
              für den Betrieb der Seite erforderlich sind. Es werden keine
              Tracking-Cookies oder Cookies von Drittanbietern eingesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-heading font-semibold text-dark mb-2">
              6. Änderungen
            </h2>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen,
              um sie an geänderte Rechtslagen oder Änderungen des Dienstes
              anzupassen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
