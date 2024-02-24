import styled from "styled-components";

export const ValueList = styled.ul`
  all: unset;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 700px;

  & > li:last-child {
    text-align: end;
    padding-top: 15px;
    border-top: 1px solid green;
  }
`;

export const ValueListItems = styled.li`
  & > p {
    all: unset;
    font-size: clamp(14px, 2vw, 22px);
    color: lightsalmon;

    & > span {
      font-size: clamp(16px, 2vw, 24px);
      color: black;
    }
  }
`;
