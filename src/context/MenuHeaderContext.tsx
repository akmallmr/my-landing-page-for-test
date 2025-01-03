"use client";

import React, { createContext, ReactNode, useContext } from "react";
import { MenuHeaderProps } from "./types";

const MenuHeaderContext = createContext<MenuHeaderProps | undefined>(undefined);

const MenuHeaderProvider = ({ children }: { children: ReactNode }) => {
  const menuHeader = [
    { key: "home", label: "Home", path: "/" },
    { key: "product", label: "Product", path: "/product" },
  ];
  return (
    <MenuHeaderContext.Provider value={{ menuHeader }}>
      {children}
    </MenuHeaderContext.Provider>
  );
};

const useMenuHeaderContext = () => {
  const context = useContext(MenuHeaderContext);
  if (!context) {
    throw new Error(
      "useMenuHeaderContext must be used within a MenuHeaderProvider"
    );
  }
  return context;
};

export { MenuHeaderProvider, useMenuHeaderContext };
