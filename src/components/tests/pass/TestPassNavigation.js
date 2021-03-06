import React from "react";
import { useSelector } from "react-redux";
import Button, { buttonTypes } from "../../_common/Button";
import { iconTypes } from "../../_common/Icon";

const TestPassNavigation = ({ onNextQuestionClick, onPreviousQuestionClick }) => {
  const { currentQuestion } = useSelector((state) => state.testPass);

  return (
    <div className="test-pass-navigation">
      <div>
        {currentQuestion.previousQuestionId && (
          <Button type={buttonTypes.outlined} startIcon={iconTypes.arrowLeft} onClick={onPreviousQuestionClick}>
            Предыдущий вопрос
          </Button>
        )}
      </div>
      <div>
        <Button endIcon={iconTypes.arrowRight} onClick={onNextQuestionClick}>
          {currentQuestion.nextQuestionId ? "Следующий вопрос" : "Завершить тест"}
        </Button>
      </div>
    </div>
  );
};

export default TestPassNavigation;
