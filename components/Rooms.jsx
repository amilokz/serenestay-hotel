"use client";

import { BedDouble, Maximize, Users, Check, Info } from "lucide-react";
import { rooms, formatPKR, nightsBetween, prettyDate } from "../data/hotel";

export default function Rooms({ search, onReserve }) {
  const nights = search ? nightsBetween(search.checkIn, search.checkOut) : 0;

  const cheapest = Math.min(...rooms.map((r) => r.rate));
  const validSearch = search && nights > 0;

  return (
    <section id="rooms" className="relative bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-4 flex items-center gap-4">
          <span className="rule-soft flex-1" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sage-500">
            Stay With Us
          </span>
          <span className="rule-soft flex-1" />
        </div>
        <h2 className="font-display text-center text-4xl font-medium text-pine-900 sm:text-5xl">
          Rooms &amp; Suites
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-pine-700">
          Twelve suites, six styles — each one facing the valley, the pines, or the
          sunrise. Every stay includes breakfast on the terrace and evening kahwa.
        </p>

        {validSearch && (
          <div className="mx-auto mt-8 flex max-w-3xl items-start gap-3 rounded-2xl border border-teal-deep/20 bg-sage-100 p-4 sm:items-center">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-teal-deep text-cream">
              <Info size={16} />
            </span>
            <p className="text-sm leading-relaxed text-pine-700">
              <strong className="text-pine-900">
                {prettyDate(search.checkIn)} → {prettyDate(search.checkOut)}
              </strong>{" "}
              · {nights} {nights === 1 ? "night" : "nights"} · {search.guests}{" "}
              {search.guests === 1 ? "guest" : "guests"} — stays start from{" "}
              <strong className="text-teal-deep">
                {formatPKR(cheapest * nights)}
              </strong>{" "}
              total. Pick a room below to reserve it instantly on WhatsApp.
            </p>
          </div>
        )}

        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => {
            const fits = !search || search.guests <= room.occupancy;
            const total = validSearch ? room.rate * nights : null;
            return (
              <article
                key={room.id}
                className="group flex flex-col overflow-hidden rounded-3xl border border-sage-200/70 bg-white shadow-[0_10px_40px_rgba(20,40,37,0.08)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_60px_rgba(20,40,37,0.16)]"
              >
                {/* gradient art */}
                <div className="relative h-52 overflow-hidden" style={{ background: room.art }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-pine-900/25 via-transparent to-transparent" />
                  {/* stylised sun / moon */}
                  <div className="absolute right-8 top-8 h-14 w-14 rounded-full bg-white/50 blur-[2px]" />
                  {/* pine silhouettes */}
                  <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="absolute bottom-0 h-24 w-full opacity-60">
                    <path d="M0,120 L0,80 L30,80 L15,55 L38,55 L22,30 L45,30 L32,8 L48,28 L70,28 L55,52 L78,52 L62,78 L95,78 L95,120 Z" fill="#142825" opacity="0.85" />
                    <path d="M300,120 L300,85 L328,85 L315,62 L336,62 L322,40 L344,40 L332,20 L346,38 L366,38 L352,60 L372,60 L358,84 L388,84 L388,120 Z" fill="#142825" opacity="0.7" />
                  </svg>
                  <span
                    className="absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-cream shadow"
                    style={{ background: room.accent }}
                  >
                    {formatPKR(room.rate)} / night
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-2xl font-semibold text-pine-900">
                    {room.name}
                  </h3>
                  <p className="mt-1 text-sm italic text-sage-500">{room.tagline}</p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-pine-700">
                    <span className="flex items-center gap-1.5">
                      <Maximize size={14} className="text-teal-deep" /> {room.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users size={14} className="text-teal-deep" /> Up to {room.occupancy}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BedDouble size={14} className="text-teal-deep" /> {room.bed}
                    </span>
                  </div>

                  <ul className="mt-4 grid grid-cols-1 gap-1.5">
                    {room.amenities.slice(0, 4).map((a) => (
                      <li key={a} className="flex items-center gap-2 text-[13px] text-pine-700">
                        <Check size={14} className="shrink-0 text-teal-bright" /> {a}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex items-center justify-between border-t border-sage-100 pt-5">
                    <div>
                      {total !== null && (
                        <p className="text-[11px] uppercase tracking-[0.14em] text-sage-500">
                          {nights} {nights === 1 ? "night" : "nights"} total
                        </p>
                      )}
                      <p className="font-display text-[22px] font-semibold text-teal-deep">
                        {total !== null ? formatPKR(total) : formatPKR(room.rate)}
                      </p>
                    </div>
                    <button
                      onClick={() => onReserve(room)}
                      disabled={!fits}
                      className={`rounded-full px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.14em] transition-all ${
                        fits
                          ? "bg-pine-900 text-cream hover:bg-teal-deep"
                          : "cursor-not-allowed bg-sage-200 text-sage-500"
                      }`}
                    >
                      {fits ? "Reserve" : `Max ${room.occupancy}`}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-sage-500">
          All rates include breakfast, Wi-Fi and taxes. Free cancellation up to 48 hours before check-in.
        </p>
      </div>
    </section>
  );
}
