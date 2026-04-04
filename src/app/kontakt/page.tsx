import { Mail, MapPin, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktieren Sie BIORESONANZ am See. Bahnstraße 22, 7093 Jois.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="section-padding pt-32 section-bg">
        <div className="container-max text-center">
          <h1 className="text-4xl font-heading font-bold mb-3">Kontakt</h1>
          <p className="text-dark/50 max-w-lg mx-auto">
            Ich freue mich auf Ihre Nachricht.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-max max-w-3xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="card">
                <h3 className="font-heading font-semibold text-sm mb-3">Adresse</h3>
                <div className="flex items-start gap-2.5 text-sm text-dark/55">
                  <MapPin className="text-sage-400 shrink-0 mt-0.5" size={16} />
                  <div>
                    <p className="font-medium text-dark">BIORESONANZ am See e.U.</p>
                    <p>Bahnstraße 22<br />7093 Jois, Österreich</p>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-heading font-semibold text-sm mb-3">E-Mail</h3>
                <div className="flex items-center gap-2.5">
                  <Mail className="text-sage-400 shrink-0" size={16} />
                  <a
                    href="mailto:praxis@bioresonanzamsee.at"
                    className="text-sm text-sage-500 hover:text-sage-600"
                  >
                    praxis@bioresonanzamsee.at
                  </a>
                </div>
              </div>

              <div className="card">
                <h3 className="font-heading font-semibold text-sm mb-3">Social Media</h3>
                <div className="space-y-2">
                  <a
                    href="https://www.facebook.com/bioresonanzamsee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-dark/50 hover:text-sage-400 transition-colors"
                  >
                    Facebook <ExternalLink size={12} />
                  </a>
                  <a
                    href="https://www.instagram.com/bioresonanz_am_see/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between text-sm text-dark/50 hover:text-sage-400 transition-colors"
                  >
                    Instagram <ExternalLink size={12} />
                  </a>
                </div>
              </div>

              <a
                href="https://myhellocash.com/widget/bioresonanz-am-see-e-u-121619"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary block text-center text-sm"
              >
                Online Termin buchen
              </a>
            </div>

            <div className="card !p-0 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.8!2d16.7904565!3d47.9561316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c4e4b0b0b0b0b%3A0x0!2sBahnstra%C3%9Fe+22%2C+7093+Jois!5e0!3m2!1sde!2sat!4v1700000000000!5m2!1sde!2sat"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
