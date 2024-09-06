"use client";
import useMousePosition from "@/utils/useMousePosition";
import styles from "@/styles/MaskCursor.module.scss";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const MaskCursor = () => {
  const [showMask, setShowMask] = useState(false);
  const { x, y }: { x: number | null; y: number | null } = useMousePosition();
  const size = 20;
  const cursorMiddlePointThreshold = 18;
  useEffect(() => {
    const width = innerWidth;

    if (width > 600) {
      setShowMask(true);
    } else {
      setShowMask(false);
    }
  }, []);

  return (
    <>
      {showMask && (
        <motion.div
          className={`${styles.mask} size-5 overflow-hidden`}
          animate={{
            x: `${x! - size / 2}px`,
            y: `${y! - size / 2 - cursorMiddlePointThreshold}px`,
            size: `${size}px`,
          }}
          transition={{ type: "just", ease: "linear", duration: 0.2 }}
        ></motion.div>
      )}
    </>
  );
};

export default MaskCursor;
