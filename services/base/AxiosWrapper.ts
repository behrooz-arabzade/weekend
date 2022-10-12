import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

class AxiosWrapperClass {
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

  get = async (url: string, params: object) => {
    try {
      const response = await this.axiosInstance.get(url, {
        params,
      });

      return response.data;
    } catch (error: any) {
      Promise.reject(error);
    }
  };

  post = async (url: string, data: object) => {
    try {
      const response = await this.axiosInstance.post(url, {
        data,
      });

      return response.data;
    } catch (error: any) {
      Promise.reject(error);
    }
  };

  put = async (url: string, data: object) => {
    try {
      const response = await this.axiosInstance.put(url, {
        data,
      });

      return response.data;
    } catch (error: any) {
      Promise.reject(error);
    }
  };

  delete = async (url: string, data: object) => {
    try {
      const response = await this.axiosInstance.delete(url, {
        data,
      });

      return response.data;
    } catch (error: any) {
      Promise.reject(error);
    }
  };
}

const AxiosWrapper = new AxiosWrapperClass("http://test.ir");

export default AxiosWrapper;
