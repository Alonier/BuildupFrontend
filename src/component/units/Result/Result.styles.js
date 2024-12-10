import styled from "@emotion/styled";

export const ResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export const CircleContainer = styled.div`
  margin: 20px;
`;

export const Circle = styled.div`
  position: relative;
  width: 200px;
  height: 200px;

  .circular-chart {
    display: block;
    margin: 10px auto;
    max-width: 100%;
    max-height: 250px;
  }

  .circle-bg {
    stroke-linecap: round;
    transition: stroke-dasharray 0.3s ease;
  }

  .circle {
    stroke-linecap: round;
    transition: stroke-dasharray 0.3s ease;
  }
`;

export const CircleText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const CompleteButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #1e90ff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
