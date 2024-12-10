import styled from "@emotion/styled";

export const OptionList = styled.ul`
  list-style: none; // 기본 리스트 스타일 제거
  padding: 0;
  margin: 0;
`;

export const OptionItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer; // 클릭 가능하도록 설정
  background-color: ${({ isSelected, isCorrect, isIncorrect }) =>
    isCorrect
      ? "lightgreen" // 정답인 경우
      : isIncorrect
      ? "lightcoral" // 오답인 경우
      : isSelected
      ? "lightblue" // 선택된 경우
      : "white"}; // 기본 색상
  color: ${({ isCorrect, isIncorrect }) =>
    isCorrect ? "green" : isIncorrect ? "red" : "black"}; // 글자 색상
  pointer-events: ${({ isCorrect, isIncorrect }) =>
    isCorrect || isIncorrect
      ? "none"
      : "auto"}; // 정답 또는 오답인 경우 클릭 비활성화

  &:hover {
    background-color: ${({ isCorrect, isIncorrect }) =>
      isCorrect || isIncorrect ? "white" : "lightgray"}; // 호버 시 색상
  }
`;

export const OptionNumber = styled.span`
  margin-right: 10px; // 번호와 텍스트 간격
  font-weight: bold; // 굵게 표시
`;
