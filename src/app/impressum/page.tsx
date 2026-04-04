import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | BIORESONANZ am See",
};

export default function ImpressumPage() {
  return (
    <section className="section-padding pt-32">
      <div className="container-max max-w-2xl">
        <h1 className="text-3xl font-heading font-bold mb-8">Impressum</h1>

        <div className="space-y-6 text-dark/55 leading-relaxed text-sm">
          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              Angaben gemäß § 5 ECG
            </h2>
            <p>
              BIORESONANZ am See e.U.
              <br />
              Ilse Müller
              <br />
              Bahnstraße 22
              <br />
              7093 Jois
              <br />
              Österreich
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              Kontakt
            </h2>
            <p>
              E-Mail:{" "}
              <a
                href="mailto:praxis@bioresonanzamsee.at"
                className="text-sage-600 hover:underline"
              >
                praxis@bioresonanzamsee.at
              </a>
              <br />
              Website:{" "}
              <a
                href="https://bioresonanzamsee.at"
                className="text-sage-600 hover:underline"
              >
                bioresonanzamsee.at
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              Unternehmensgegenstand
            </h2>
            <p>Energetische Anwendungen mittels Bioresonanzmethode.</p>
          </div>

          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              Haftungsausschluss
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              können wir jedoch keine Gewähr übernehmen.
            </p>
            <p>
              Die energetische Bioresonanzanwendung ersetzt nicht den Besuch
              beim Arzt oder Therapeuten. Es werden keine Heilversprechen
              gegeben.
            </p>
          </div>

          <div>
            <h2 className="text-base font-heading font-semibold text-dark mb-2">
              Urheberrecht
            </h2>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem österreichischen Urheberrecht.
              Beiträge Dritter sind als solche gekennzeichnet.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
