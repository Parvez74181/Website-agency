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
  const [opacity, setOpacity] = useState<10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100>(70);
  const [size, setSize] = useState(100);
  return (
    <AppContext.Provider
      value={{ setIsHovering, isHovering, maskColor, setMaskColor, setOpacity, opacity, setSize, size }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext) as AppContextValues;
};
