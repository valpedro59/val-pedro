"use client";

import { FormEvent, useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Button from "./ui/Button";
import TextField from "./ui/TextField";
import { contact } from "@/data/profile";

export default function Contact() {
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [sent, setSent] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();

    const nextErrors: { [k: string]: string } = {};
    if (!name) nextErrors.name = "This field is required";
    if (!email) nextErrors.email = "This field is required";
    if (!message) nextErrors.message = "This field is required";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      // TODO: branche ici ton envoi réel (API route, service d'emailing, etc.)
      setSent(true);
      e.currentTarget.reset();
    }
  }

  return (
    <section id="contact" className="px-6 py-24 md:px-16">
      <h2 className="text-center bg-gradient-primary bg-clip-text font-heading text-3xl font-semibold text-transparent sm:text-h2">
        {contact.title}
      </h2>

      <div className="mx-auto mt-16 grid max-w-5xl gap-12 sm:grid-cols-2">
        <div>
          <h3 className="font-heading text-xl text-white">
            {contact.subtitle}
          </h3>
          <p className="mt-4 text-body-2 text-white/70">{contact.intro}</p>

          <ul className="mt-8 space-y-4 text-sm text-white/80">
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary-cyan" /> {contact.phone}
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary-cyan" /> {contact.email}
            </li>
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-primary-cyan" />{" "}
              {contact.location}
            </li>
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <TextField
            name="name"
            label="Nom"
            placeholder="Inserer votre nom ici..."
            error={errors.name}
          />
          <TextField
            name="email"
            type="email"
            label="Email"
            placeholder="val@example.com"
            error={errors.email}
          />
          <TextField
            name="message"
            label="Message"
            placeholder="Comment puis-je vous aider?"
            multiline
            error={errors.message}
          />
          <Button type="submit">{contact.submitLabel}</Button>
          {sent && (
            <p className="text-sm text-primary-cyan">
              Message envoyé — merci, je reviens vers toi rapidement.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
