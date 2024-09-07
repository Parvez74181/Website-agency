"use client";

import { AppContextValues } from "@/types/appContext";
import { createContext, useState, useContext } from "react";

const AppContext = createContext<AppContextValues | null>(null);

export const AppWrapper = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isHovering, setIsHovering] = useState(false);
  const [maskColor, setMaskColor] = useState("white");
  return (
    <AppContext.Provider value={{ setIsHovering, isHovering, maskColor, setMaskColor }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext) as AppContextValues;
};
