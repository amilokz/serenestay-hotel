"use client";

import { useEffect, useMemo, useState } from "react";
import { X, CalendarDays, Users, BedDouble, MessageCircle } from "lucide-react";
import {
  rooms,
  formatPKR,
  nightsBetween,
  prettyDate,
  todayPlus,
  WHATSAPP_NUMBER,
} from "../data/hotel";

export default function BookingModal({ room: initialRoom, search, onClose }) {
  const [roomId, setRoomId] = useState(initialRoom?.id || rooms[0].id);
  const [checkIn, setCheckIn] = useState(search?.checkIn || todayPlus(7));
  const [checkOut, setCheckOut] = useState(search?.checkOut || todayPlus(9));
  const [guests, setGuests] = useState(search?.guests || 2);
  const [name, setName] = useState("");

  const room = rooms.find((r) => r.id === roomId) || rooms[0];
  const nights = nightsBetween(checkIn, checkOut);
  const clampedGuests = Math.min(Math.max(1, guests), room.occupancy);
  const total = nights * room.rate;

  // lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const waLink = useMemo(() => {
    const lines = [
      "Assalam-o-Alaikum SereneStay!",
      "I would like to reserve a room:",
      "",
      `Room: ${room.name}`,
      `Check-in: ${prettyDate(checkIn)}`,
      `Check-out: ${prettyDate(checkOut)}`,
      `Nights: ${nights}`,
      `Guests: ${clampedGuests}`,
      `Estimated total: ${formatPKR(total)}`,
      name.trim() ? `Name: ${name.trim()}` : null,
      "",
      "Please confirm availability. Shukriya!",
    ].filter(Boolean);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
  }, [room, checkIn, checkOut, nights, clampedGuests, total, name]);

  const valid = nights > 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-pine-900/60 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-cream p-6 shadow-2xl sm:rounded-3xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex items-start justify-between">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-sage-500">
              Reserve your stay
            </p>
            <h3 className="font-display mt-1 text-3xl font-semibold text-pine-900">
              Book with SereneStay
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 place-items-center rounded-full bg-sage-100 text-pine-700 transition-colors hover:bg-sage-200"
          >
            <X size={18} />
          </button>
        </div>

        <label className="mb-4 block">
          <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
            <BedDouble size={13} /> Room
          </span>
          <select
            value={roomId}
            onChange={(e) => setRoomId(e.target.value)}
            className="w-full rounded-xl border border-sage-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-deep"
          >
            {rooms.map((r) => (
              <option key={r.id} value={r.id}>
                {r.name} — {formatPKR(r.rate)}/night
              </option>
            ))}
          </select>
        </label>

        <div className="grid grid-cols-2 gap-3">
          <label className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
              <CalendarDays size={13} /> Check-in
            </span>
            <input
              type="date"
              min={todayPlus(0)}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full rounded-xl border border-sage-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-deep"
            />
          </label>
          <label className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
              <CalendarDays size={13} /> Check-out
            </span>
            <input
              type="date"
              min={checkIn || todayPlus(1)}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full rounded-xl border border-sage-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-deep"
            />
          </label>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3">
          <label className="block">
            <span className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
              <Users size={13} /> Guests
            </span>
            <input
              type="number"
              min={1}
              max={room.occupancy}
              value={clampedGuests}
              onChange={(e) => setGuests(Number(e.target.value))}
              className="w-full rounded-xl border border-sage-200 bg-white px-3 py-2.5 text-sm outline-none focus:border-teal-deep"
            />
            <span className="mt-1 block text-[11px] text-sage-500">
              This room sleeps up to {room.occupancy}
            </span>
          </label>
          <label className="block">
            <span className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-pine-700">
              Your name
            </span>
            <input
              type="text"
              placeholder="e.g. Ahmed Raza"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded-xl border border-sage-200 bg-white px-3 py-2.5 text-sm outline-none placeholder:text-sage-400 focus:border-teal-deep"
            />
          </label>
        </div>

        {/* live summary */}
        <div className="mt-5 rounded-2xl bg-pine-900 p-5 text-cream">
          <div className="flex items-center justify-between text-sm">
            <span className="text-cream/70">
              {formatPKR(room.rate)} × {nights} {nights === 1 ? "night" : "nights"}
            </span>
            <span className="font-semibold">{valid ? formatPKR(total) : "—"}</span>
          </div>
          <div className="mt-1 flex items-center justify-between text-sm">
            <span className="text-cream/70">Taxes &amp; breakfast</span>
            <span className="font-semibold text-sage-300">Included</span>
          </div>
          <div className="mt-3 flex items-center justify-between border-t border-cream/15 pt-3">
            <span className="text-[12px] uppercase tracking-[0.2em] text-cream/70">
              Estimated total
            </span>
            <span className="font-display text-3xl font-semibold text-gold">
              {valid ? formatPKR(total) : "—"}
            </span>
          </div>
          {!valid && (
            <p className="mt-2 text-[12px] text-red-300">
              Please choose a check-out date after your check-in date.
            </p>
          )}
        </div>

        <a
          href={valid ? waLink : undefined}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => !valid && e.preventDefault()}
          className={`mt-5 flex w-full items-center justify-center gap-2.5 rounded-2xl py-4 text-sm font-bold uppercase tracking-[0.14em] transition-all ${
            valid
              ? "bg-[#1faa53] text-white shadow-lg shadow-[#1faa53]/30 hover:-translate-y-0.5"
              : "cursor-not-allowed bg-sage-200 text-sage-500"
          }`}
        >
          <MessageCircle size={18} /> Reserve via WhatsApp
        </a>
        <p className="mt-3 text-center text-[12px] leading-relaxed text-sage-500">
          No advance payment needed — pay at the property.
          <br />
          Free cancellation up to 48 hours before check-in.
        </p>
      </div>
    </div>
  );
}
