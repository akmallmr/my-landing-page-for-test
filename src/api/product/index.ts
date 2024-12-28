import { baseApi } from "../baseApi";

export const getProductItems = async (): Promise<any> => {
  const response = await baseApi({
    url: `/product.json`,
  });

  return response;
};

export const getImageItems = async (): Promise<any> => {
  const response = await baseApi({
    url: `/image.json`,
  });

  return response;
};
