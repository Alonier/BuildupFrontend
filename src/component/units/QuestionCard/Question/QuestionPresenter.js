import React from "react";
import styled from "styled-components";

const QuestionText = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const QuestionPresenter = ({ text }) => {
  return <QuestionText>{text}</QuestionText>;
};

export default QuestionPresenter;
