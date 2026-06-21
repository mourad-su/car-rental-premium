const image = (query) => `https://source.unsplash.com/900x650/?${query}`;

export const vehicles = [
  { name: "Dacia Logan", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 300, image:'public/voiture/logan-gris.png'},
  { name: "Dacia Logan", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 300, image:'public/voiture/logan-noir.png'},
  { name: "Opel Corsa", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 42, image: 'public/voiture/corsa-gris.png' },
  { name: "RENAULT Captur", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 400, image: 'public/voiture/captur-blanc.jpg' },
  { name: "Clio 5", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 400, image: 'public/voiture/clio5-gris.jpg' },
  { name: "Clio 5", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 400, image: 'public/voiture/clio5-noir.jpg' },
  { name: "Clio 5", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 400, image: 'public/voiture/clio5-blanc.jpg' },
  { name: "Hyundai Tucson", category: "SUV", transmission: "Automatic", seats: 5, priceUsd: 47, image: 'public/voiture/tecson-gris.png' },
  { name: "Dacia Sandero Stepway", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 135, image: 'public/voiture/stepway-gris.jpg' },
  { name: "Dacia Sandero Stepway", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 135, image: 'public/voiture/stepway-zitiya.jpg' },
  { name: "Clio 5", category: "SUV", transmission: "Automatic", seats: 5, priceUsd: 400, image: 'public/voiture/clio5-gris.jpg' },
  { name: "Dacia Sandiro", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 300, image: 'public/voiture/sandiro-noir.jpg' },
  { name: "Clio 5", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 400, image: 'public/voiture/clio5-noir.jpg' },
  { name: "Dacia Sandero Stepway", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 135, image: 'public/voiture/stepway-noir.jpg' },
  { name: "Hyundai Tecson", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 32, image: 'public/voiture/tecson-gris-naldo.png' },
  { name: "RENAULT Captur", category: "SUV", transmission: "Automatic", seats: 5, priceUsd: 400, image: 'public/voiture/captur-noir.jpg' },
  { name: "Citroen C3", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 42, image: 'public/voiture/C-3-gris.png' },
  { name: "Opel Corsa", category: "SUV", transmission: "Manual", seats: 5, priceUsd: 42, image: 'public/voiture/opel-blanc.png' },
];

export const categoryLabels = {
  fr: { SUV: "SUV", Sedan: "Berline", Luxury: "Luxe", Compact: "Compacte", Sport: "Sport" },
  ar: { SUV: "SUV", Sedan: "سيدان", Luxury: "فاخرة", Compact: "مدمجة", Sport: "رياضية" },
  en: { SUV: "SUV", Sedan: "Sedan", Luxury: "Luxury", Compact: "Compact", Sport: "Sport" },
  es: { SUV: "SUV", Sedan: "Sedan", Luxury: "Lujo", Compact: "Compacto", Sport: "Deportivo" },
  de: { SUV: "SUV", Sedan: "Limousine", Luxury: "Luxus", Compact: "Kompakt", Sport: "Sport" },
};

export const transmissionLabels = {
  fr: { Automatic: "Automatique", Manual: "Manuelle" },
  ar: { Automatic: "أوتوماتيك", Manual: "يدوي" },
  en: { Automatic: "Automatic", Manual: "Manual" },
  es: { Automatic: "Automatico", Manual: "Manual" },
  de: { Automatic: "Automatik", Manual: "Manuell" },
};
