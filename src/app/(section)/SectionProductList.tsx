"use client";

import { Gap } from "@/components";
import { useProductContext } from "@/context/ProductContext";
import { ProductsProps } from "@/context/types";
import { motion } from "framer-motion";
import Image from "next/image";

const SectionProductpst = () => {
  const { product } = useProductContext();

  return (
    <div className="py-10">
      <h1 className="text-2xl text-center font-bold">
        Featured Products{"     "}
      </h1>
      <Gap height={25} />
      <div className="relative w-full p-5 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["100%", "-150%"] }}
          transition={{
            duration: 100,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <ul className="flex space-x-12">
            {product?.slice(0, 11).map((item: ProductsProps) => (
              <div
                key={item.id}
                className="shadow-lg rounded-md w-52 flex flex-col justify-between"
              >
                <Image
                  alt="product-img"
                  src={item?.image || "/placeholder-image.jpg"}
                  width={300}
                  height={50}
                  objectFit="cover"
                  className="rounded-t-md"
                />
                <div className="p-2">
                  <li className="text-lg font-semibold truncate">
                    {item?.name || "Product"}
                  </li>
                </div>
              </div>
            ))}
          </ul>
        </motion.div>
      </div>
      <Gap height={50} />
      <div className="relative w-full p-5 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["-117%", "150%"] }}
          transition={{
            duration: 100,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <ul className="flex space-x-12">
            {product?.slice(12, 21).map((item: ProductsProps) => (
              <div
                key={item.id}
                className="shadow-lg rounded-md w-52 flex flex-col justify-between"
              >
                <Image
                  alt="product-img"
                  src={item?.image || "/placeholder-image.jpg"}
                  width={300}
                  height={100}
                  objectFit="cover"
                  className="rounded-t-md"
                />
                <div className="p-2">
                  <li className="text-lg font-semibold truncate">
                    {item?.name || "Product"}
                  </li>
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
