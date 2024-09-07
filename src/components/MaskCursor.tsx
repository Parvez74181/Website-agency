"use client";
import { useAppContext } from "@/context/context";
import useMousePosition from "@/utils/useMousePosition";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MaskCursor = () => {
  const [showMask, setShowMask] = useState(false);
  const { isHovering, maskColor } = useAppContext();
  const { x, y }: { x: number | null; y: number | null } = useMousePosition();
  const size = isHovering ? 500 : 20;
  const cursorMiddlePointThresholdX = isHovering ? 40 : 10;
  const cursorMiddlePointThresholdY = isHovering ? 60 : 30;

  useEffect(() => {
    const width = innerWidth;

    width > 600 ? setShowMask(true) : setShowMask(false);
  }, []);

  return (
    <>
      {showMask && (
        <motion.div
          id="mask"
          className={classNames(
            ` z-[999]  overflow-hidden absolute rounded-full  pointer-events-none -translate-x-1/2 -translate-y-1/2 select-none size-5 bg-${maskColor} transition duration-300`,
            { "size-20 opacity-100 z-[999]": isHovering }
          )}
          style={{ transform: `translate(${x}px,${y}px)` }}
        ></motion.div>
      )}
    </>
  );
};

export default MaskCursor;
