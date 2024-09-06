"use client";
import { useEffect, useRef } from "react";

const WebAnimations = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const animateElements = document.querySelectorAll("[data-animation]");

    const options = {
      root: null,
      rootMargin: "0px 0px -20% 0px",
    };

    const intersectionCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        const targetElement = entry.target as HTMLElement;

        const delay = parseInt(targetElement.getAttribute("data-delay")!) || 0;

        if (entry.isIntersecting) {
          setTimeout(() => {
            targetElement.classList.add("active");
          }, delay);
        }
        // Optionally add code to remove "active" on un-intersection
        else {
          targetElement.classList.remove("active");
        }
      });
    };

    const observer = new IntersectionObserver(intersectionCallback, options);
    observerRef.current = observer;

    animateElements.forEach((element) => {
      observer.observe(element);
    });

    // Cleanup function on unmount (optional)
    // return () => {
    //   if (observerRef.current) {
    //     observerRef.current.disconnect();
    //   }
    // };
  });
  return <></>;
};

export default WebAnimations;
