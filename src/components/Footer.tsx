import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/70">
      <div className="container-max section-padding !py-16">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <Image
                src="/images/logo.png"
                alt="BIORESONANZ am See"
                width={28}
                height={28}
                className="rounded-full"
              />
              <span className="font-heading font-semibold text-white text-sm tracking-tight">
                BIORESONANZ <span className="text-sage-400 font-normal">am See</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              Deine Praxis für ganzheitliches Wohlbefinden
              <br />
              in Jois am Neusiedler See.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-medium text-white text-sm mb-3">
              Seiten
            </h4>
            <ul className="space-y-1.5 text-sm">
              {[
                { href: "/leistungen", label: "Leistungen" },
                { href: "/ueber-mich", label: "Über Mich" },
                { href: "/info-ecke", label: "Info-Ecke" },
                { href: "/kooperationen", label: "Kooperationen" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-medium text-white text-sm mb-3">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-sage-400 shrink-0" />
                Bahnstraße 22, 7093 Jois
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-sage-400 shrink-0" />
                <a href="mailto:praxis@bioresonanzamsee.at" className="hover:text-white transition-colors">
                  praxis@bioresonanzamsee.at
                </a>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a
                href="https://www.facebook.com/bioresonanzamsee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-white transition-colors"
              >
                Facebook
              </a>
              <span className="text-white/20">|</span>
              <a
                href="https://www.instagram.com/bioresonanz_am_see/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs hover:text-white transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} BIORESONANZ am See e.U.</p>
          <div className="flex gap-4">
            <Link href="/impressum" className="hover:text-white/60 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white/60 transition-colors">Datenschutz</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
