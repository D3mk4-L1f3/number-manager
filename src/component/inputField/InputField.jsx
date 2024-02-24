import { InputContainer } from "./InputField.styled";

const InputField = ({ handleChange }) => {
  return (
    <InputContainer>
      <label htmlFor="fileInput">Виберіть txt-файл із цілими числами</label>
      <input type="file" id="fileInput" accept=".txt" onChange={handleChange} />
    </InputContainer>
  );
};

export default InputField;
