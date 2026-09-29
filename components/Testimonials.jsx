import { Star, Quote } from "lucide-react";
import { testimonials } from "../data/hotel";

export default function Testimonials() {
  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-4 flex items-center gap-4">
          <span className="rule-soft flex-1" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sage-500">
            Guest Stories
          </span>
          <span className="rule-soft flex-1" />
        </div>
        <h2 className="font-display text-center text-4xl font-medium text-pine-900 sm:text-5xl">
          Loved by Travellers
        </h2>
        <div className="mt-3 flex items-center justify-center gap-1.5">
          <span className="flex gap-0.5">
            {[0, 1, 2, 3, 4].map((s) => (
              <Star key={s} size={16} className="fill-gold text-gold" />
            ))}
          </span>
          <span className="text-sm font-medium text-pine-700">4.9 from 480+ stays</span>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="flex flex-col rounded-3xl border border-sage-200/70 bg-white p-7 shadow-[0_10px_40px_rgba(20,40,37,0.07)] transition-transform duration-300 hover:-translate-y-1"
            >
              <Quote size={28} className="text-sage-300" />
              <p className="mt-4 flex-1 text-[15px] leading-relaxed text-pine-700">
                “{t.quote}”
              </p>
              <footer className="mt-6 border-t border-sage-100 pt-5">
                <p className="font-display text-lg font-semibold text-pine-900">{t.name}</p>
                <p className="text-[12px] uppercase tracking-[0.16em] text-sage-500">
                  {t.from} · {t.stay}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
