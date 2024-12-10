import React from "react";
import { ProgressBarContainer, ProgressBarFill } from "./ProgressBar.styles";

const ProgressBarPresenter = ({ progressPercentage }) => {
  return (
    <ProgressBarContainer>
      <ProgressBarFill style={{ width: `${progressPercentage}%` }} />{" "}
      {/* 진행률 반영 */}
    </ProgressBarContainer>
  );
};

export default ProgressBarPresenter;
