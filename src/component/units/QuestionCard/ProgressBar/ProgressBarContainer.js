import React from "react";
import ProgressBarPresenter from "./ProgressBarPresenter";

const ProgressBarContainer = ({ current, total }) => {
  const progressPercentage = (current / total) * 100; // 현재 진행률 계산
  return <ProgressBarPresenter progressPercentage={progressPercentage} />;
};

export default ProgressBarContainer;
