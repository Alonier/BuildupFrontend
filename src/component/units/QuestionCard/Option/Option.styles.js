import styled from "@emotion/styled";

export const OptionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  background-color: ${({ isSelected, isCorrect, isIncorrect }) =>
    isCorrect
      ? "lightgreen"
      : isIncorrect
      ? "lightcoral"
      : isSelected
      ? "lightblue"
      : "white"};
  color: ${({ isCorrect, isIncorrect }) =>
    isCorrect ? "green" : isIncorrect ? "red" : "black"};
  pointer-events: ${({ isCorrect, isIncorrect }) =>
    isCorrect || isIncorrect ? "none" : "auto"};

  &:hover {
    background-color: ${({ isCorrect, isIncorrect }) =>
      isCorrect || isIncorrect ? "white" : "lightgray"};
  }
`;

export const OptionNumber = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;
