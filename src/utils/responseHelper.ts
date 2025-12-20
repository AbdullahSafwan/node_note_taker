import { Response } from 'express';

interface SuccessResponse<T = any> {
  success: true;
  data: T;
  message: string;
  error: null;
  meta?: {
    total?: number;
    page?: number;
    limit?: number;
    totalPages?: number;
    searchQuery?: string;
  };
}

interface ErrorResponse {
  success: false;
  data: null;
  message: string;
  error: Array<{
    code: number;
    messages: string[];
  }>;
}

export const sendSuccessResponse = <T = any>(
  res: Response,
  statusCode: number,
  message: string,
  payload?: T,
  meta?: SuccessResponse<T>['meta']
): Response<SuccessResponse<T>> => {
  return res.status(statusCode).json({
    success: true,
    data: payload || null,
    message,
    error: null,
    ...(meta && { meta }),
  });
};

export const sendErrorResponse = (
  res: Response,
  statusCode: number,
  message: string,
  error?: any
): Response<ErrorResponse> => {
  const errorMessage = error?.message || error || 'An error occurred';

  return res.status(statusCode).json({
    success: false,
    data: null,
    message,
    error: [
      {
        code: statusCode,
        messages: [message, errorMessage],
      },
    ],
  });
};
