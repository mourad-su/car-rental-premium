import { languageCurrency } from "../data/translations.js";

export function formatVehiclePrice(priceUsd, lang) {
  const currency = languageCurrency[lang] ?? languageCurrency.fr;
  const value = Math.round(priceUsd * currency.rate * currency.marketMultiplier);

  return new Intl.NumberFormat(currency.locale, {
    style: "currency",
    currency: currency.code,
    maximumFractionDigits: 0,
  }).format(value);
}
