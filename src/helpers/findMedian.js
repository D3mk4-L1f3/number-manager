export const findMedian = (numbers) => {
  const middle = Math.floor(numbers.length / 2);

  if (numbers.length % 2 === 0) {
    return (numbers[middle - 1] + numbers[middle]) / 2;
  } else {
    return numbers[middle];
  }
};
