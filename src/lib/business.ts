export const business = {
  name: "Pinkys Nails",
  tagline: "Nagelstudio på Kungsgatan i Uppsala centrum",
  description:
    "Pinkys Nails på Kungsgatan 57E — nagelstudio i Uppsala centrum med akryl, gellack, manikyr och spa-pedikyr.",
  category: "Nagelstudio",
  address: {
    street: "Kungsgatan 57E",
    postalCode: "753 21",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "072-396 88 88",
  phoneLink: "tel:+46723968888",
  email: "pinkys.nails10@gmail.com" as string | null,
  emailLink: "mailto:pinkys.nails10@gmail.com" as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/pinkys-nails-58041",
  bookingLabel: "Boka på Bokadirekt",
  websiteUrl: null as string | null,
  logoImage: "/images/logo.jpg" as string | null,
  heroImage: "/images/hero.jpg",
  aboutImage: "/images/gallery-2.jpg",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Pinkys Nails",
  rating: 4.6,
  reviewCount: 561,
  foundedYear: 2016,
  coordinates: { lat: 59.8584, lng: 17.6439 },
  hours: {
    note: "Ring gärna innan besök.",
    regular: [
      { day: "Måndag", hours: "10:00 – 17:00" },
      { day: "Tisdag", hours: "10:00 – 17:00" },
      { day: "Onsdag", hours: "10:00 – 17:00" },
      { day: "Torsdag", hours: "10:00 – 17:00" },
      { day: "Fredag", hours: "10:00 – 17:00" },
      { day: "Lördag", hours: "Stängt" },
      { day: "Söndag", hours: "Stängt" },
    ],
  },
  trustBadges: [
    { label: "4,6 på Bokadirekt", icon: "star" },
    { label: "561+ verifierade omdömen", icon: "reviews" },
    { label: "Centralt på Kungsgatan", icon: "location" },
    { label: "Akryl & gellack", icon: "student" },
  ],
  usps: [
    {
      title: "Cityläge på Kungsgatan",
      description: "Mitt i Uppsala centrum — Kungsgatan 57E.",
    },
    {
      title: "Brett utbud",
      description: "Akryl, gellack, manikyr, pedikyr och nagelförstärkning.",
    },
    {
      title: "Hög genomströmning",
      description: "561+ recensioner på Bokadirekt.",
    },
    {
      title: "Snabb onlinebokning",
      description: "Boka tid direkt på Bokadirekt.",
    },
  ],
  services: [
    {
      id: "nagelforlangning-akryl",
      name: "Nagelförlängning akryl",
      icon: "💅",
      description: "Nagelförlängning i akryl — skräddarsydd design efter dina önskemål.",
      duration: "30–90 min",
      priceFrom: 500,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "gellack-manikyr",
      name: "Gellack manikyr",
      icon: "✨",
      description: "Gellack-manikyr med valfri färg — hållbart resultat.",
      duration: "30–90 min",
      priceFrom: 380,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fransk-manikyr",
      name: "Fransk manikyr",
      icon: "🦶",
      description: "Klassisk fransk manikyr för en elegant look.",
      duration: "30–90 min",
      priceFrom: 420,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "spa-pedikyr",
      name: "Spa pedikyr",
      icon: "💎",
      description: "Spa-pedikyr för fötter och naglar.",
      duration: "30–90 min",
      priceFrom: 500,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "nagelforstarkning",
      name: "Nagelförstärkning",
      icon: "🎨",
      description: "Förstärkning av naturlig nagel med gele och valfritt lack.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  gallery: [
    { id: 1, label: "Nageldesign", image: "/images/hero.jpg" },
    { id: 2, label: "Manikyr", image: "/images/gallery-1.jpg" },
    { id: 3, label: "Resultat", image: "/images/gallery-2.jpg" },
  ],
  testimonials: [
    {
      text: "Har provat flera nagelsalonger i Uppsala och tycker denna är bäst vad det gäller både pris, kvalitet och effektivitet! Kommer fortsätta att gå hit för att göra mina naglar.❤️",
      author: "Mymy T.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/pinkys-nails-58041",
      rating: 5,
      date: "2026-06-11",
    },
    {
      text: "Tack så mycket Jonny. Jag är så nöjd med mina naglarna. du är så duktig tack 🙏😊 Larissa.",
      author: "Larissa S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/pinkys-nails-58041",
      rating: 5,
      date: "2026-06-10",
    },
    {
      text: "Snabba, trevliga och proffsiga! 👌🏻👌🏻👌🏻",
      author: "Carina P.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/pinkys-nails-58041",
      rating: 5,
      date: "2026-06-02",
    },
    {
      text: "Väldig bra bemötande, rent och snyggt, superfina naglar på både fötter och händer.",
      author: "Suzanne S.",
      source: "Bokadirekt",
      sourceUrl: "https://www.bokadirekt.se/places/pinkys-nails-58041",
      rating: 5,
      date: "2026-06-01",
    },
  ],
  about: {
    headline: "Uppsalas nagelstudio på Kungsgatan",
    paragraphs: [
      "Välkommen till Pinkys Nails i Uppsala — beläget på Kungsgatan 57E i centrum.",
      "Hos oss bokar du nagelbehandlingar via Bokadirekt. Avbokning sker senast 12 timmar innan behandling via Bokadirekt, eller via sms till 072 396 8888 senast 4 timmar innan bokad tid.",
      "Vi tar Swish, kontant och kort. Tack för alla kunder!",
    ],
  },
  faq: [
    {
      question: "Var ligger Pinkys Nails?",
      answer: "Vi finns på Kungsgatan 57E, 753 21 Uppsala.",
    },
    {
      question: "Hur bokar jag tid hos Pinkys Nails?",
      answer: "Boka via Bokadirekt eller sms/ring 072-396 88 88.",
    },
    {
      question: "Vad säger andra kunder om Pinkys Nails?",
      answer: "Vi har 4,6 i snittbetyg baserat på 561+ recensioner på Bokadirekt.",
    },
    {
      question: "Kan jag avboka min tid?",
      answer: "Avbokning via Bokadirekt senast 12 timmar innan, eller sms till 072 396 8888 senast 4 timmar innan. Sen avbokning debiteras 100% av behandlingspriset.",
    },
    {
      question: "Vilka betalsätt accepterar ni?",
      answer: "Vi tar Swish, kontant och kort.",
    },
  ],
  seoKeywords: [
    "naglar Kungsgatan",
    "gelénaglar Uppsala",
    "manikyr Uppsala",
    "Pinkys Nails",
    "akrylnaglar centrum",
  ],
  brandColors: {
    primary: "#C71585",
    secondary: "#FFB6D9",
    accent: "#FFF0F8",
    dark: "#8B0A50",
  },
} as const;

export function getFullAddress() {
  const { street, postalCode, city } = business.address;
  return `${street}, ${postalCode} ${city}`;
}

export function getMapsEmbedUrl() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps?q=${query}&output=embed`;
}

export function getMapsLink() {
  const query = encodeURIComponent(getFullAddress());
  return `https://www.google.com/maps/search/?api=1&query=${query}`;
}

export function formatPrice(amount: number | null) {
  if (amount === null) return "Pris på förfrågan";
  return `från ${amount} kr`;
}
