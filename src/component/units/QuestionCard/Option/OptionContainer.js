import React from "react";
import OptionPresenter from "./OptionPresenter";

const OptionContainer = ({
  options, // 문제 보기 배열
  selectedOption, // 선택된 보기
  incorrectOptions, // 오답으로 처리된 보기 배열
  isCorrect, // 정답 여부
  onSelect, // 보기 선택 핸들러
}) => {
  return (
    <OptionPresenter
      options={options} // 보기 배열 전달
      selectedOption={selectedOption} // 선택된 보기 전달
      incorrectOptions={incorrectOptions} // 오답 보기 목록 전달
      isCorrect={isCorrect} // 정답 여부 전달
      onSelect={onSelect} // 보기 선택 이벤트 전달
    />
  );
};

export default OptionContainer;
