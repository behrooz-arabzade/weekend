import AxiosWrapper from "services/base/Api";
import {
  IForgetPasswordInput,
  ILoginInput,
  IRegisterInput,
} from "./interfaces/inputInterfaces";
import {
  IBasicResponse,
  ILoginResponse,
  IRegisterResponse,
} from "./interfaces/responseInterfaces";

const usersApis = {
  login: (data: ILoginInput) =>
    AxiosWrapper.post("/auth/login", data) as Promise<ILoginResponse>,
  register: (data: IRegisterInput) =>
    AxiosWrapper.post("/users/register", data) as Promise<IRegisterResponse>,
  forgetPassword: (data: IForgetPasswordInput) =>
    AxiosWrapper.post("/users/register", data) as Promise<IBasicResponse>,
};

export default usersApis;
