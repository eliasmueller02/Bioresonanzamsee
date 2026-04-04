"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Preise & Leistungen" },
  { href: "/ueber-mich", label: "Über Mich" },
  { href: "/info-ecke", label: "Info-Ecke" },
  { href: "/kooperationen", label: "Kooperationen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-dark text-white text-sm py-2 px-4">
        <div className="container-max flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a
              href="mailto:praxis@bioresonanzamsee.at"
              className="flex items-center gap-1 hover:text-primary-300 transition-colors"
            >
              <Mail size={14} />
              praxis@bioresonanzamsee.at
            </a>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="https://www.facebook.com/bioresonanzamsee"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-300 transition-colors"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/bioresonanz_am_see"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-300 transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="container-max flex items-center justify-between h-20 px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center">
              <span className="text-white font-heading font-bold text-lg">B</span>
            </div>
            <div>
              <span className="font-heading font-bold text-lg text-dark block leading-tight">
                BIORESONANZ
              </span>
              <span className="text-xs text-primary-600 font-medium tracking-wider">
                am See
              </span>
            </div>
          </Link>

          {/* Desktop */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-full text-sm font-medium text-dark/80 hover:text-dark hover:bg-primary-100/50 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.bioresonanzamsee.at/termine-online"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary ml-3 text-sm !py-2 !px-6"
            >
              Termin buchen
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Menü"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-3 rounded-xl text-dark/80 hover:bg-primary-100/50 font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://www.bioresonanzamsee.at/termine-online"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center btn-primary mt-3"
              >
                Termin buchen
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
