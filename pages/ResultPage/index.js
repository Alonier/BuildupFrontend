import React from "react";
import { useLocation } from "react-router-dom"; // 결과 데이터 받기
import ResultContainer from "../../components/units/Result/ResultContainer";

const ResultPage = () => {
  const location = useLocation();
  const { totalQuestions, correctAnswers } = location.state || {
    totalQuestions: 0,
    correctAnswers: 0,
  };

  return (
    <ResultContainer
      totalQuestions={totalQuestions}
      correctAnswers={correctAnswers}
    />
  );
};

export default ResultPage;
