import { AxiosResponse } from 'axios';

export function handleAPIError(error: any): string {
  // API 에러 처리 로직
  const errorMessage = error;
  return errorMessage;
}

export function handleAPIResponse<T>(response: AxiosResponse<T>): T {
  // API 응답 처리 로직
  return response.data;
}
