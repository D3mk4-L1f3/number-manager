export const decSequence = (numbers) => {
  let maxLength = 1;
  let currentLength = 1;
  let maxStartIndex = 0;
  let maxEndIndex = 0;
  let currentStartIndex = 0;

  let index = 0;
  for (const number of numbers) {
    if (index !== 0 && number < numbers[index - 1]) {
      currentLength += 1;
    } else {
      if (currentLength > maxLength) {
        maxLength = currentLength;
        maxStartIndex = currentStartIndex;
        maxEndIndex = index - 1;
      }
      currentStartIndex = index;
      currentLength = 1;
    }
    index++;
  }

  if (currentLength > maxLength) {
    maxLength = currentLength;
    maxStartIndex = currentStartIndex;
    maxEndIndex = numbers.length - 1;
  }

  const result = numbers.slice(maxStartIndex, maxEndIndex + 1).join(", ");

  return result;
};
