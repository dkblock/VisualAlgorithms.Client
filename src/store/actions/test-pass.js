import { createAsyncThunk } from "@reduxjs/toolkit";
import testService from "../../api/services/test-service";
import testQuestionService from "../../api/services/test-question-service";
import statusCode from "../../utils/status-code-reader";

export const startTestPass = createAsyncThunk("startTestPass", async ({ testId }) => {
  const response = await testService.startTestPass(testId);

  if (statusCode.ok(response)) {
    const firstQuestion = await response.json();
    return { question: firstQuestion, hasError: false };
  }

  return { hasError: true };
});

export const fetchNextTestQuestion = createAsyncThunk("fetchNextTestQuestion", async ({ testId, userAnswer }) => {
  const response = await testQuestionService.fetchNextQuestion(testId, userAnswer);

  if (statusCode.ok(response)) {
    const nextQuestion = await response.json();
    return { userAnswer, question: nextQuestion, hasError: false };
  }

  if (statusCode.noContent(response)) {
    return { question: null, hasError: false };
  }

  return { hasError: true };
});

export const fetchPreviousTestQuestion = createAsyncThunk(
  "fetchPreviousTestQuestion",
  async ({ testId, currentQuestionId }) => {
    const response = await testQuestionService.fetchPreviousQuestion(testId, { questionId: currentQuestionId });

    if (statusCode.ok(response)) {
      const previousQuestion = await response.json();
      return { question: previousQuestion, hasError: false };
    }

    return { hasError: true };
  }
);

export const fetchTestResult = createAsyncThunk("fetchTestResult", async ({ testId }) => {
  const response = await testService.fetchTestResult(testId);

  if (statusCode.ok(response)) {
    const testResult = await response.json();
    return { testResult, hasError: false };
  }

  return { hasError: true };
});
