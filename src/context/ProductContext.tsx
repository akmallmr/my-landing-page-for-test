'use client';

import { getImageItems, getProductItems } from '@/api/product';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { ImagesProps, ProductProps, ProductsContextProps, ProductsProps } from './types';

const ProductContext = createContext<ProductsContextProps | undefined>(undefined);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProduct] = useState<ProductsProps[] | undefined>(undefined);

  const handleGetProduct = async () => {
    try {
      const responseProduct = await getProductItems();
      const responseImage = await getImageItems();

      if (responseProduct || responseImage) {
        const combinedResponse = responseProduct?.data?.map((item: ProductProps) => {
          const image_url = responseImage?.data?.find((img: ImagesProps) =>
            img?.id?.includes(item?.id)
          );

          return {
            ...item,
            image: image_url ? image_url.image : null,
          };
        });

        setProduct(combinedResponse);
      }
    } catch {
      setProduct(undefined);
    }
  };

  useEffect(() => {
    handleGetProduct();
  }, []);

  return <ProductContext.Provider value={{ product }}>{children}</ProductContext.Provider>;
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export { ProductProvider, useProductContext };
