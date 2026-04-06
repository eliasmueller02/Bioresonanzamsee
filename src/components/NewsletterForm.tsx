"use client";

import { useState } from "react";
import { Mail, Check, Loader2 } from "lucide-react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage(
          data.duplicate
            ? "Du bist bereits angemeldet!"
            : "Danke für deine Anmeldung!"
        );
        setEmail("");
        setName("");
      } else {
        setStatus("error");
        setMessage(data.error || "Etwas ist schiefgelaufen.");
      }
    } catch {
      setStatus("error");
      setMessage("Verbindungsfehler. Bitte versuche es erneut.");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center gap-2 text-sage-500 py-4">
        <Check size={20} />
        <span className="font-medium text-sm">{message}</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-2 mb-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Vorname"
          className="flex-1 px-4 py-2.5 rounded-lg border border-sand-200 bg-white text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-sage-300 transition-colors"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-Mail-Adresse"
          required
          className="flex-[2] px-4 py-2.5 rounded-lg border border-sand-200 bg-white text-sm text-dark placeholder:text-dark/30 focus:outline-none focus:border-sage-300 transition-colors"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-primary !py-2.5 !px-5 !text-sm flex items-center justify-center gap-2 shrink-0"
        >
          {status === "loading" ? (
            <Loader2 size={16} className="animate-spin" />
          ) : (
            <Mail size={16} />
          )}
          Anmelden
        </button>
      </div>
      {status === "error" && (
        <p className="text-red-500 text-xs mt-1">{message}</p>
      )}
      <p className="text-[11px] text-dark/30 mt-2">
        Mit der Anmeldung stimmst du dem Erhalt des Newsletters zu. Abmeldung jederzeit möglich.
      </p>
    </form>
  );
}
