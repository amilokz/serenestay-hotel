"use client";

import { useState } from "react";
import { CalendarDays, Users, Sparkles, ChevronDown } from "lucide-react";
import { todayPlus } from "../data/hotel";

export default function Hero({ onCheckAvailability }) {
  const [checkIn, setCheckIn] = useState(todayPlus(7));
  const [checkOut, setCheckOut] = useState(todayPlus(9));
  const [guests, setGuests] = useState(2);

  const submit = (e) => {
    e.preventDefault();
    onCheckAvailability({ checkIn, checkOut, guests: Number(guests) });
  };

  return (
    <section id="home" className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* sky */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#cfe0ea] via-[#e8e4d3] to-cream" />
      {/* sun glow */}
      <div className="animate-glow-pulse absolute left-1/2 top-[16%] h-40 w-40 -translate-x-1/2 rounded-full bg-[#ffe9c4] blur-3xl" />

      {/* far mountains */}
      <div className="mountain-layer animate-drift-slow h-[62%] opacity-70">
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0,320 L180,180 L340,300 L520,140 L700,290 L880,170 L1060,310 L1240,200 L1440,320 L1440,500 L0,500 Z"
            fill="#a8b89a"
            opacity="0.75"
          />
        </svg>
      </div>
      {/* mid mountains */}
      <div className="mountain-layer animate-drift h-[48%] opacity-90">
        <svg viewBox="0 0 1440 500" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0,360 L220,220 L420,340 L640,200 L860,350 L1080,230 L1300,360 L1440,300 L1440,500 L0,500 Z"
            fill="#7a9a7e"
          />
        </svg>
      </div>
      {/* near pine ridge */}
      <div className="mountain-layer h-[34%]">
        <svg viewBox="0 0 1440 400" preserveAspectRatio="none" className="h-full w-full">
          <path
            d="M0,260 L160,140 L300,240 L470,120 L640,250 L820,150 L1000,260 L1180,170 L1360,270 L1440,230 L1440,400 L0,400 Z"
            fill="#2e4a44"
          />
        </svg>
      </div>
      {/* mist settling at the base */}
      <div className="mountain-layer mist-band h-[30%]" />

      {/* headline */}
      <div className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center px-5 pt-32 text-center">
        <p className="animate-fade-up mb-5 flex items-center gap-2 rounded-full border border-pine-700/15 bg-cream/60 px-5 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-pine-700 backdrop-blur-sm">
          <Sparkles size={14} /> Boutique Hotel · Murree Hills
        </p>
        <h1
          className="animate-fade-up font-display text-5xl font-medium leading-[1.05] text-pine-900 sm:text-7xl"
          style={{ animationDelay: "0.12s" }}
        >
          Wake Up Above
          <br />
          the <em className="text-teal-deep">Clouds</em>
        </h1>
        <p
          className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-pine-700 sm:text-lg"
          style={{ animationDelay: "0.24s" }}
        >
          A twelve-suite mountain retreat wrapped in pine forest — slow mornings,
          valley views, bonfire nights and the quietest sleep of your life.
        </p>
        <a
          href="#booking-widget"
          className="animate-fade-up mt-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-pine-700"
          style={{ animationDelay: "0.36s" }}
        >
          Plan your escape <ChevronDown size={16} className="animate-bounce" />
        </a>
      </div>

      {/* booking widget */}
      <div id="booking-widget" className="relative z-10 mx-auto w-full max-w-4xl px-5 pb-14">
        <form
          onSubmit={submit}
          className="animate-fade-up grid grid-cols-2 gap-3 rounded-3xl border border-white/40 bg-white/75 p-4 shadow-[0_24px_60px_rgba(20,40,37,0.18)] backdrop-blur-xl sm:grid-cols-[1fr_1fr_1fr_auto] sm:items-end sm:gap-4 sm:p-5"
          style={{ animationDelay: "0.45s" }}
        >
          <label className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
              <CalendarDays size={13} /> Check-in
            </span>
            <input
              type="date"
              required
              min={todayPlus(0)}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded-xl border border-sage-200 bg-cream px-3 py-2.5 text-sm text-pine-900 outline-none focus:border-teal-deep"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
              <CalendarDays size={13} /> Check-out
            </span>
            <input
              type="date"
              required
              min={checkIn || todayPlus(1)}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-xl border border-sage-200 bg-cream px-3 py-2.5 text-sm text-pine-900 outline-none focus:border-teal-deep"
            />
          </label>
          <label className="col-span-2 block sm:col-span-1">
            <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
              <Users size={13} /> Guests
            </span>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full rounded-xl border border-sage-200 bg-cream px-3 py-2.5 text-sm text-pine-900 outline-none focus:border-teal-deep"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </label>
          <button
            type="submit"
            className="col-span-2 rounded-xl bg-teal-deep px-8 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-cream shadow-lg shadow-teal-deep/30 transition-transform hover:-translate-y-0.5 sm:col-span-1"
          >
            Check Availability
          </button>
        </form>
      </div>
    </section>
  );
}
