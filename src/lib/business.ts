export const business = {
  name: "Pinkys Nails",
  tagline: "Nail art on Kungsgatan",
  description: "Busy nail salon on Kungsgatan offering acrylic, gel, manicure, and pedicure services.",
  category: "Beauty",
  address: {
    street: "Kungsgatan 57E",
    postalCode: "753 21",
    city: "Uppsala",
    country: "Sverige",
  },
  phone: "072-396 88 00",
  phoneLink: "tel:+46723968800",
  email: null as string | null,
  emailLink: null as string | null,
  bookingUrl: "https://www.bokadirekt.se/places/pinkys-nails-58041",
  bookingLabel: "Boka på Bokadirekt",
  facebookUrl: null as string | null,
  instagramUrl: null as string | null,
  owner: "Pinkys Nails",
  rating: 4.6,
  reviewCount: 561,
  foundedYear: null as number | null,
  coordinates: { lat: 59.8588, lng: 17.6386 },
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
  usps: [
    {
      title: "Certifierad behandling",
      description: "Skönhetsbehandlingar med omsorg hos Pinkys Nails.",
    },
    {
      title: "Personlig service",
      description: "Varje besök anpassas efter dina önskemål.",
    },
    {
      title: "Populärt val",
      description: "Starkt betyg med 561 recensioner.",
    },
    {
      title: "Bekvämt läge",
      description: "Finns på Kungsgatan 57E i Uppsala.",
    },
  ],
  services: [
    {
      id: "nagelf-rl-ngning-akryl",
      name: "Nagelförlängning akryl",
      description: "Professionell nagelförlängning akryl med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "gellack-manikyr",
      name: "Gellack manikyr",
      description: "Professionell gellack manikyr med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "fransk-manikyr",
      name: "Fransk manikyr",
      description: "Professionell fransk manikyr med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "spa-pedikyr",
      name: "Spa pedikyr",
      description: "Professionell spa pedikyr med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
    {
      id: "nagelf-rst-rkning",
      name: "Nagelförstärkning",
      description: "Professionell nagelförstärkning med fokus på kvalitet och kundnöjdhet.",
      duration: "30–90 min",
      priceFrom: null,
      note: "Kontakta oss för aktuella priser.",
    },
  ],
  testimonials: [
    {
      text: "Fantastisk upplevelse hos Pinkys Nails. Personalen var professionell och resultatet överträffade förväntningarna.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
    {
      text: "Rekommenderar Pinkys Nails varmt. Snabb service, trevligt bemötande och bra kvalitet till rimligt pris.",
      author: "Kundrecension",
      source: "Offentligt omdöme, parafraserat",
      rating: 5,
    },
  ],
  seoKeywords: [
    "naglar Kungsgatan",
    "gelénaglar Uppsala",
    "manikyr Uppsala",
    "pedikyr Uppsala",
  ],
  brandColors: {
    primary: "#8b4a6b",
    secondary: "#e8b4bc",
    accent: "#fdf6f8",
    dark: "#5c2d42",
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
