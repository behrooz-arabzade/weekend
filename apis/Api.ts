import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class ApiClass {
  public axiosInstance: AxiosInstance;

  constructor(baseUrl: string) {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      timeout: 5000,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    this.axiosInstance.interceptors.request.use(this.onFulfilled);
  }

  onFulfilled = (config: AxiosRequestConfig): AxiosRequestConfig => {
    config.headers!["Authorization"] = `Bearer ${localStorage.getItem(
      "token"
    )}`;

    return config;
  };
}

const Api = new ApiClass("http://test.ir");

export default Api;
