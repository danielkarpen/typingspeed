export const calcWPM = (str, secs = 60) =>
  Math.round((str.length / 5) * (60 / secs));

export const removeNonLettersAndSpaces = (str) =>
  str.replace(/[^a-zA-Z\s]/g, "");

export const toKebabCase = (str) => str.toLowerCase().replace(/[\s]/g, "-");
