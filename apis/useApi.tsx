import { useEffect, useState } from "react";
import Api from "./Api";
import {
  ApiAction,
  ApiHookResponse,
  DeleteApi,
  GetApi,
  PostApi,
  PutApi,
} from "./interfaces";

function useGetApi<TData, TError, TInput>(
  apiAction: GetApi<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): ApiHookResponse<TData, TError> {
  return useApi(apiAction, input, onResponse, onError);
}

function usePostApi<TData, TError, TInput>(
  apiAction: PostApi<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): ApiHookResponse<TData, TError> {
  return useApi(apiAction, input, onResponse, onError);
}

function usePutApi<TData, TError, TInput>(
  apiAction: PutApi<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): ApiHookResponse<TData, TError> {
  return useApi(apiAction, input, onResponse, onError);
}

function useDeleteApi<TData, TError, TInput>(
  apiAction: DeleteApi<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): ApiHookResponse<TData, TError> {
  return useApi(apiAction, input, onResponse, onError);
}

function useApi<TData, TError, TInput>(
  apiAction: ApiAction<TData, TError, TInput>,
  input?: TInput,
  onResponse?: (data: TData) => void,
  onError?: (error: TError) => void
): ApiHookResponse<TData, TError> {
  const [data, setData] = useState<TData>();
  const [error, setError] = useState<TError>();
  const [loading, setLoading] = useState(true);

  const fetch = () => {
    setLoading(true);

    Api.axiosInstance({
      url: apiAction.url,
      method: apiAction.method,
      data: apiAction.method !== "GET" && input,
      params: apiAction.method === "GET" && input,
    })
      .then((response) => {
        setLoading(false);
        onResponse && onResponse(response.data);
        setData(response.data);
      })
      .catch((error) => {
        setLoading(false);
        if (error?.response?.data) {
          onError && onError(error?.response?.data);
          setError(error?.response?.data);
        } else {
          onError && onError(error.message);
          setError(error.message);
        }
      });
  };

  useEffect(() => {
    fetch();
  }, []);

  return {
    data,
    error,
    loading,
    reload: fetch,
  };
}
