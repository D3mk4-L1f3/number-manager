export const findAverage = (numbers) => {
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  const average = sum / numbers.length;

  const result = average
    .toLocaleString("en-US", { useGrouping: true })
    .replace(/,/g, " ");

  return result;
};
