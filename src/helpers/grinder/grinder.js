import {
  findAverage,
  findMax,
  findMedian,
  findMin,
  readNumbers,
  totalCount,
  incSequence,
  decSequence,
} from "../index";

export const grinder = (evt, results) => {
  const values = evt.target.result;
  const numbers = readNumbers(values);
  const totalNumbers = totalCount(numbers);
  const max = findMax(numbers);
  const min = findMin(numbers);
  const median = findMedian(numbers);
  const average = findAverage(numbers);
  const incrementSequence = incSequence(numbers);
  const decrementSequence = decSequence(numbers);

  results({
    max,
    min,
    median,
    average,
    totalNumbers,
    incrementSequence,
    decrementSequence,
  });
};
