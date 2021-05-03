import React, { useCallback, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTitle } from "../../../hooks";
import { editTest, fetchTests, showCreateTestModal, showDeleteTestModal } from "../../../store/actions/test";
import { navigateToTestDesigner } from "../../../utils/navigator";
import Table, { TableToolbar } from "../../_common/Table";
import { iconTypes } from "../../_common/Icon";
import Button, { colors } from "../../_common/Button";

const getActions = (onTestEdit, onTestDelete) => [
  {
    label: "Редактировать",
    icon: iconTypes.edit,
    onClick: (test) => onTestEdit(test),
  },
  {
    label: "Удалить",
    icon: iconTypes.delete,
    onClick: (test) => onTestDelete(test),
  },
];

const columns = [
  { field: "name", headerName: "Название" },
  { field: "algorithmName", headerName: "Алгоритм" },
  { field: "questionsCount", headerName: "Вопросы", width: 120 },
  { field: "createdBy", headerName: "Автор" },
  { field: "createdDate", headerName: "Создан", type: "dateTime" },
];

const prepareTests = (tests) =>
  tests.map((test) => ({
    id: test.id,
    name: test.name,
    algorithmName: test.algorithm.name,
    questionsCount: test.questions.length,
    createdBy: `${test.createdBy.firstName} ${test.createdBy.lastName}`,
    createdDate: new Date(test.createdDate),
  }));

const TestList = () => {
  const dispatch = useDispatch();
  const { tests, isFetching } = useSelector((state) => state.test);

  useTitle("Тесты", "Тесты");

  useEffect(() => {
    dispatch(fetchTests());
  }, [dispatch]);

  const handleTestDelete = useCallback(
    (test) => {
      dispatch(showDeleteTestModal({ test }));
    },
    [dispatch]
  );

  const handleTestEdit = useCallback(
    (test) => {
      dispatch(editTest({ test }));
      navigateToTestDesigner(test.id);
    },
    [dispatch]
  );

  const handleTestCreate = useCallback(() => dispatch(showCreateTestModal()), [dispatch]);

  const actions = useMemo(() => getActions(handleTestEdit, handleTestDelete), [handleTestDelete, handleTestEdit]);
  const preparedTests = useMemo(() => prepareTests(tests), [tests]);

  return (
    <Table
      toolbar={
        <TableToolbar title="Тесты" count={tests.length}>
          <Button color={colors.success} startIcon={iconTypes.plus} onClick={handleTestCreate}>
            Новый тест
          </Button>
        </TableToolbar>
      }
      columns={columns}
      data={preparedTests}
      actions={actions}
      isFetching={isFetching}
      sortBy="createdDate"
      sortDirection="desc"
    />
  );
};

export default TestList;
