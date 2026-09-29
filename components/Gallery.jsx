import { galleryTiles } from "../data/hotel";

export default function Gallery() {
  return (
    <section id="gallery" className="bg-cream-deep py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-4 flex items-center gap-4">
          <span className="rule-soft flex-1" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.3em] text-sage-500">
            Postcards
          </span>
          <span className="rule-soft flex-1" />
        </div>
        <h2 className="font-display text-center text-4xl font-medium text-pine-900 sm:text-5xl">
          Moments at SereneStay
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center leading-relaxed text-pine-700">
          Every corner of the property frames the mountains differently — here are
          a few of our guests&apos; favourite spots.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
          {galleryTiles.map((tile, i) => (
            <figure
              key={tile.label}
              className={`group relative overflow-hidden rounded-3xl shadow-[0_10px_36px_rgba(20,40,37,0.12)] transition-transform duration-300 hover:-translate-y-1 ${
                i === 0 ? "col-span-2 h-64 sm:h-80" : "h-52 sm:h-64"
              }`}
              style={{ background: tile.art }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-pine-900/55 via-pine-900/5 to-transparent" />
              {/* decorative pine silhouette on select tiles */}
              {(i === 1 || i === 4) && (
                <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="absolute bottom-0 h-20 w-full opacity-50">
                  <path d="M0,120 L0,80 L30,80 L15,55 L38,55 L22,30 L45,30 L32,8 L48,28 L70,28 L55,52 L78,52 L62,78 L95,78 L95,120 Z" fill="#142825" />
                  <path d="M310,120 L310,85 L335,85 L322,62 L342,62 L330,42 L350,42 L340,24 L352,40 L370,40 L358,60 L376,60 L364,84 L392,84 L392,120 Z" fill="#142825" opacity="0.8" />
                </svg>
              )}
              <figcaption className="absolute bottom-0 left-0 right-0 p-5">
                <span className="font-display text-xl font-semibold text-cream drop-shadow sm:text-2xl">
                  {tile.label}
                </span>
              </figcaption>
              <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-white/20 transition group-hover:ring-white/40" />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
