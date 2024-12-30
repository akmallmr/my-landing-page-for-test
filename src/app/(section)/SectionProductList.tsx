'use client';

import { Gap } from '@/components';
import { useProductContext } from '@/context/ProductContext';
import { ProductsProps } from '@/context/types';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SectionProductpst = () => {
  const { product } = useProductContext();

  return (
    <div className='py-10'>
      <h1 className='text-2xl text-center font-bold'>Featured Products</h1>
      <Gap height={25} />
      <div className='relative w-full p-3 overflow-hidden'>
        <motion.div
          className='flex whitespace-nowrap'
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <ul className='flex space-x-2'>
            {product?.slice(0, 10).map((item: ProductsProps) => (
              <div
                key={item.id}
                className='shadow-lg rounded-md w-32 flex flex-col justify-between'
              >
                <Image
                  alt='product-img'
                  src={item?.image || '/no-image.jpg'}
                  width={300}
                  height={50}
                  className='rounded-t-md w-52 h-24'
                />
                <div className='p-2'>
                  <li className='text-sm truncate'>{item?.name || 'Product'}</li>
                </div>
              </div>
            ))}
          </ul>
        </motion.div>
      </div>
      <div className='relative w-full p-3 overflow-hidden'>
        <motion.div
          className='flex whitespace-nowrap'
          animate={{ x: ['100%', '-100%'] }}
          transition={{
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          <ul className='flex space-x-2'>
            {product?.slice(11, 21).map((item: ProductsProps) => (
              <div
                key={item.id}
                className='shadow-lg rounded-md w-32 flex flex-col justify-between'
              >
                <Image
                  alt='product-img'
                  src={item?.image || '/placeholder-image.jpg'}
                  width={300}
                  height={50}
                  className='rounded-t-md w-52 h-24'
                />
                <div className='p-2'>
                  <li className='text-sm truncate'>{item?.name || 'Product'}</li>
                </div>
              </div>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionProductpst;
