import axios, { AxiosInstance } from "axios";

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
  }
}

const Api = new ApiClass("http://test.ir");

export default Api;
