export const readNumbers = (value) => {
  return value
    .split("\n")
    .map(Number)
    .filter((num) => Number.isInteger(num) && !isNaN(num));
};
