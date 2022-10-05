export class ApiAction<TData, TError, TInput> {
  constructor(public url: string, public method: string) {}
}
export class GetApi<TData, TError, TInput> extends ApiAction<
  TData,
  TError,
  TInput
> {
  constructor(url: string) {
    super(url, "GET");
  }
}
export class PostApi<TData, TError, TInput> extends ApiAction<
  TData,
  TError,
  TInput
> {
  constructor(url: string) {
    super(url, "POST");
  }
}
export class PutApi<TData, TError, TInput> extends ApiAction<
  TData,
  TError,
  TInput
> {
  constructor(url: string) {
    super(url, "PUT");
  }
}
export class DeleteApi<TData, TError, TInput> extends ApiAction<
  TData,
  TError,
  TInput
> {
  constructor(url: string) {
    super(url, "DELETE");
  }
}

export interface ApiHookResponse<TData, TError> {
  data?: TData;
  loading: boolean;
  error?: TError;
  reload: () => void;
}
