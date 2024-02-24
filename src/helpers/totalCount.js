export const totalCount = (numbers) => {
  const total = numbers.length;

  const result = total
    .toLocaleString("en-US", { useGrouping: true })
    .replace(/,/g, " ");

  return result;
};
