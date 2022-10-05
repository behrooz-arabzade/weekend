import Api from "./Api";
import { ApiAction, DeleteApi, GetApi, PostApi, PutApi } from "./interfaces";

export function postApi<TData, TError, TInput>(
  apiAction: PostApi<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): void {
  callApi(apiAction, input, onResponse, onError);
}

export function getApi<TData, TError, TInput>(
  apiAction: GetApi<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): void {
  callApi(apiAction, input, onResponse, onError);
}

export function putApi<TData, TError, TInput>(
  apiAction: PutApi<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): void {
  callApi(apiAction, input, onResponse, onError);
}

export function deleteApi<TData, TError, TInput>(
  apiAction: DeleteApi<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): void {
  callApi(apiAction, input, onResponse, onError);
}

function callApi<TData, TError, TInput>(
  apiAction: ApiAction<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): void {
  Api.axiosInstance({
    url: apiAction.url,
    method: apiAction.method,
    data: apiAction.method !== "GET" && input,
    params: apiAction.method === "GET" && input,
  })
    .then((response) => {
      onResponse && onResponse(response.data);
    })
    .catch((error) => {
      if (error?.response?.data) {
        onError && onError(error?.response?.data);
      } else {
        onError && onError(error.message);
      }
    });
}
