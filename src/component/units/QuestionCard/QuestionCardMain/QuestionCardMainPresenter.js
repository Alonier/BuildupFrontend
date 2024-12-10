import React from "react";
import styled from "styled-components";
import Question from "../Question/QuestionContainer";
import Option from "../Option/OptionContainer";
import ProgressBar from "../ProgressBar/ProgressBarContainer";

const Container = styled.div`
  padding: 20px;
`;

const QuestionCardMainPresenter = ({
  question,
  options,
  selectedOption,
  isAnswered,
  isCorrect,
  correctOption,
  handleOptionClick,
  handleSubmit,
  handleNext,
}) => {
  return (
    <Container>
      <Question text={question} />
      {options.map((option, index) => (
        <Option
          key={index}
          text={option}
          index={index}
          isSelected={selectedOption === index}
          isAnswered={isAnswered}
          isCorrect={isAnswered && index === correctOption}
          isWrong={
            isAnswered &&
            selectedOption === index &&
            selectedOption !== correctOption
          }
          onClick={() => handleOptionClick(index)}
        />
      ))}
      <ProgressBar />
      <button onClick={isAnswered && isCorrect ? handleNext : handleSubmit}>
        {isAnswered && isCorrect ? "Next" : "Submit"}
      </button>
    </Container>
  );
};

export default QuestionCardMainPresenter;
