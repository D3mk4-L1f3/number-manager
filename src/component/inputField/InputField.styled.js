import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  & > label {
    font-size: clamp(14px, 2vw, 20px);
    color: green;
  }
`;
