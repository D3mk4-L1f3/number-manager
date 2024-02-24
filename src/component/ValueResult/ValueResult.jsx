import { ValueList, ValueListItems } from "./ValueResult.styled";

const ValueResult = ({ results }) => {
  const {
    max,
    min,
    median,
    average,
    totalNumbers,
    incrementSequence,
    decrementSequence,
  } = results;

  const resultItems = [
    { label: "Максимальне число:", value: max },
    { label: "Мінімальне число:", value: min },
    { label: "Медіана:", value: median },
    { label: "Середнє арифметичне:", value: average },
    { label: "Найбільша зростаюча послідовність:", value: incrementSequence },
    { label: "Найбільша спадаюча послідовність:", value: decrementSequence },

    { label: "Всього чисел:", value: totalNumbers },
  ];

  return (
    <ValueList>
      {resultItems.map((item, index) => (
        <ValueListItems key={index}>
          <p>
            {item.label} <span>{item.value}</span>
          </p>
        </ValueListItems>
      ))}
    </ValueList>
  );
};

export default ValueResult;
