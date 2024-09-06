"use client";

import Image from "next/image";
import Img1 from "../../public/img-01.jpg";
import Img2 from "../../public/img-02.jpg";
import Img3 from "../../public/img-03.jpg";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

const LandingPageImageSlider = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper "
      >
        <SwiperSlide className=" md:h-full w-full">
          <Image
            src={Img1}
            alt="img"
            fill
            placeholder="blur"
            className="object-cover w-full  md:h-full"
            sizes="50vw"
            priority={true}
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide className=" md:h-full w-full">
          <Image
            src={Img2}
            alt="img"
            fill
            placeholder="blur"
            className="object-cover w-full  md:h-full"
            sizes="50vw"
            priority={true}
            quality={100}
          />
        </SwiperSlide>
        <SwiperSlide className=" md:h-full w-full">
          <Image
            src={Img3}
            alt="img"
            fill
            placeholder="blur"
            className="object-cover w-full  md:h-full"
            sizes="50vw"
            priority={true}
            quality={100}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default LandingPageImageSlider;
