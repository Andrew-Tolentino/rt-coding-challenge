/**
 * Uses a Date object and returns MM/DD/YYYY string
 * @param {Date} date
 * @returns string
 */
export const getDateString = date => {
  const month = date.getMonth() + 1;
  const monthStr = month < 10 ? `0${month}` : `${month}`;

  const day = date.getDate();
  const dayStr = day < 10 ? `0${day}` : `${day}`;

  return `${monthStr}/${dayStr}/${date.getFullYear()}`;
}