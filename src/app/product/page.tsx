'use client';

import { Gap } from '@/components';
import { useProductContext } from '@/context/ProductContext';
import { ProductsProps } from '@/context/types';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const PageProduct = () => {
  const { product } = useProductContext();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredItems, setFilteredItems] = useState<ProductsProps[] | undefined>(product);
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const openPreview = (image: string) => setPreviewImage(image);

  const closePreview = () => setPreviewImage(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);

    const filtered = product?.filter(
      (item) => item.name?.toLowerCase().includes(value.toLowerCase()) || !value
    );
    setFilteredItems(filtered);
  };

  useEffect(() => {
    setFilteredItems(product);
  }, [product]);

  return (
    <div className='laptop:mx-80'>
      <div className='p-8'>
        <input
          type='text'
          placeholder='Search by name...'
          value={searchTerm}
          onChange={handleSearch}
          className='p-2 border w-full border-gray-300 rounded mb-4'
        />
      </div>
      <div className='px-8'>
        <h1 className='text-xl font-bold'>{`Product Result (${filteredItems?.length})`}</h1>
      </div>
      <div className='w-full laptop:grid-cols-5 tablet:grid-cols-3 grid-cols-2 grid p-8 overflow-auto gap-8'>
        {filteredItems?.map((item: ProductsProps) => (
          <div
            key={item?.id}
            onClick={() => openPreview(item?.image || '')}
            className='flex flex-col justify-between rounded-t-lg overflow-hidden shadow-xl cursor-pointer'
          >
            <Image
              alt='image-product-list'
              src={item?.image || '/product.jpg'}
              className='w-full '
              width={500}
              height={50}
            />
            <div className='p-3'>
              <p className='text-xl font-bold line-clamp-1'>{`${item?.id}. ${
                item?.name || 'No Product Name'
              }`}</p>
              <Gap height={10} />
              <p className='line-clamp-2 text-justify text-xs text-gray-400'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
      {previewImage && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70'>
          <div className='relative'>
            <Image
              src={previewImage}
              alt='preview'
              width={800}
              height={800}
              className='rounded-lg'
            />
            <button
              onClick={closePreview}
              className='absolute top-2 right-2 text-black text-3xl font-bold'
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PageProduct;
