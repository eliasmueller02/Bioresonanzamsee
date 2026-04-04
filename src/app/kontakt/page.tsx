import { Mail, MapPin, Facebook, Instagram, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | BIORESONANZ am See",
  description: "Kontaktieren Sie BIORESONANZ am See in Jois. Adresse: Bahnstraße 22, 7093 Jois.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="gradient-bg section-padding pt-32">
        <div className="container-max text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold mb-4">
            <span className="text-primary-600">Kontakt</span>
          </h1>
          <p className="text-dark/60 max-w-2xl mx-auto text-lg">
            Ich freue mich auf Ihre Nachricht. Vereinbaren Sie noch heute
            Ihren Termin.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-max max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card">
                <h3 className="font-heading font-bold text-lg mb-4">
                  Praxis-Adresse
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary-500 shrink-0 mt-1" size={20} />
                    <div>
                      <p className="font-medium">BIORESONANZ am See e.U.</p>
                      <p className="text-dark/60 text-sm">
                        Bahnstraße 22
                        <br />
                        7093 Jois
                        <br />
                        Österreich
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary-500 shrink-0" size={20} />
                    <a
                      href="mailto:praxis@bioresonanzamsee.at"
                      className="text-primary-600 hover:text-primary-700 font-medium"
                    >
                      praxis@bioresonanzamsee.at
                    </a>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="font-heading font-bold text-lg mb-4">
                  Social Media
                </h3>
                <div className="space-y-3">
                  <a
                    href="https://www.facebook.com/bioresonanzamsee"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-dark/70 hover:text-primary-600 transition-colors"
                  >
                    <Facebook size={20} />
                    <span>Facebook</span>
                    <ExternalLink size={14} className="ml-auto" />
                  </a>
                  <a
                    href="https://www.instagram.com/bioresonanz_am_see"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-dark/70 hover:text-primary-600 transition-colors"
                  >
                    <Instagram size={20} />
                    <span>Instagram</span>
                    <ExternalLink size={14} className="ml-auto" />
                  </a>
                </div>
              </div>

              <div className="card">
                <h3 className="font-heading font-bold text-lg mb-4">
                  Termin vereinbaren
                </h3>
                <p className="text-dark/60 text-sm mb-4">
                  Buchen Sie Ihren Termin bequem online über unser
                  Buchungssystem.
                </p>
                <a
                  href="https://www.bioresonanzamsee.at/termine-online"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Online Termin buchen
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="card p-0 overflow-hidden h-fit">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2686.8!2d16.7904565!3d47.9561316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c4e4b0b0b0b0b%3A0x0!2sBahnstra%C3%9Fe+22%2C+7093+Jois!5e0!3m2!1sde!2sat!4v1700000000000!5m2!1sde!2sat"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Standort BIORESONANZ am See"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
