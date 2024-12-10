import styled from "@emotion/styled";

// 메인 컨테이너 스타일
export const MainContainer = styled.div`
  padding: 20px;
  font-family: Arial, sans-serif;
`;

// 버튼 스타일
export const Button = styled.button`
  padding: 10px 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: gray; // 마우스 오버 시 색상 변경
  }
`;
