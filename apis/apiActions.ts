import IUser from "interfaces/user";
import {
  IForgetPasswordInput,
  ILoginInput,
  IRegisterInput,
} from "./inputInterfaces";
import { GetApi, PostApi } from "./interfaces";
import {
  IBasicResponse,
  ILoginResponse,
  IRegisterResponse,
} from "./responseInterfaces";

export const LOGIN: PostApi<ILoginResponse, string, ILoginInput> = new PostApi(
  "/auth/login"
);
export const REGISTER: PostApi<IRegisterResponse, string, IRegisterInput> =
  new PostApi("/user/register");
export const FORGET_PASSWORD: PostApi<
  IBasicResponse,
  string,
  IForgetPasswordInput
> = new PostApi("/user/forget-password");
export const PROFILE: GetApi<IUser, string, undefined> = new GetApi(
  "/user/profile"
);
