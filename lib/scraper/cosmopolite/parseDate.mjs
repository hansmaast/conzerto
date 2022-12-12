const norwegianMonths = [
  'januar',
  'februar',
  'mars',
  'april',
  'mai',
  'juni',
  'juli',
  'august',
  'september',
  'oktober',
  'november',
  'desember',
];

export const parseDate = (string) => {
  let [day, month] = string.split('.');
  day = day.trim();
  month = month.trim().toLowerCase();

  const monthIndex = norwegianMonths.indexOf(month);
  if (monthIndex === -1) {
    throw new Error(`Could not parse date: ${string}`);
  }
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const date = new Date(currentYear, monthIndex, day);

  // set year to year + 1 if date is in the past, except for today
  if (date < currentDate && date.getDate() !== currentDate.getDate()) {
    date.setFullYear(currentYear + 1);
  }

  return date;
};
