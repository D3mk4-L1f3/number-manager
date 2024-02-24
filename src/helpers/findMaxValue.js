export const findMax = (numbers) => {
  if (!numbers || numbers.length === 0) {
    return;
  }

  let maxValue = numbers[0];

  for (const number of numbers) {
    if (number > maxValue) {
      maxValue = number;
    }
  }

  const result = maxValue
    .toLocaleString("en-US", { useGrouping: true })
    .replace(/,/g, " ");

  return result;
};
