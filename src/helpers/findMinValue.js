export const findMin = (numbers) => {
  if (!numbers || numbers.length === 0) {
    return;
  }

  let minValue = numbers[0];

  for (const number of numbers) {
    if (number < minValue) {
      minValue = number;
    }
  }

  const result = minValue
    .toLocaleString("en-US", { useGrouping: true })
    .replace(/,/g, " ");

  return result;
};
