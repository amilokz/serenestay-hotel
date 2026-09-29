import { Flame, Mountain, Sparkles, UtensilsCrossed } from "lucide-react";
import { experiences } from "../data/hotel";

const icons = [Flame, Mountain, Sparkles, UtensilsCrossed];

export default function Experiences() {
  return (
    <section id="experiences" className="relative overflow-hidden bg-pine-900 py-24 sm:py-32">
      {/* faint mountain echo */}
      <svg viewBox="0 0 1440 300" preserveAspectRatio="none" className="absolute top-0 h-40 w-full opacity-20">
        <path
          d="M0,220 L200,110 L380,200 L600,80 L820,210 L1040,120 L1260,220 L1440,150 L1440,0 L0,0 Z"
          fill="#a8b89a"
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-4 flex items-center gap-4">
          <span className="rule-soft flex-1 opacity-40" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sage-300">
            Beyond the Room
          </span>
          <span className="rule-soft flex-1 opacity-40" />
        </div>
        <h2 className="font-display text-center text-4xl font-medium text-cream sm:text-5xl">
          Mountain Experiences
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-cream/70">
          A stay at SereneStay is more than a room — it is slow evenings, forest
          air and food cooked the mountain way.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp, i) => {
            const Icon = icons[i % icons.length];
            return (
              <article
                key={exp.title}
                className="group rounded-3xl border border-cream/10 bg-cream/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-cream/25 hover:bg-cream/[0.08]"
              >
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-deep text-cream transition-transform group-hover:scale-110">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <h3 className="font-display mt-5 text-2xl font-semibold text-cream">
                  {exp.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{exp.detail}</p>
                <p className="mt-4 border-t border-cream/10 pt-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-gold">
                  {exp.meta}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
