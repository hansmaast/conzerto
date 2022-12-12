const century = 20;

/**
 * @param {string} string in format dd.mm.yy
 * @returns {Date} new Date
 */
export const parseDateString = (string) => {
  try {
    string = string.trim();
    const [day, month, year] = string.split('.');
    const parsedDate = new Date(century + year, month - 1, day);
    return parsedDate;
  } catch (error) {
    throw new Error(`Could not parse date: ${string}`);
  }
};
