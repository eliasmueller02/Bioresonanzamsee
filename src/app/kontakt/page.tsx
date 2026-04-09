import { Mail, MapPin, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Kontaktiere BIORESONANZ am See. Bahnstraße 22, 7093 Jois.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="section-padding pt-32 section-bg">
        <div className="container-max text-center">
          <h1 className="text-4xl font-heading font-bold mb-3">Kontakt</h1>
          <p className="text-dark/50 max-w-lg mx-auto">
            Ich freue mich auf deine Nachricht.
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
                <h3 className="font-heading font-semibold text-sm mb-3">WhatsApp</h3>
                <a
                  href="https://wa.me/436764966136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-sm text-dark/50 hover:text-[#25D366] transition-colors"
                >
                  <svg className="w-5 h-5 text-[#25D366] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Nachricht schreiben
                </a>
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
