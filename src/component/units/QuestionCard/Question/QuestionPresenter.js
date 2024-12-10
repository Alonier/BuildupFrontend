import React from "react";
import { QuestionText } from "./Question.styles";

const QuestionPresenter = ({ content }) => {
  return <QuestionText>{content}</QuestionText>; // 문제 텍스트 렌더링
};

export default QuestionPresenter;
