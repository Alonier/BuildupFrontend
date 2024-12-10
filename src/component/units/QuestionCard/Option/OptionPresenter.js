import React from "react";
import { OptionList, OptionItem, OptionNumber } from "./Option.styles";

const OptionPresenter = ({
  options, // 문제 보기 목록
  selectedOption, // 현재 선택된 보기
  incorrectOptions = [], // 오답으로 처리된 보기 목록
  isCorrect, // 정답 여부
  onSelect, // 보기 선택 이벤트 핸들러
}) => {
  return (
    <OptionList>
      {/* 보기 리스트 렌더링 */}
      {options.map((option, index) => (
        <OptionItem
          key={index} // 고유 키
          isSelected={selectedOption === index} // 선택된 보기인지 확인
          isIncorrect={incorrectOptions.includes(index)} // 오답 보기인지 확인
          isCorrect={isCorrect === true && selectedOption === index} // 정답 보기인지 확인
          onClick={() => onSelect(index)} // 클릭 이벤트 전달
        >
          <OptionNumber>{index + 1}.</OptionNumber> {/* 보기 번호 */}
          {option} {/* 보기 텍스트 */}
        </OptionItem>
      ))}
    </OptionList>
  );
};

export default OptionPresenter;
