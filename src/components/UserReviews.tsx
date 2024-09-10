"use clients";

import Image from "next/image";
import { Autoplay, FreeMode, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/pagination";
import "swiper/css/navigation";

import User1 from "../../public/user-1.jpg";

const UserReviews = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={true}
        loop={true}
        grabCursor={true}
        spaceBetween={30}
        slidesPerView={1}
        modules={[Autoplay, FreeMode, Navigation, Pagination]}
        className="user-reviews-swiper md:w-[50%!important] w-[94%!important] mx-auto h-[35vh!important]"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        {Array.from({ length: 6 }).map((_, i) => (
          <SwiperSlide key={i} className="min-h-[30vh!important]">
            <div
              className="*:text-gray-100 *:font-extralight p-5 rounded-md"
              style={{ background: `rgba(255, 255, 255, 0.05)`, backdropFilter: `blur(20px)` }}
            >
              <p className="text-xl font-extralight line-clamp-5uuuu">
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
        ))}
      </Swiper>
    </>
  );
};

export default UserReviews;
