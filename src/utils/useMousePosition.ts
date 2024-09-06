"use client";
import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState<{ x: number | null; y: number | null }>({ x: null, y: null });

  const updateMousePosition = (e: { pageX: number; pageY: number }) => {
    setMousePosition({ x: e.pageX, y: e.pageY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
