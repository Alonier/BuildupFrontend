import React from "react";
import styled from "styled-components";

const OptionWrapper = styled.div`
  padding: 10px;
  margin: 5px 0;
  background-color: ${(props) =>
    props.isCorrect
      ? "green"
      : props.isWrong
      ? "red"
      : props.isSelected
      ? "yellow"
      : "white"};
  border: 1px solid #ccc;
  cursor: ${(props) => (props.isAnswered ? "not-allowed" : "pointer")};
  &:hover {
    background-color: ${(props) => !props.isAnswered && "gray"};
  }
`;

const OptionPresenter = ({ text, onClick, isAnswered }) => {
  return (
    <OptionWrapper onClick={!isAnswered ? onClick : undefined}>
      {text}
    </OptionWrapper>
  );
};

export default OptionPresenter;
