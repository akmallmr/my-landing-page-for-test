import axios, { AxiosRequestConfig, Method } from "axios";

// Initial base API reusable

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiRequestConfig<D = unknown> extends AxiosRequestConfig {
  url: string;
  method?: Method;
  data?: D;
  params?: Record<string, unknown>;
}

export const baseApi = async <T = unknown, D = unknown>({
  url,
  method = "GET",
  data,
  params,
  ...restConfig
}: ApiRequestConfig<D>): Promise<T> => {
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
