import Link from "next/link";
import { Mail, MapPin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">B</span>
              </div>
              <div>
                <span className="font-heading font-bold text-lg block leading-tight">
                  BIORESONANZ
                </span>
                <span className="text-xs text-primary-300 font-medium tracking-wider">
                  am See
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              BIORESONANZ am See e.U.
              <br />
              Ihre Praxis für ganzheitliche Gesundheit in Jois am Neusiedler
              See.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary-300">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/leistungen", label: "Preise & Leistungen" },
                { href: "/ueber-mich", label: "Über Mich" },
                { href: "/info-ecke", label: "Info-Ecke" },
                { href: "/kooperationen", label: "Kooperationen" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-primary-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4 text-primary-300">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-primary-300 shrink-0" />
                Bahnstraße 22, 7093 Jois, Österreich
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-300 shrink-0" />
                <a
                  href="mailto:praxis@bioresonanzamsee.at"
                  className="hover:text-primary-300 transition-colors"
                >
                  praxis@bioresonanzamsee.at
                </a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/bioresonanzamsee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-300 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.instagram.com/bioresonanz_am_see"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-300 transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/40">
          <p>&copy; {new Date().getFullYear()} BIORESONANZ am See e.U. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white/70 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white/70 transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
