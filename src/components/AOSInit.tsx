"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AOSInit = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-quad",
      duration: 500,
      once: false,
      //   offset: 0,
      delay: 200,
    });
  }, []);

  return null;
};
