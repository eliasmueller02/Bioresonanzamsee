"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div className="container-max">
        <div className="bg-white border border-sand-200 rounded-xl shadow-lg p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <p className="text-sm text-dark/60 flex-1">
            Diese Website verwendet nur technisch notwendige Cookies. Keine
            Tracking- oder Drittanbieter-Cookies.{" "}
            <Link href="/datenschutz" className="text-sage-500 hover:underline">
              Datenschutz
            </Link>
          </p>
          <button
            onClick={accept}
            className="btn-primary !text-sm !py-2 !px-5 whitespace-nowrap"
          >
            Verstanden
          </button>
        </div>
      </div>
    </div>
  );
}
