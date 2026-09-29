import { MapPin, Phone, Mail, Clock, MountainSnow } from "lucide-react";

export default function Location() {
  return (
    <footer id="contact" className="bg-pine-900 text-cream">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* find us */}
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sage-300">
                Find Us
              </span>
              <span className="rule-soft flex-1 opacity-40" />
            </div>
            <h2 className="font-display text-4xl font-medium sm:text-5xl">
              In the Heart of Murree
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-cream/70">
              Ten minutes on foot from Mall Road, yet a world away — our pine-shaded
              lane climbs just enough that the bazaar hum fades into birdsong.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream/10">
                  <MapPin size={19} className="text-gold" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">
                    Address
                  </span>
                  <span className="mt-1 block leading-relaxed">
                    SereneStay Boutique Hotel, Cart Road,
                    <br />
                    Near Mall Road, Murree, Punjab, Pakistan
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream/10">
                  <Phone size={19} className="text-gold" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">
                    Reservations
                  </span>
                  <a href="tel:+923001234567" className="mt-1 block text-lg hover:text-gold">
                    +92 300 1234567
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream/10">
                  <Mail size={19} className="text-gold" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">
                    Email
                  </span>
                  <a href="mailto:stay@serenestay.pk" className="mt-1 block hover:text-gold">
                    stay@serenestay.pk
                  </a>
                </span>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-cream/10">
                  <Clock size={19} className="text-gold" />
                </span>
                <span>
                  <span className="block text-sm font-semibold uppercase tracking-[0.14em] text-cream/60">
                    Check-in / Check-out
                  </span>
                  <span className="mt-1 block">2:00 PM / 12:00 noon</span>
                </span>
              </li>
            </ul>
          </div>

          {/* stylised map card */}
          <div className="relative min-h-[380px] overflow-hidden rounded-3xl border border-cream/10">
            <div className="absolute inset-0 bg-gradient-to-br from-[#2e4a44] via-[#3d5a52] to-[#1e3a34]" />
            <svg viewBox="0 0 500 420" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 h-full w-full opacity-70">
              <path d="M-20,300 C120,260 180,340 300,300 C420,260 460,320 560,280 L560,460 L-20,460 Z" fill="#142825" opacity="0.6" />
              <path d="M-20,120 C100,80 200,160 320,110 C420,70 480,130 560,100 L560,-20 L-20,-20 Z" fill="#a8b89a" opacity="0.35" />
              {/* winding road */}
              <path d="M60,420 C120,320 90,260 180,220 C270,180 240,120 330,90" stroke="#f3ecdc" strokeWidth="10" fill="none" strokeLinecap="round" strokeDasharray="18 12" opacity="0.85" />
              <path d="M60,420 C120,320 90,260 180,220 C270,180 240,120 330,90" stroke="#8a9c7c" strokeWidth="2" fill="none" opacity="0.6" />
            </svg>
            {/* pin */}
            <div className="absolute left-1/2 top-[38%] -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="animate-glow-pulse mx-auto grid h-14 w-14 place-items-center rounded-full bg-gold text-pine-900 shadow-xl">
                <MapPin size={26} />
              </span>
              <span className="mt-2 inline-block rounded-full bg-pine-900/80 px-4 py-1.5 text-[12px] font-semibold uppercase tracking-[0.16em] text-cream backdrop-blur">
                SereneStay
              </span>
            </div>
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
              {["10 min walk · Mall Road", "5 min · Kashmir Point", "90 min · Islamabad"].map((t) => (
                <span key={t} className="rounded-full bg-cream/15 px-4 py-1.5 text-[12px] font-medium text-cream backdrop-blur">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-cream/10 pt-8 sm:flex-row">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-cream/10 text-gold">
              <MountainSnow size={18} strokeWidth={1.8} />
            </span>
            <span className="font-display text-xl font-semibold">SereneStay</span>
          </a>
          <nav className="flex flex-wrap justify-center gap-x-7 gap-y-2 text-[12px] font-medium uppercase tracking-[0.18em] text-cream/60">
            <a href="#rooms" className="hover:text-cream">Rooms</a>
            <a href="#experiences" className="hover:text-cream">Experiences</a>
            <a href="#gallery" className="hover:text-cream">Gallery</a>
            <a href="#contact" className="hover:text-cream">Contact</a>
          </nav>
          <p className="text-[12px] text-cream/40">
            © 2026 SereneStay · A fictional demo website by AKCLNT
          </p>
        </div>
      </div>
    </footer>
  );
}
