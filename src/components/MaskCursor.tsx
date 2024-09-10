"use client";
import { useAppContext } from "@/context/context";
import useMousePosition from "@/utils/useMousePosition";
import classNames from "classnames";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MaskCursor = () => {
  const [showMask, setShowMask] = useState(false);
  const { isHovering, maskColor, opacity, size } = useAppContext();
  const { x, y }: { x: number | null; y: number | null } = useMousePosition();
  const cursorSize = isHovering ? size : 20;
  const cursorMiddlePointThresholdX = isHovering ? (size > 100 ? 85 : 55) : 18;
  useEffect(() => {
    const width = innerWidth;
    width > 600 ? setShowMask(true) : setShowMask(false);
  }, []);

  return (
    <>
      {showMask && (
        <motion.div
          animate={{
            right: `${x! - cursorMiddlePointThresholdX}px`,
            top: `${y}px`,

            backgroundColor: maskColor,
            height: `${cursorSize}px`,
            width: `${cursorSize}px`,
            opacity: `${opacity / 100}`,
          }}
          transition={{ type: "tween", ease: "backOut", duration: 0.2 }}
          id="mask"
          className={classNames(
            ` z-[999]  overflow-hidden absolute rounded-full opacity-70 pointer-events-none 2 -translate-y-1/2 select-none size-5 transition duration-500`,
            { "size-28 opacity-90 z-[0]": isHovering }
          )}
        ></motion.div>
      )}
    </>
  );
};

export default MaskCursor;
