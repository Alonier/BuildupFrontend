import React, { useState } from "react";
import QuestionCardMainPresenter from "./QuestionCardMainPresenter";

const QuestionCardMainContainer = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  // 하드코딩된 문제와 정답
  const question = "AI는 어떤 작업들을 수행할 수 있는 기술로 연구되어왔습니까?";
  const options = [
    "간단한 결과 분석, 요약",
    "사운드 처리, 자연어 처리, 이미지 분석",
    "게임 플레이, 로봇 동작 관리",
    "정보 검색, 데이터 분석 및 패턴 감지 등",
  ];
  const correctOption = 3; // 정답 인덱스 (4번째 보기)

  const handleOptionClick = (optionIndex) => {
    if (!isAnswered) {
      setSelectedOption(optionIndex);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    if (selectedOption === correctOption) {
      setIsCorrect(true);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(false);
  };

  return (
    <QuestionCardMainPresenter
      question={question}
      options={options}
      selectedOption={selectedOption}
      isAnswered={isAnswered}
      isCorrect={isCorrect}
      correctOption={correctOption}
      handleOptionClick={handleOptionClick}
      handleSubmit={handleSubmit}
      handleNext={handleNext}
    />
  );
};

export default QuestionCardMainContainer;
