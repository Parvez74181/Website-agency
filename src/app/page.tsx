"use client";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import HeroSectionImgIntersection from "@/components/HeroSectionImgIntersection";
import { Big_Shoulders_Inline_Text, Big_Shoulders_Text, Big_Shoulders_Display } from "next/font/google";
import LandingPageImageSlider from "@/components/LandingPageImageSlider";
import Link from "next/link";
import OurServicesParallax from "@/components/OurServicesParallax";
import UserReviews from "@/components/UserReviews";
import ProjectOverviewSection from "@/components/ProjectOverviewSection";

const big_Shoulders_inline_Text = Big_Shoulders_Inline_Text({ subsets: ["latin"] });
const big_Shoulders_Text = Big_Shoulders_Text({ subsets: ["latin"] });
const big_Shoulders_Display = Big_Shoulders_Display({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {/* <!-- hero-section --> */}
      <section
        id="hero-section"
        className=" relative flex justify-center lg:flex-row flex-col items-center gap-20 lg:gap-2 md:h-[80vh] h-auto "
      >
        <div className="container mx-3 md:mx-auto ">
          <div className="flex flex-col ms-5 w-auto lg:w-[70%] ">
            <h1
              className={`${big_Shoulders_inline_Text.className} w-full font-big-shoulders-inline-text font-extrabold tracking-wide text-[50px] md:text-[60px] xl:text-[70px]  md:mt-20 `}
            >
              Empowering Your Digital Presence with Creative Excellence.
            </h1>

            <div className="w-[70%]">
              <p className="font-light">
                At Skill Edge, we invite you to unlock the potential of your brand through the synergy of creativity and
                technology.
              </p>
              <Link href="/contact" className="flex top-1 relative">
                <span className="border-b border-black font-medium"> Contact Us</span>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="master-artboard"
                    viewBox="0 0 1400 980"
                    x="0px"
                    y="0px"
                    // style={{enableBackground:"new 0 0 1400 980"}}
                    width="30px"
                    height="30px"
                  >
                    <rect
                      id="ee-background"
                      x="0"
                      y="0"
                      width="1400"
                      height="980"
                      style={{ fill: "transparent", fillOpacity: "1", pointerEvents: "none" }}
                    ></rect>
                    <g transform="matrix(0.3464824855327606, -0.34648334980010986, 0.34648334980010986, 0.3464824855327606, 7.036446094512996, 489.98074340820324)">
                      <path d="m1743.9 1064h-1487.9c-35.3 0-64-28.7-64-64s28.7-64 64-64h1487.9c35.3 0 64 28.7 64 64s-28.6 64-64 64z"></path>
                      <path d="m1072.4 1735.6c-16.4 0-32.8-6.2-45.3-18.7-25-25-25-65.5 0-90.5l626.4-626.4-626.4-626.4c-25-25-25-65.5 0-90.5s65.5-25 90.5 0l671.6 671.6c12 12 18.7 28.3 18.7 45.3s-6.7 33.3-18.7 45.3l-671.6 671.6c-12.5 12.5-28.9 18.7-45.2 18.7z"></path>
                    </g>
                  </svg>
                </span>
              </Link>
            </div>
          </div>

          {/* <!-- right side imgs --> */}
          <HeroSectionImgIntersection />
        </div>
      </section>

      {/* <!-- project-overview --> */}
      <section
        id="project-overview"
        className="px-5 py-10 mt-20 "
        style={{ backgroundColor: "var(--secondary-color)" }}
      >
        <div className="container md:mx-auto grid grid-cols-2 gap-4 md:grid-cols-4">
          <ProjectOverviewSection />
        </div>
      </section>

      {/* <!-- landing-page-image-slider-section --> */}
      <section id={styles["landing-page-image-slider-section"]} className="md:h-[65vh]">
        <LandingPageImageSlider />
      </section>

      {/* <!-- our-services --> */}
      <section id={styles["our-services"]} className="overflow-x-hidden bg-gray-900">
        <div className="container mx-3 md:mx-auto ">
          <h2
            data-animation="zoom-in-up"
            className={`${big_Shoulders_Display.className} text-center  font-black text-white text-[50px] md:text-[60px] xl:text-[100px`}
          >
            Our Services
          </h2>
          <p className="font-light text-gray-100 mx-auto text-center md:w-[380px] mt-2 mb-10">
            From Custom WordPress Sites To High Performance Web Service and other Services
          </p>

          <OurServicesParallax />
        </div>
      </section>

      {/* <!-- what-we-do --> */}
      <section id={styles["what-we-do"]} className="pt-8 pb-20 -mt-1 text-gray-100 bg-gray-900 overflow-x-hidden">
        <div className="container mx-3 w-full md:mx-auto">
          <h3 className="text-3xl border-b border-gray-700 inline-block md:left-1/2 relative md:-translate-x-1/2">
            What We Do
          </h3>

          {/* <!-- lists-container --> */}
          <div className={`${styles["lists-container"]} *:border-b *:border-gray-700`}>
            {/* <!-- research --> */}
            <div className={`${styles["list"]} flex items-center gap-x-5 md:gap-x-8 mt-10 md:mt-20 `}>
              <h3
                className={`${big_Shoulders_Text.className} font-bold tracking-wide text-[50px] md:text-[60px] xl:text-[80px]`}
              >
                01
              </h3>
              <p
                className={`${big_Shoulders_Text.className} font-medium tracking-wide text-[50px] md:text-[60px] xl:text-[80px] uppercase`}
              >
                research
              </p>

              <Image
                src="/research.webp"
                alt="research"
                width={500}
                height={500}
                className="size-72 object-cover rounded-full relative md:-right-32 lg:-right-56 hidden md:block"
              />
            </div>

            {/* <!-- discovery --> */}
            <div
              data-animation="slide-in-down"
              className={`${styles["list"]} flex items-center gap-x-5 md:gap-x-8 mt-10 md:mt-20 `}
            >
              <h3
                className={`${big_Shoulders_Text.className} font-bold tracking-wide text-[50px] md:text-[60px] xl:text-[80px]`}
              >
                02
              </h3>
              <p
                className={`${big_Shoulders_Text.className} font-medium tracking-wide text-[50px] md:text-[60px] xl:text-[80px] uppercase`}
              >
                discovery
              </p>
              <Image
                src="/discovery.webp"
                alt="discovery"
                width={500}
                height={500}
                className="size-72 object-cover rounded-full relative md:-right-32 lg:-right-56 hidden md:block"
              />
            </div>

            {/* <!-- content --> */}
            <div
              data-animation="slide-in-down"
              data-delay="150"
              className={`${styles["list"]} flex items-center gap-x-5 md:gap-x-8 mt-10 md:mt-20`}
            >
              <h3
                className={`${big_Shoulders_Text.className} font-bold tracking-wide text-[50px] md:text-[60px] xl:text-[80px]`}
              >
                03
              </h3>
              <p
                className={`${big_Shoulders_Text.className} font-medium tracking-wide text-[50px] md:text-[60px] xl:text-[80px] uppercase`}
              >
                content
              </p>
              <Image
                src="/content.webp"
                alt="content"
                width={500}
                height={500}
                className="size-72 object-cover rounded-full relative md:-right-32 lg:-right-56 hidden md:block"
              />
            </div>

            {/* <!-- design --> */}
            <div
              data-animation="slide-in-down"
              className={`${styles["list"]} flex items-center gap-x-5 md:gap-x-8 mt-10 md:mt-20`}
            >
              <h3
                className={`${big_Shoulders_Text.className} font-bold tracking-wide text-[50px] md:text-[60px] xl:text-[80px]`}
              >
                04
              </h3>
              <p
                className={`${big_Shoulders_Text.className} font-medium tracking-wide text-[50px] md:text-[60px] xl:text-[80px] uppercase`}
              >
                design
              </p>
              <Image
                src="/design.webp"
                alt="design"
                width={500}
                height={500}
                className="size-72 object-cover rounded-full relative md:-right-32 lg:-right-56 hidden md:block"
              />
            </div>

            {/* <!-- development --> */}
            <div
              data-animation="slide-in-down"
              data-delay="250"
              className={`${styles["list"]} flex items-center gap-x-5 md:gap-x-8 mt-10 md:mt-20`}
            >
              <h3
                className={`${big_Shoulders_Text.className} font-bold tracking-wide text-[50px] md:text-[60px] xl:text-[80px]`}
              >
                05
              </h3>
              <p
                className={`${big_Shoulders_Text.className} font-medium tracking-wide text-[50px] md:text-[60px] xl:text-[80px] uppercase`}
              >
                development
              </p>
              <Image
                src="/development.webp"
                alt="development"
                width={500}
                height={500}
                className="size-72 object-cover rounded-full relative md:-right-32 lg:-right-56 hidden md:block"
              />
            </div>

            {/* <!-- optimization --> */}
            <div
              data-animation="slide-in-down"
              data-delay="300"
              className={`${styles["list"]} flex items-center gap-x-5 md:gap-x-8 mt-10 md:mt-20`}
            >
              <h3
                className={`${big_Shoulders_Text.className} font-bold tracking-wide text-[50px] md:text-[60px] xl:text-[80px]`}
              >
                06
              </h3>
              <p
                className={`${big_Shoulders_Text.className} font-medium tracking-wide text-[50px] md:text-[60px] xl:text-[80px] uppercase`}
              >
                optimization
              </p>

              <Image
                src="/optimization.webp"
                alt="optimization"
                width={500}
                height={500}
                className="size-72 object-cover rounded-full relative md:-right-32 lg:-right-56 hidden md:block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- user reviews --> */}
      <section
        id={styles["user-reviews"]}
        className="h-[50vh] w-full -mt-1 flex justify-center items-center bg-gradient-to-b from-gray-900 to-blue-950 mb-5"
      >
        <div className="container mx-3 md:mx-auto  grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-100">
          <h3 className="text-3xl text-center inline-block left-1/2 relative -translate-x-1/2">
            Cheers to our clients, We couldn't do it without them!
          </h3>
          <UserReviews />
        </div>
      </section>
    </>
  );
}
