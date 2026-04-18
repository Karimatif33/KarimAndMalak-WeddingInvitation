export function getCairoNow() {
  return new Date(new Date().toLocaleString("en-US", { timeZone: "Africa/Cairo" }));
}

export function getDaysPassed(dateString) {
  const now = getCairoNow();
  const past = new Date(dateString);
  return Math.floor((now - past) / (1000 * 60 * 60 * 24));
}

export function getCountdown(targetDate) {
  const now = getCairoNow();
  const diff = new Date(targetDate) - now;
  const safeDiff = Math.max(0, diff);

  return {
    days: Math.floor(safeDiff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((safeDiff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((safeDiff / (1000 * 60)) % 60),
    seconds: Math.floor((safeDiff / 1000) % 60),
  };
}

export function formatEventDate(dateString, locale = "en-GB") {
  return new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(dateString));
}
