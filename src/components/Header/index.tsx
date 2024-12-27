"use client";

import { useMenuHeaderContext } from "@/context/MenuHeaderContext";
import { useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const router = useRouter();
  const { menuHeader } = useMenuHeaderContext();
  return (
    <div className="sticky top-0 p-4 w-full flex flex-row gap-10 bg-gradient-to-r from-rose-400 via-pink-500 to-red-500 rounded-md shadow-lg overflow-hidden">
      <div>
        <p>Logo</p>
      </div>
      <div className="flex flex-row gap-8 text-white">
        {menuHeader.map((item) => (
          <div
            key={item?.key}
            onClick={() => router?.push(item?.path)}
            className="cursor-pointer"
          >
            <p>{item?.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
