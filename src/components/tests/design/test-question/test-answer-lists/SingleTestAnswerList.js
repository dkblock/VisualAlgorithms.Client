import React, { useCallback, useMemo } from "react";
import Button, { buttonTypes, colors } from "../../../../_common/Button";
import { iconTypes } from "../../../../_common/Icon";
import { SortableList } from "../../../../_common/List";
import TestAnswerListItem from "./TestAnswerListItem";

const prepareAnswers = (answers, onAnswerValueChange, onAnswerDelete) =>
  answers.map((answer) => ({
    id: answer.id,
    checked: answer.isCorrect,
    content: <TestAnswerListItem answer={answer} onAnswerValueChange={onAnswerValueChange} />,
    actions: [
      {
        id: "delete",
        label: "Удалить",
        icon: iconTypes.delete,
        onClick: () => onAnswerDelete(answer.id),
      },
    ],
  }));

const SingleTestAnswerList = ({
  answers,
  onAnswerCreate,
  onAnswerDelete,
  onAnswerValueChange,
  onIsCorrectAnswerChange,
  onAnswerMove,
}) => {
  const handleIsCorrectAnswerChange = useCallback(
    (newCorrectAnswerIds) => {
      const answerId = newCorrectAnswerIds[0];
      const newOrderedAnswers = answers.map((answer) => ({ ...answer, isCorrect: answer.id === answerId }));

      onIsCorrectAnswerChange(newOrderedAnswers, newCorrectAnswerIds, answerId);
    },
    [answers, onIsCorrectAnswerChange]
  );

  const preparedAnswers = useMemo(() => prepareAnswers(answers, onAnswerValueChange, onAnswerDelete), [
    answers,
    onAnswerDelete,
    onAnswerValueChange,
  ]);

  return (
    <div className="test-answer-list">
      <div className="test-answer-list__header">
        Ответы
        <Button color={colors.success} type={buttonTypes.text} startIcon={iconTypes.plus} onClick={onAnswerCreate}>
          Новый ответ
        </Button>
      </div>
      <div className="test-answer-list__items">
        {preparedAnswers.length > 0 ? (
          <SortableList
            items={preparedAnswers}
            onSwap={onAnswerMove}
            onCheck={handleIsCorrectAnswerChange}
            checkControlType="radio"
          />
        ) : (
          <div className="m-auto pt-5">Нет ответов</div>
        )}
      </div>
    </div>
  );
};

export default SingleTestAnswerList;
