import React, { useState } from "react";
import QuestionCardMainPresenter from "./QuestionCardMainPresenter";

const QuestionCardMainContainer = () => {
  // 문제 데이터
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
      answer: 3, // 정답 인덱스
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
      answer: 0, // 정답 인덱스
    },
  ];

  // 상태 관리
  const [currentIndex, setCurrentIndex] = useState(0); // 현재 문제 번호
  const [selectedOption, setSelectedOption] = useState(null); // 사용자가 선택한 보기
  const [incorrectOptions, setIncorrectOptions] = useState([]); // 오답 보기 목록
  const [isCorrect, setIsCorrect] = useState(null); // 정답 여부
  const [buttonState, setButtonState] = useState("submit"); // 버튼 상태 ('submit' 또는 'next')

  // 보기 선택 핸들러
  const handleSelectOption = (index) => {
    // 오답 목록에 없는 보기이고 정답이 맞춰지지 않은 경우에만 선택 가능
    if (!incorrectOptions.includes(index) && isCorrect === null) {
      setSelectedOption(index); // 선택한 보기 저장
    }
  };

  // 제출 버튼 핸들러
  const handleSubmit = () => {
    const currentQuestion = questions[currentIndex]; // 현재 문제 가져오기

    if (selectedOption === currentQuestion.answer) {
      setIsCorrect(true); // 정답 처리
      setButtonState("next"); // 버튼 상태를 다음 버튼으로 변경
    } else {
      setIncorrectOptions((prev) => [...prev, selectedOption]); // 틀린 보기 추가
    }
  };

  // 다음 버튼 핸들러
  const handleNext = () => {
    setCurrentIndex((prev) => prev + 1); // 다음 문제로 이동
    setSelectedOption(null); // 선택 초기화
    setIncorrectOptions([]); // 오답 초기화
    setIsCorrect(null); // 정답 초기화
    setButtonState("submit"); // 버튼 상태 초기화
  };

  return (
    <QuestionCardMainPresenter
      question={questions[currentIndex]} // 현재 문제 전달
      current={currentIndex + 1} // 현재 문제 번호 전달
      total={questions.length} // 총 문제 수 전달
      selectedOption={selectedOption} // 선택된 보기 전달
      incorrectOptions={incorrectOptions} // 오답 보기 목록 전달
      isCorrect={isCorrect} // 정답 여부 전달
      buttonState={buttonState} // 버튼 상태 전달
      onSelect={handleSelectOption} // 보기 선택 핸들러 전달
      onSubmit={handleSubmit} // 제출 버튼 핸들러 전달
      onNext={handleNext} // 다음 버튼 핸들러 전달
    />
  );
};

export default QuestionCardMainContainer;
