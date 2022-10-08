export interface ILoginResponse {
  access_token: string;
}

export interface IBasicResponse {
  success: string;
  message: string;
}

export interface IRegisterResponse extends IBasicResponse {
  username: string;
}
