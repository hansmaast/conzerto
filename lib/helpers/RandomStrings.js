// Generate a set of short, plesant quotes to display wile the user is waiting for the app to load
export const quotes = [
  "Vent litt, så er det klart!",
  "Bittelitt mer bare!",
  "To sek, lover..",
  "En..",
  "To..",
  "Kødda, det tar litt lenger tid enn antatt!",
  "Takk for tålmodigheten!",
];

export function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}
