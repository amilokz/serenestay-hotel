// Central content for the SereneStay demo site.
// All copy is original and fictional; prices in PKR.

export const WHATSAPP_NUMBER = "923001234567";

export const rooms = [
  {
    id: "deluxe-valley-view",
    name: "Deluxe Valley View",
    tagline: "Floor-to-ceiling windows over the Kashmir valley",
    rate: 18500,
    size: "320 sq ft",
    occupancy: 2,
    bed: "1 king bed",
    amenities: ["Valley-view balcony", "High-speed Wi-Fi", "Rain shower", "Mini bar", "Smart TV", "Room heater"],
    // dawn over the valley: peach -> sage -> mist
    art: "linear-gradient(160deg, #f7c9a3 0%, #e8b48c 28%, #a8b89a 62%, #dce5d4 100%)",
    accent: "#b97f52",
  },
  {
    id: "cloud-nine-loft",
    name: "Cloud Nine Loft",
    tagline: "A cosy mezzanine loft that floats above the mist",
    rate: 24000,
    size: "400 sq ft",
    occupancy: 2,
    bed: "1 king bed + daybed",
    amenities: ["Mezzanine lounge", "Skylight stargazing", "High-speed Wi-Fi", "Espresso kit", "Heated floors", "Smart TV"],
    // morning mist: cool blue-grey -> cream
    art: "linear-gradient(165deg, #9db4c0 0%, #c3d2d8 38%, #e9e4d6 72%, #faf6ee 100%)",
    accent: "#5f7a8a",
  },
  {
    id: "executive-pine-suite",
    name: "Executive Pine Suite",
    tagline: "Deep-green calm among century-old pines",
    rate: 28000,
    size: "480 sq ft",
    occupancy: 3,
    bed: "1 king bed + single",
    amenities: ["Private pine deck", "Work desk", "High-speed Wi-Fi", "Soaking tub", "Espresso kit", "Room heater"],
    // pine forest: deep green -> sage
    art: "linear-gradient(155deg, #1e3a34 0%, #2e5a4c 45%, #7a9a7e 78%, #cfdcc3 100%)",
    accent: "#2e5a4c",
  },
  {
    id: "family-lodge",
    name: "Family Lodge",
    tagline: "Two connecting rooms around a stone fireplace",
    rate: 35000,
    size: "650 sq ft",
    occupancy: 5,
    bed: "1 king + 2 twin beds",
    amenities: ["Stone fireplace", "Kids' play corner", "High-speed Wi-Fi", "Kitchenette", "2 bathrooms", "Board games"],
    // warm hearth: amber -> warm cream
    art: "linear-gradient(160deg, #8a5a33 0%, #c08b4d 35%, #e3b878 65%, #f6e7c8 100%)",
    accent: "#a06a35",
  },
  {
    id: "honeymoon-terrace-suite",
    name: "Honeymoon Terrace Suite",
    tagline: "A private terrace made for two, above it all",
    rate: 42000,
    size: "550 sq ft",
    occupancy: 2,
    bed: "1 canopy king bed",
    amenities: ["Private sunset terrace", "Outdoor jacuzzi", "High-speed Wi-Fi", "Champagne on arrival", "Couples' spa credit", "Fire pit"],
    // rose dusk: dusty rose -> lavender -> cream
    art: "linear-gradient(158deg, #b76e79 0%, #d9a08c 40%, #e8c9b0 70%, #f9efe2 100%)",
    accent: "#a25a66",
  },
  {
    id: "murree-grand-villa",
    name: "The Murree Grand Villa",
    tagline: "Our signature three-bedroom villa with panoramic lawns",
    rate: 65000,
    size: "1,200 sq ft",
    occupancy: 6,
    bed: "3 bedrooms · 2 king + 2 twin",
    amenities: ["Private lawn & gazebo", "Dedicated host", "High-speed Wi-Fi", "Full kitchen", "3 bathrooms", "Bonfire pit"],
    // deep teal night -> moonlit sage
    art: "linear-gradient(162deg, #0e3a3c 0%, #155e5a 42%, #4f8a7c 72%, #cfe0d2 100%)",
    accent: "#0e4f4a",
  },
];

export const experiences = [
  {
    title: "Bonfire Nights",
    detail:
      "Every evening at 8, our lawn turns into a circle of warmth — crackling pinewood fire, roasted peanuts and kahwa, folk music on weekends, and the valley lights blinking below.",
    meta: "Daily · 8:00 PM · Complimentary",
  },
  {
    title: "Guided Pine Hikes",
    detail:
      "Walk the old cart-road trails with our mountain guide, from gentle sunrise strolls to the 3-hour Kashmir Point trek. Hot chai waits at every viewpoint.",
    meta: "Sunrise & sunset slots · PKR 2,500 / person",
  },
  {
    title: "Himalayan Spa",
    detail:
      "Warm-stone massages, pine-oil aromatherapy and a cedar sauna in our glass spa pavilion. The treatment rooms face the forest so you never lose the view.",
    meta: "9 AM – 8 PM · From PKR 6,000",
  },
  {
    title: "Pahari Cuisine Nights",
    detail:
      "Our chef serves slow-cooked mountain food — desi ghee daal, trout from the Kunhar, makai ki roti with saag — on the candle-lit dining terrace.",
    meta: "7 – 10 PM · À la carte",
  },
];

export const galleryTiles = [
  { label: "Sunrise Deck", art: "linear-gradient(180deg, #f9d9a8 0%, #f2b880 45%, #b97f52 100%)" },
  { label: "Pine Forest Trail", art: "linear-gradient(180deg, #dcead2 0%, #8fae8a 50%, #2e5a4c 100%)" },
  { label: "Bonfire Lounge", art: "radial-gradient(circle at 50% 70%, #f6b45c 0%, #b4552d 45%, #2a1a12 100%)" },
  { label: "Spa Pavilion", art: "linear-gradient(180deg, #eef3e6 0%, #b9cfb4 55%, #5f7a6a 100%)" },
  { label: "Valley Overlook", art: "linear-gradient(180deg, #bcd3e0 0%, #8fae8a 55%, #3d5a52 100%)" },
  { label: "Dining Terrace", art: "linear-gradient(180deg, #f7e3bd 0%, #dfa86a 50%, #7a4a2a 100%)" },
];

export const testimonials = [
  {
    name: "Ayesha Khan",
    from: "Lahore",
    quote:
      "We woke up to clouds drifting past our window — it felt unreal. The staff remembered our chai preferences by day two. The bonfire nights are pure magic.",
    stay: "Honeymoon Terrace Suite · 4 nights",
  },
  {
    name: "Bilal Ahmed",
    from: "Karachi",
    quote:
      "Travelled with kids and my parents, and the Family Lodge handled all of us comfortably. The guided hike to Kashmir Point was the highlight of our year.",
    stay: "Family Lodge · 5 nights",
  },
  {
    name: "Fatima Raza",
    from: "Islamabad",
    quote:
      "I came for a quiet weekend to finish my book and ended up extending twice. The spa pavilion facing the pines is the most peaceful place I know.",
    stay: "Cloud Nine Loft · 6 nights",
  },
];

export function formatPKR(n) {
  return "PKR " + Math.round(n).toLocaleString("en-PK");
}

export function nightsBetween(checkIn, checkOut) {
  if (!checkIn || !checkOut) return 0;
  const a = new Date(checkIn + "T12:00:00");
  const b = new Date(checkOut + "T12:00:00");
  const diff = Math.round((b - a) / 86400000);
  return diff > 0 ? diff : 0;
}

export function todayPlus(days) {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().slice(0, 10);
}

export function prettyDate(iso) {
  if (!iso) return "—";
  return new Date(iso + "T12:00:00").toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
