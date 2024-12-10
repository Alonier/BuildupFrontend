import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // React Router로 페이지 이동
import QuestionCardMainPresenter from "./QuestionCardMainPresenter";

const QuestionCardMainContainer = () => {
  const navigate = useNavigate(); // 페이지 이동 함수
  const questions = [
    {
      id: 1,
      content: "A는 어떤 직업들을 수행할 수 있는 기술 및 연구 분야인가요?",
      options: [
        "건축 설계, 음악 제작, 요리",
        "식물 배양, 지질 조사, 언어 교육",
        "게임 개발, 문학 작업, 신발 제조",
        "음식 인식, 문제 해결, 학습, 의사 결정 및 패턴 인식 등",
        "공학, 철학 실험, 시각 예술",
      ],
      answer: 3,
    },
    {
      id: 2,
      content: "B는 어떤 기술을 활용할 수 있을까요?",
      options: [
        "인공지능, 머신러닝",
        "전기 공학, 회로 설계",
        "응용 화학, 약물 개발",
        "컴퓨터 네트워크, 보안",
        "교육 설계, 교수법 개발",
      ],
      answer: 0,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0); // 현재 문제 번호
  const [selectedOption, setSelectedOption] = useState(null); // 선택된 보기
  const [incorrectOptions, setIncorrectOptions] = useState([]); // 오답 보기 목록
  const [isCorrect, setIsCorrect] = useState(null); // 정답 여부
  const [buttonState, setButtonState] = useState("submit"); // 버튼 상태 ('submit' 또는 'next')
  const [correctCount, setCorrectCount] = useState(0); // 맞춘 문제 수

  const handleSelectOption = (index) => {
    if (!incorrectOptions.includes(index) && isCorrect === null) {
      setSelectedOption(index); // 선택한 보기 저장
    }
  };

  const handleSubmit = () => {
    const currentQuestion = questions[currentIndex];
    if (selectedOption === currentQuestion.answer) {
      setIsCorrect(true); // 정답 처리
      setCorrectCount((prev) => prev + 1); // 맞춘 문제 수 증가
      setButtonState("next"); // 버튼 상태를 다음 버튼으로 변경
    } else {
      setIncorrectOptions((prev) => [...prev, selectedOption]); // 오답 처리
    }
  };

  const handleNext = () => {
    if (currentIndex === questions.length - 1) {
      // 마지막 문제일 경우 결과 화면으로 이동
      navigate("/result", {
        state: {
          totalQuestions: questions.length,
          correctAnswers: correctCount,
        },
      });
    } else {
      setCurrentIndex((prev) => prev + 1); // 다음 문제로 이동
      setSelectedOption(null); // 선택 초기화
      setIncorrectOptions([]); // 오답 초기화
      setIsCorrect(null); // 정답 여부 초기화
      setButtonState("submit"); // 버튼 상태 초기화
    }
  };

  return (
    <QuestionCardMainPresenter
      question={questions[currentIndex]}
      current={currentIndex + 1}
      total={questions.length}
      selectedOption={selectedOption}
      incorrectOptions={incorrectOptions}
      isCorrect={isCorrect}
      buttonState={buttonState}
      onSelect={handleSelectOption}
      onSubmit={handleSubmit}
      onNext={handleNext}
    />
  );
};

export default QuestionCardMainContainer;
