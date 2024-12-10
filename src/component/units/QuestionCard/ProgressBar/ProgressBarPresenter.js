import React from "react";
import styled from "styled-components";

const ProgressWrapper = styled.div`
  width: 100%;
  background-color: #f0f0f0;
  height: 10px;
  margin: 20px 0;
`;

const Progress = styled.div`
  width: ${(props) => props.progress}%;
  background-color: yellow;
  height: 100%;
`;

const ProgressBarPresenter = ({ progress }) => {
  return (
    <ProgressWrapper>
      <Progress progress={progress} />
    </ProgressWrapper>
  );
};

export default ProgressBarPresenter;
