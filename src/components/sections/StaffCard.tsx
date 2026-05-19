"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

export interface StaffMember {
  name: string;
  title: string;
  photo: string;
  email?: string;
  phone?: string;
  large?: boolean;
}

export function StaffCard({ name, title, photo, email, phone, large = false }: StaffMember) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <li
        className={`bg-cream rounded-2xl border border-cream-dark flex flex-col items-start cursor-pointer hover:shadow-md hover:-translate-y-0.5 transition-all ${large ? "p-6" : "p-4"}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
        aria-label={`View contact info for ${name}`}
      >
        <div className={`rounded-full overflow-hidden bg-moss-50 mb-3 shrink-0 ${large ? "w-20 h-20" : "w-14 h-14"}`}>
          <Image
            src={photo}
            alt={`${name} — ${title}`}
            width={large ? 80 : 56}
            height={large ? 80 : 56}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h2 className={`font-serif text-ink leading-tight mb-1 truncate w-full ${large ? "text-base" : "text-sm"}`}>
          {name}
        </h2>
        <p className="font-sans text-[10px] uppercase tracking-widest text-amber leading-relaxed">{title}</p>
      </li>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="bg-white rounded-3xl shadow-2xl max-w-sm w-full p-8 relative flex flex-col items-center text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 text-ink-40 hover:text-ink transition-colors"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="w-24 h-24 rounded-full overflow-hidden bg-moss-50 mb-4">
              <Image
                src={photo}
                alt={name}
                width={96}
                height={96}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-serif text-ink text-2xl mb-1">{name}</h3>
            <p className="font-sans text-xs uppercase tracking-widest text-amber mb-6">{title}</p>

            {(email || phone) ? (
              <div className="w-full space-y-3">
                {email && (
                  <a
                    href={`mailto:${email}`}
                    className="flex items-center justify-center gap-2 w-full bg-moss text-white font-sans font-700 text-sm px-6 py-3 rounded-xl hover:bg-moss/90 transition-colors"
                  >
                    Email {name.split(" ")[0]}
                  </a>
                )}
                {phone && (
                  <a
                    href={`tel:${phone}`}
                    className="flex items-center justify-center gap-2 w-full border border-moss text-moss font-sans font-700 text-sm px-6 py-3 rounded-xl hover:bg-moss/5 transition-colors"
                  >
                    {phone}
                  </a>
                )}
              </div>
            ) : (
              <a
                href="/contact"
                className="flex items-center justify-center gap-2 w-full bg-moss text-white font-sans font-700 text-sm px-6 py-3 rounded-xl hover:bg-moss/90 transition-colors"
              >
                Contact WOW Center →
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
}
