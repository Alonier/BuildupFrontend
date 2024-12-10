import styled from "@emotion/styled"; // Emotion을 사용하여 스타일링

// 진행 바 전체 컨테이너 스타일
export const ProgressBarContainer = styled.div`
  width: 100%; // 진행 바 너비
  height: 20px; // 진행 바 높이
  border: 1px solid black; // 테두리 스타일
  background-color: lightgray; // 진행 바 배경색

  & > div {
    height: 100%; // 내부 채워진 바의 높이
    background-color: black; // 채워진 바 색상
  }
`;
