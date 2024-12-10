import React from "react";
import OptionPresenter from "./OptionPresenter";

const OptionContainer = ({
  text,
  isSelected,
  isAnswered,
  isCorrect,
  isWrong,
  onClick,
}) => {
  return (
    <OptionPresenter
      text={text}
      isSelected={isSelected}
      isAnswered={isAnswered}
      isCorrect={isCorrect}
      isWrong={isWrong}
      onClick={onClick}
    />
  );
};

export default OptionContainer;
