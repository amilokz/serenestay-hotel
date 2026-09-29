"use client";

import { useEffect, useState } from "react";
import { Menu, X, MountainSnow } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#rooms", label: "Rooms" },
  { href: "#experiences", label: "Experiences" },
  { href: "#gallery", label: "Gallery" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-cream/90 shadow-[0_8px_30px_rgba(20,40,37,0.10)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#home" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-deep text-cream">
            <MountainSnow size={20} strokeWidth={1.8} />
          </span>
          <span className="leading-tight">
            <span className="font-display block text-[22px] font-semibold tracking-wide text-pine-900">
              SereneStay
            </span>
            <span className="block text-[10px] uppercase tracking-[0.28em] text-sage-500">
              Murree Hills
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[13px] font-medium uppercase tracking-[0.18em] text-pine-700 transition-colors hover:text-teal-deep"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#rooms"
            className="rounded-full bg-teal-deep px-6 py-2.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-cream shadow-lg shadow-teal-deep/25 transition-transform hover:-translate-y-0.5"
          >
            Book
          </a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-full bg-cream/80 text-pine-900 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-sage-200 bg-cream/95 px-6 pb-6 pt-2 backdrop-blur-md md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-sage-100 py-3 text-sm font-medium uppercase tracking-[0.18em] text-pine-700"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#rooms"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-full bg-teal-deep py-3 text-center text-sm font-semibold uppercase tracking-[0.14em] text-cream"
          >
            Book Your Stay
          </a>
        </div>
      )}
    </header>
  );
}
