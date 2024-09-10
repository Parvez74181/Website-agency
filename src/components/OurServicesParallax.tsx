"use client";
import styles from "@/styles/Home.module.scss";
import { useRef } from "react";
import ServicesDetails from "@/types/servicesDetails";
import { Big_Shoulders_Inline_Text } from "next/font/google";
const big_Shoulders_inline_Text = Big_Shoulders_Inline_Text({ subsets: ["latin"] });
import { motion, useTransform, useScroll } from "framer-motion";
import { useAppContext } from "@/context/context";

const servicesDetails: ServicesDetails[] = [
  {
    title: "Custom Web Design & Development",
    content:
      "Creating a website that captivates, engages users, boosts conversions, and delivers measurable results requires a strategic and user-centric approach.",
  },
  {
    title: "e-Commerce Web Design & Development",
    content:
      "We excel in developing exceptional online shopping experiences designed to elevate revenue, foster brand loyalty, and optimize user engagement.",
  },
  {
    title: "Wordpress Web Design & Development",
    content:
      "Elevate revenue, foster brand loyalty, and optimize engagement with our exceptional WordPress web design and development services.",
  },
  {
    title: "Website Marketing & SEO",
    content:
      "We craft digital marketing initiatives, implement SEO strategies, and boost brand awareness to reach target audiences effectively.",
  },
  {
    title: "Video & Graphics Creation",
    content:
      "We are experts in the creation of compelling videos and captivating graphics to enhance your brand presence and leave a lasting impact on your audience.",
  },
  {
    title: "MS Office & Printing",
    content:
      "We specialize in enhancing MS Office & Printing experiences, focusing on revenue elevation, brand loyalty, and optimal user engagement.",
  },
];

const OurServicesParallax = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["0%", "-95%"]);

  const { setIsHovering, setOpacity } = useAppContext();
  return (
    <>
      {/* large screen */}
      <motion.div
        style={{ x }}
        ref={targetRef}
        className={`${styles["our-service-items-container"]} w-[800%] text-gray-100 xl:w-[150%] md:flex gap-4 sticky top-0 overflow-hidden z-[1000000!important] hidden `}
        onMouseEnter={() => {
          setIsHovering(true);
          setOpacity(20);
        }}
        onMouseLeave={() => {
          setOpacity(70);
          setIsHovering(false);
        }}
      >
        {servicesDetails.map((details: ServicesDetails, i: number) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
            key={i}
            className={`${styles["our-service-items"]} sticky top-0 w-[550px] p-5 text-white flex flex-col justify-end our-service-items`}
          >
            <div className="content flex gap-2 items-center">
              <span
                className={`${big_Shoulders_inline_Text.className} font-black text-[50px] md:text-[60px] xl:text-[80px]`}
              >
                {i < 9 ? `0${i + 1}` : i + 1}
              </span>
              <span className={`   font-semibold tracking-wider md:text-xl`}>{details.title}</span>
            </div>
            <p className="font-extralight tracking-wider">{details.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* small screen */}
      <div
        className={`${styles["our-service-items-container"]} w-full  text-gray-100 flex flex-col gap-4 sticky top-0 overflow-hidden  md:hidden`}
      >
        {servicesDetails.map((details: ServicesDetails, i: number) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
            key={i}
            className={`${styles["our-service-items"]} sticky top-0 w-[94%] p-5 text-white flex flex-col justify-end our-service-items`}
          >
            <div className="content flex gap-2 items-center">
              <span
                className={`${big_Shoulders_inline_Text.className} font-black text-[50px] md:text-[60px] xl:text-[80px]`}
              >
                {i < 9 ? `0${i + 1}` : i + 1}
              </span>
              <span className={`   font-semibold tracking-wider md:text-xl`}>{details.title}</span>
            </div>
            <p className="font-extralight tracking-wider">{details.content}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default OurServicesParallax;
