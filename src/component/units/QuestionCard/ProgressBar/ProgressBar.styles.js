import styled from "@emotion/styled";

export const ProgressBarContainer = styled.div`
  width: 100%; // 전체 너비
  height: 10px; // 높이
  background-color: #ccc; // 배경색 (회색)
  border-radius: 5px; // 모서리 둥글게
  overflow: hidden; // 내부 요소 넘치지 않도록
`;

export const ProgressBarFill = styled.div`
  height: 100%; // 컨테이너 높이
  background-color: #000; // 진행 바 색상 (검정색)
  transition: width 0.3s ease; // 부드러운 너비 변경 애니메이션
`;
