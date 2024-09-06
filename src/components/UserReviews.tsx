"use clients";

import Image from "next/image";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import User1 from "../../public/user-1.jpg";

const UserReviews = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        modules={[Autoplay, FreeMode, Navigation, Pagination]}
        className="mySwiper z-0"
      >
        <SwiperSlide className="min-h-[30vh!important]">
          <div
            className="*:text-gray-100 *:font-extralight p-5 rounded-md"
            style={{ background: `rgba(255, 255, 255, 0.05)`, backdropFilter: `blur(20px)` }}
          >
            <p className="text-xl font-extralight line-clamp-6">
              "GRITOWN is a fantastic team to work with. Their skills, experience and attention to detail are
              exceptional. They quickly deliver on our projects within our tight deadlines and communication is always
              clear and efficient. We look forward to continuing to work with them in the future. "
            </p>
            <div className="flex gap-2 justify-between items-center mt-5">
              <div className="w-[10%]">
                <Image
                  src={User1}
                  alt="user"
                  width={50}
                  height={50}
                  loading="lazy"
                  placeholder="blur"
                  sizes="50vw"
                  className="size-14 rounded-full object-cover"
                />
              </div>
              <div className="w-[90%]">
                <h4 className="font-normal">Kate O'Neil</h4>
                <h6 className="opacity-70 text-sm">VP Partnership, Skills Councils of Dhaka</h6>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default UserReviews;
