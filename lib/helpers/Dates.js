const date = new Date("2021-01-01T00:00:00.000Z");
const compareDate = new Date("2021-01-02T00:00:00.000Z");

export const isSameDay = (date = date, compareDate = compareDate) => {
  date = date.setHours(0, 0, 0, 0);
  compareDate = compareDate.setHours(0, 0, 0, 0);
  return date === compareDate;
};
export const isBefore = (date = date, compareDate = date) => {
  return date < compareDate;
};

export const isBeforeNumberOfDays = (
  date = date,
  compareDate = compareDate,
  days = 1
) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return isBefore(newDate, compareDate);
};
