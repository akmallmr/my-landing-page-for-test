import { useProductContext } from "@/context/ProductContext";
import { motion } from "framer-motion";

const SectionProductpst = () => {
  const { product } = useProductContext();
  console.log("product", product);

  return (
    <div className="py-10">
      <h1 className="text-2xl text-center font-bold">Featured Products</h1>
      <div className="relative w-full h-16 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["100%", "-100%"] }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <ul className="flex space-x-12">
            {product?.map((item: any) => (
              <li className="text-lg font-semibold">
                {item?.name || "Product"}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SectionProductpst;
