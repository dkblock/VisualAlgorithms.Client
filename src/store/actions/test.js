import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTestQuestion, fetchTestQuestions } from "./test-question";
import { showModal, hideModal } from "./modal";
import testService from "../../api/services/test-service";
import statusCode from "../../utils/status-code-reader";
import modalTypes from "../../constants/modal-types";

export const fetchPublishedTests = createAsyncThunk("fetchPublishedTests", async () => {
  const response = await testService.fetchPublishedTests();

  if (statusCode.ok(response)) {
    const tests = await response.json();
    return { tests, hasError: false };
  }

  return { tests: [], hasError: true };
});

export const fetchTests = createAsyncThunk("fetchTests", async () => {
  const response = await testService.fetchTests();

  if (statusCode.ok(response)) {
    const tests = await response.json();
    return { tests, hasError: false };
  }

  return { tests: [], hasError: true };
});

export const fetchTest = createAsyncThunk("fetchTest", async ({ testId }, thunkAPI) => {
  const response = await testService.fetchTest(testId);

  if (statusCode.ok(response)) {
    const test = await response.json();
    const {
      payload: { questions, hasError },
    } = await thunkAPI.dispatch(fetchTestQuestions({ testId: test.id }));

    if (questions.length > 0) {
      const question = questions[0];
      const answers = question.answers;

      return { test, question, questions, answers, hasError };
    }

    return { test, question: null, questions, answers: [], hasError: false };
  }

  return { test: null, question: null, questions: [], answers: [], hasError: true };
});

export const createTest = createAsyncThunk("createTest", async ({ test }, thunkAPI) => {
  const response = await testService.createTest(test);

  if (statusCode.created(response)) {
    thunkAPI.dispatch(hideModal());

    const createdTest = await response.json();
    return { test: createdTest, hasError: false };
  }

  return { hasError: true };
});

export const deleteTest = createAsyncThunk("deleteTest", async ({ testId }, thunkAPI) => {
  const response = await testService.deleteTest(testId);

  if (statusCode.noContent(response)) {
    thunkAPI.dispatch(hideModal());
    return { testId, hasError: false };
  }

  return { testId: null, hasError: true };
});

export const updateTest = createAsyncThunk("updateTest", async ({ testId, test }) => {
  const response = await testService.updateTest(testId, test);

  if (statusCode.ok(response)) {
    const updatedTest = await response.json();
    return { updatedTest, hasError: false };
  }

  return { hasError: true };
});

export const publishTest = createAsyncThunk("publishTest", async ({ testId }, thunkAPI) => {
  const response = await testService.publishTest(testId);

  if (statusCode.ok(response)) {
    thunkAPI.dispatch(hideModal());
    return { publishErrors: [], isPublished: true, hasError: false };
  }

  if (statusCode.badRequest(response)) {
    const { validationErrors } = await response.json();
    return { publishErrors: validationErrors, isPublished: false, hasError: true };
  }

  return { publishErrors: [], isPublished: false, hasError: true };
});

export const selectTest = createAction("selectTest", ({ testId }) => ({ payload: { testId } }));

export const showCreateTestModal = createAsyncThunk("showCreateTestModal", async (params, thunkAPI) => {
  thunkAPI.dispatch(showModal(modalTypes.createTest));
});

export const showDeleteTestModal = createAsyncThunk("showDeleteTestModal", async ({ test }, thunkAPI) => {
  thunkAPI.dispatch(showModal(modalTypes.deleteTest, { test }));
});

export const showPublishTestModal = createAsyncThunk("showPublishTestModal", async ({ test }, thunkAPI) => {
  thunkAPI.dispatch(showModal(modalTypes.publishTest, { test }));
});
