import axios, { AxiosRequestConfig, Method } from "axios";

// Initial base API reusable

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiRequestConfig extends AxiosRequestConfig {
  url: string;
  method?: Method;
  data?: any;
  params?: any;
}

export const baseApi = async <T = any>({
  url,
  method = "GET",
  data,
  params,
  ...restConfig
}: ApiRequestConfig): Promise<T> => {
  try {
    const response = await axiosInstance({
      url,
      method,
      data,
      params,
      ...restConfig,
    });
    return response.data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
};
