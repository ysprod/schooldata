export function getRandomDateOver18(): string {
  const currentDate = new Date();
  const year = currentDate.getFullYear() - 18;
  const randomYear = Math.floor(Math.random() * (year - 1900 + 1)) + 1900;
  const randomMonth = Math.floor(Math.random() * 12);
  const randomDay = Math.floor(Math.random() * 28) + 1;
  return formatDateinverse(new Date(randomYear, randomMonth, randomDay));
}

/**
 * Formatte une date en utilisant le format "JJ/MM/AAAA"
 * @param {string|number|Date} dateString La date à formater
 * @returns {string} La date formattée
 */
export const formatDate = (dateString: string | number | Date): string => {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0'); // Le jour
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Le mois (indexé à partir de 0)
  const year = date.getUTCFullYear(); // L'année
  return `${day}/${month}/${year}`; // La date formattée
};

/**
 * Formatte une date en utilisant le format "AAAA-MM-JJ"
 * @param {string|number|Date} dateString La date à formater
 * @returns {string} La date formattée
 */
export const formatDateinverse = (dateString: string | number | Date): string => {
  const date = new Date(dateString);
  const day = String(date.getUTCDate()).padStart(2, '0'); // Le jour
  const month = String(date.getUTCMonth() + 1).padStart(2, '0'); // Les mois sont indexés à partir de 0
  const year = date.getUTCFullYear(); // L'année
  return `${year}-${month}-${day}`; // La date formattée
};

/**
 * Calculates the age of a person given a date of birth.
 * @param {string|number|Date} date The date of birth.
 * @returns {number} The age of the person in years.
 */
export const calculateAge = (date: number | string | Date): number => {
  const birthDate = new Date(date); // The date of birth to calculate the age from.
  const today = new Date(); // The current date to calculate the age from.
  let age = today.getFullYear() - birthDate.getFullYear(); // The age in years.

  // Calculate the difference in months between the current month and the month of birth.
  const monthDifference = today.getMonth() - birthDate.getMonth();

  // If the month difference is negative or zero, but the current day is before the day of birth,
  // subtract one from the age.
  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  // Return the age in years.
  return age;
};

export const coupemot = (lemot: string) => { return lemot.substring(0, 20) }

/**
 * Capitalize the first letter of a string.
 * @param {string} str The string to capitalize.
 * @returns {string} The capitalized string.
 */
export function capitalize(str: string): string {
  // Return the string with the first letter capitalized.
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const lelogo = {
  image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAA0CAYAAADIZmusAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAATeSURBVHjaYvz//z/DcAAAAcQCIjwKfSk2aIrgI3CI5LyXY6SnB3b0bwbTAAHEQi0PDDQACCAWYh2JHtIgOXyhj08vLQBAALGQk3RgbFyxgS6OzqeFxwACiIXU5EIoKQ1UUgMIIKbBmuZJdQtAALEMpANxJTFkDxCb1wACiGkwhTqITShZ45IHCCCWweAJaiRngABiYhiCAJvHAQIIwyOgdEjv2pkangEIoCEZI9gAQADh9MhQiBVkABBATIO9DUVs8gIIoGGTtAACaNgkLYAAwhsjQ8kzAAHEQknTW6XuIobYw0meDL8/PMOrBhu406TPIGSfCcQZKGLEAoAAYiEns+NznHzedpIdQQ0AEEBMpCYlpbIjRBlMrDpqAYAAYsGWL/DFBhMHLwr/w8mlDG92djGwCkjBY+Nelw3Dvx+fMfR+f3iGZh4BCCCSGo3oSQo5+YDyBaHk9HRhMlUdDwr0HVA2QACR3fr9+eImyXpw5a13B2cA8XSSPYHMBwggsnuIj2eFDariFyCAWMhtknAqmDB8f3BmQByNrVACCCCyk5Z03FySi1haFskAAUT1thaxFSC1AUAAsRBb7MJCFNmhuBwNEscW+vg8SWlsAQQQyTHy+eKmAY0ZXJU2QACR7JGXG2vBFR7e+mJRMk3yA76WB0AAkZXZQbU2sQ4lxUOguoTU+gQGAAKIaSj1CPEBgABiGg6eAAGAAGIhtsTCBmJO32W49vc7g/x/dswmzD/8xrEzYSb3e69/MmhIcDCsNFMh2SMAAcSCKyPh85ja7EsMUiGswKKJgYHnPTODES8XhhrGb/h7BP+BkBEI/ysgrHl44SfDS87fDA63rjM8O/ib4VaqHtEeAQggFnwlBD7PaDBwMnCLMTF8EPnLoPUZyOZhxlT0FeZoJA+iq/nGwPCX+z/Db5H/DAflPzPo/ONi+AvU8YzhI9bOHq6SCyCAyG6iiDGyMvz/9J/hO+8/BkZxYD/lHdCR6CmMA4h/EDaL+Ssj0PEQwKcADJBHpLsHIIAIDj7gK7sZfzIysH6HSP8XABJ/0V0IFCciqP6B9ANj788raNzJke4RgAAiqkLE55l/oI7gH4iD//6A+AUZ/2PHFEPHIOeDpsk5viCcw6hN2gAOQABR3GhkBmXYt0AHAR3yVxyIv/4Hp3EUzI1FDA3/gxlIIFnhmiMBCCCKPcLCCPIEEL8ERcx/hj9gz2AJeW7cMfIHWooxEOkZbKUqQABRJUbAjgHFyAtIzPxjBXroCxD/Q8Oc/8Hq0PFfMI1WPF8lrVoDCCCiSi1CleU/BiSHAD3zHxgrjF+gxS83mmIuRLEMHoX594fh5d/fDHf+/GS4ywTEX38S5TL0fAsQQBRPvTEzMoKTxV/kGgKYzJiARfLHz38Yrr37zrAVS53A8J2AwUKkDdkCBBDV5hD/QrNrI2y49AMQCyA5mBO900+EZ0gAAAFEeYxA6Uak8V5EugFifiD+SPtGI0AAke2Rz//+Muz8+pHhNxOBTAn0BCOwSPn/nbaxAhBAZJVa/yUYGLZ8/wD2BCMRqfj/Pzz5gpM6HgEIIJJiBJH5LsGjgeR1a/hiRpSBgfUfI+FYxgIAAoiFNA8ggTdALEJm8OHxDNgTr0g3EiCAyKsQ/1PgCfTi9w8SZoU1rbG19/EDgAADAGcwLQQoaXTdAAAAAElFTkSuQmCC",
  width: 40,
};
