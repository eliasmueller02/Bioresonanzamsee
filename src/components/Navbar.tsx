"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/ueber-mich", label: "Über Mich" },
  { href: "/info-ecke", label: "Info-Ecke" },
  { href: "/kooperationen", label: "Kooperationen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-sand-200">
      <div className="container-max flex items-center justify-between h-16 px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sage-600 flex items-center justify-center">
            <span className="text-white font-heading font-bold text-sm">B</span>
          </div>
          <span className="font-heading font-semibold text-dark tracking-tight">
            BIORESONANZ <span className="text-sage-600 font-normal">am See</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-1.5 text-sm text-dark/60 hover:text-dark transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.bioresonanzamsee.at/termine-online"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-4 !text-sm !py-2 !px-5"
          >
            Termin buchen
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2"
          aria-label="Menü"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-sand-200">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-3 py-2.5 text-dark/70 hover:text-dark text-sm"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.bioresonanzamsee.at/termine-online"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center btn-primary mt-3 text-sm"
            >
              Termin buchen
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
