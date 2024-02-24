export const findMedian = (numbers) => {
  const sortedValue = numbers.slice().sort((a, b) => a - b);

  const middle = Math.floor(sortedValue.length / 2);

  if (sortedValue.length % 2 === 0) {
    console.log(sortedValue[middle - 1]);
    console.log(sortedValue[middle]);
    return (sortedValue[middle - 1] + sortedValue[middle]) / 2;
  } else {
    return sortedValue[middle];
  }
};
