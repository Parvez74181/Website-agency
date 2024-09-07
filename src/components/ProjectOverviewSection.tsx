"use client";
import CountUp from "react-countup";
import Image from "next/image";

const ProjectOverviewSection = () => {
  return (
    <>
      {/* <!-- project complete --> */}
      <div className="flex gap-2 justify-center items-center border-r border-black text-white">
        <Image
          src="/project-complete-icon.svg"
          alt="project-complete-icon"
          height={50}
          width={50}
          className="invert"
          data-aos="zoom-in-right"
          data-aos-delay="400"
        />
        <div className="flex flex-col justify-center md:*:text-[18px] text-white">
          <span className="font-semibold" data-aos="fade-down" data-aos-delay="400">
            <CountUp end={800} suffix="+" />
          </span>
          <span data-aos="fade-up" data-aos-delay="400">
            Clients
          </span>
        </div>
      </div>
      {/* <!-- team support --> */}
      <div className="flex gap-2 justify-center items-center md:border-r border-black text-white">
        <Image
          src="/team-support-icon.svg"
          alt="team-support-icon"
          height={50}
          width={50}
          className="invert"
          data-aos="zoom-in-right"
          data-aos-delay="600"
        />
        <div className="flex flex-col justify-center md:*:text-[18px] text-white">
          <span className="font-semibold" data-aos="fade-down" data-aos-delay="600">
            <CountUp end={24} suffix="/" />

            <CountUp end={7} />
          </span>
          <span data-aos="fade-up" data-aos-delay="600">
            Support
          </span>
        </div>
      </div>
      {/* <!-- lifetime support --> */}
      <div className="flex gap-2 justify-center items-center border-r border-black text-white">
        <Image
          src="/lifetime-support-icon.svg"
          alt="lifetime-support-icon"
          height={50}
          width={50}
          className="invert"
          data-aos="zoom-in-right"
          data-aos-delay="800"
        />
        <div className="flex flex-col justify-center md:*:text-[18px] text-white">
          <span className="font-semibold" data-aos="fade-down" data-aos-delay="800">
            Free
          </span>
          <span data-aos="fade-up" data-aos-delay="800">
            Lifetime <br />
            Updates
          </span>
        </div>
      </div>
      {/* <!-- ongoing project --> */}
      <div className="flex gap-2 justify-center items-center text-white">
        <Image
          src="/project-ongoing-icon.svg"
          alt="project-ongoing-icon"
          height={50}
          width={50}
          className="invert"
          data-aos="zoom-in-right"
          data-aos-delay="1000"
        />
        <div className="flex flex-col justify-center md:*:text-[18px]">
          <span className="font-semibold" data-aos="fade-down" data-aos-delay="1000">
            <CountUp end={50} suffix="+" />
          </span>
          <span data-aos="fade-up" data-aos-delay="1000">
            Ongoing <br />
            Projects
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectOverviewSection;
