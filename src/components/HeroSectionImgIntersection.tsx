"use client";

import Image from "next/image";
import { useEffect } from "react";

const HeroSectionImgIntersection = () => {
  useEffect(() => {
    const heroSection = document.querySelector("#hero-section") as HTMLDivElement;
    const heroSectionImgs = document.querySelectorAll(".hero-section-imgs img") as NodeListOf<HTMLImageElement>;

    // hero Section img animation
    heroSection.addEventListener("mousemove", (e) => {
      const clientX = e.clientX;
      const clientY = e.clientY;

      heroSectionImgs[1].style.transform = `translate(${clientX / 10}px,${clientY / 10}px)`;

      heroSectionImgs[2].style.transform = `translate(${clientX / 15}px,-${clientY / 15}px)`;

      heroSectionImgs[3].style.transform = `translate(${clientX / 20}px,${clientY / 20}px)`;

      heroSectionImgs[4].style.transform = `translate(-${clientX / 25}px,-${clientY / 25}px)`;

      heroSectionImgs[5].style.transform = `translate(-${clientX / 40}px,${clientY / 40}px)`;

      heroSectionImgs[0].style.transform = `translate(${clientX / 35}px,${clientY / 35}px)`;
    });
  }, []);

  return (
    <>
      <div
        data-animation="slide-in-right"
        data-delay="300"
        className="w-full hidden md:w-[30%] hero-section-imgs md:flex justify-center items-center relative"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <Image src="/hero-section-circle-strips.svg" alt="hero-section-circle-strips " height={200} width={200} />
        <Image
          src="/hero-section-circle-fill.svg"
          alt="hero-section-circle-fill "
          className="absolute -top-10"
          height={50}
          width={50}
        />
        <Image
          src="/hero-section-line.svg"
          alt="hero-section-line"
          className="absolute top-0 rotate-[10deg]"
          height={50}
          width={250}
        />
        <Image
          src="/hero-section-line.svg"
          alt="hero-section-line"
          className="absolute bottom-0 rotate-[-20deg]"
          height={50}
          width={250}
        />
        <Image
          src="/hero-section-squere.svg"
          alt="hero-section-squere"
          className="absolute -bottom-10 right-52"
          height={50}
          width={50}
        />
        <Image
          src="/hero-section-star-fill.svg"
          alt="hero-section-star-fill"
          className="absolute -bottom-20 right-32"
          height={50}
          width={50}
        />
      </div>
    </>
  );
};

export default HeroSectionImgIntersection;
