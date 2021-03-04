export const calcWPM = (str, secs = 60) =>
  Math.round((str.length / 5) * (60 / secs));

export const toKebabCase = (str) => str.toLowerCase().replace(" ", "-");
