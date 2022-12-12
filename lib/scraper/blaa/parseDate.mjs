export const englishMonths = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

export const parseDate = (day, month, year) => {
  const indexOfMonth = englishMonths.indexOf(month);
  const date = new Date(year, indexOfMonth, day);
  return date;
};
