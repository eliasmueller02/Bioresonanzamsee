"use client";

import { useEffect, useState } from "react";

const CTA_URL = "https://myhellocash.com/widget/bioresonanz-am-see-e-u-121619";

export default function StickyMobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 lg:hidden">
      <a
        href={CTA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-sage-500 text-white font-heading font-medium py-3 rounded-xl shadow-lg hover:bg-sage-600 transition-all"
      >
        Termin buchen
      </a>
    </div>
  );
}
