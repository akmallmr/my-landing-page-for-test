import { baseApi } from "../baseApi";
import { ImagePromiseProps, ProductPromiseProps } from "./types";

export const getProductItems = async (): Promise<ProductPromiseProps> => {
  const response = await baseApi<ProductPromiseProps>({
    url: `/product.json`,
  });

  return response;
};

export const getImageItems = async (): Promise<ImagePromiseProps> => {
  const response = await baseApi<ImagePromiseProps>({
    url: `/image.json`,
  });

  return response;
};
