"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { socialLinks } from "@/lib/social";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  function set(f: string, v: string) { setForm((p) => ({ ...p, [f]: v })); }

  const inputCls = "w-full border border-cream-dark rounded-xl px-4 py-3 text-ink placeholder-ink-40 focus:outline-none focus:ring-2 focus:ring-amber/60 focus:border-amber transition text-base min-h-[44px]";
  const labelCls = "block font-sans font-700 text-sm text-ink mb-1.5";

  if (submitted) return (
    <section className="py-24 bg-cream min-h-[60vh] flex items-center" aria-labelledby="contact-thanks">
      <div className="container-xl max-w-xl text-center space-y-5">
        <CheckCircle size={48} className="text-amber mx-auto" aria-hidden="true" />
        <h1 id="contact-thanks" className="font-serif text-3xl text-ink">Message received.</h1>
        <p className="text-ink-70">We&rsquo;ll be in touch within 2 business days.</p>
      </div>
    </section>
  );

  return (
    <>
      <section className="bg-cream py-20" aria-labelledby="contact-heading">
        <div className="container-xl max-w-3xl">
          <p className="font-sans font-700 text-xs uppercase tracking-widest text-amber mb-4">Contact</p>
          <h1 id="contact-heading" className="font-serif text-ink mb-6">Get in touch.</h1>
          <p className="text-ink-70 text-xl">Questions, partnerships, media, or just saying hello — we want to hear from you.</p>
        </div>
      </section>

      <section className="py-16 bg-white" aria-label="Contact information and form">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-4">
                <h2 className="font-serif text-xl text-ink">Reach us directly</h2>
                <a href="tel:+13057261766" className="flex items-center gap-3 text-moss font-700 hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">
                  <Phone size={18} aria-hidden="true" />(305) 726-1766
                </a>
                <a href="mailto:hello@wowcentermiami.org" className="flex items-center gap-3 text-moss font-700 hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">
                  <Mail size={18} aria-hidden="true" />hello@wowcentermiami.org
                </a>
                <div className="flex items-start gap-3 text-ink-70 text-sm">
                  <MapPin size={18} className="text-amber shrink-0 mt-0.5" aria-hidden="true" />
                  <a href="https://maps.google.com/?q=11450+SW+79+Street+Miami+FL+33173" target="_blank" rel="noopener noreferrer" className="hover:text-moss focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">
                    11450 SW 79 Street<br />Miami, FL 33173
                  </a>
                </div>
                <div className="flex items-center gap-3 text-ink-70 text-sm">
                  <Clock size={18} className="text-amber" aria-hidden="true" />
                  Monday – Friday, 8 am – 5 pm
                </div>
              </div>
              <div>
                <h2 className="font-serif text-xl text-ink mb-4">Specific inquiries</h2>
                <ul className="space-y-2 text-sm text-ink-70">
                  {[
                    { label: "Admissions", href: "/admissions" },
                    { label: "Donations & major gifts", href: "/donate" },
                    { label: "Partnerships & sponsorships", href: "/partners" },
                    { label: "Media & press", href: "/news" },
                    { label: "Careers", href: "/careers" },
                  ].map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="text-moss hover:underline underline-offset-4 focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber rounded-sm">→ {link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-serif text-xl text-ink mb-4">Follow WOW Center</h2>
                <div className="flex items-center gap-3" aria-label="WOW Center social media links">
                  {socialLinks.map((social) => (
                    <a
                      key={social.href}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WOW Center on ${social.label}`}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-moss-light/45 bg-moss-50 text-moss transition-colors hover:border-[#FF4FA3]/45 hover:bg-amber-50 hover:text-amber focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber"
                    >
                      <social.icon className="h-[19px] w-[19px]" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-cream rounded-2xl p-8 border border-cream-dark space-y-5">
                <h2 className="font-serif text-xl text-ink">Send a message</h2>
                <div>
                  <label htmlFor="contactName" className={labelCls}>Your name *</label>
                  <input id="contactName" type="text" required className={inputCls} value={form.name} onChange={(e) => set("name", e.target.value)} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contactEmail" className={labelCls}>Email *</label>
                    <input id="contactEmail" type="email" required className={inputCls} value={form.email} onChange={(e) => set("email", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="contactPhone" className={labelCls}>Phone</label>
                    <input id="contactPhone" type="tel" className={inputCls} value={form.phone} onChange={(e) => set("phone", e.target.value)} />
                  </div>
                </div>
                <div>
                  <label htmlFor="contactSubject" className={labelCls}>Subject</label>
                  <select id="contactSubject" className={inputCls + " appearance-none bg-white"} value={form.subject} onChange={(e) => set("subject", e.target.value)}>
                    <option value="">Select one</option>
                    <option>Admissions inquiry</option>
                    <option>Donation / major gift</option>
                    <option>Partnership / sponsorship</option>
                    <option>Media / press</option>
                    <option>Volunteer</option>
                    <option>General question</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contactMessage" className={labelCls}>Message *</label>
                  <textarea id="contactMessage" required rows={5} className={inputCls + " resize-y"} value={form.message} onChange={(e) => set("message", e.target.value)} />
                </div>
                <button type="submit" className="w-full bg-amber text-white font-sans font-700 px-8 py-4 rounded-full hover:bg-amber-hover transition-colors focus-visible:outline focus-visible:outline-3 focus-visible:outline-amber min-h-[44px]">
                  Send Message →
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
