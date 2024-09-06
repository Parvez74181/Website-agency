"use client";
import CountUp from "react-countup";
import Image from "next/image";

const ProjectOverviewSection = () => {
  return (
    <>
      {/* <!-- project complete --> */}
      <div className="flex gap-2 justify-center items-center border-r border-black ">
        <Image
          src="/project-complete-icon.svg"
          alt="project-complete-icon"
          height={50}
          width={50}
          data-animation="zoom-in-up"
        />
        <div className="flex flex-col justify-center md:*:text-[18px]">
          <span className="font-semibold">
            <CountUp end={800} />+
          </span>
          <span>Clients</span>
        </div>
      </div>
      {/* <!-- team support --> */}
      <div className="flex gap-2 justify-center items-center md:border-r border-black">
        <Image
          src="/team-support-icon.svg"
          alt="team-support-icon"
          height={50}
          width={50}
          data-animation="zoom-in-up"
        />
        <div className="flex flex-col justify-center md:*:text-[18px]">
          <span className="font-semibold">
            <CountUp end={24} />
            /
            <CountUp end={7} />
          </span>
          <span>Support</span>
        </div>
      </div>
      {/* <!-- lifetime support --> */}
      <div className="flex gap-2 justify-center items-center border-r border-black">
        <Image
          src="/lifetime-support-icon.svg"
          alt="lifetime-support-icon"
          height={50}
          width={50}
          data-animation="zoom-in-up"
        />
        <div className="flex flex-col justify-center md:*:text-[18px]">
          <span className="font-semibold">Free</span>
          <span>
            Lifetime <br />
            Updates
          </span>
        </div>
      </div>
      {/* <!-- ongoing project --> */}
      <div className="flex gap-2 justify-center items-center">
        <Image
          src="/project-ongoing-icon.svg"
          alt="project-ongoing-icon"
          height={50}
          width={50}
          data-animation="zoom-in-up"
        />
        <div className="flex flex-col justify-center md:*:text-[18px]">
          <span className="font-semibold" data-animation="slide-in-right">
            <CountUp end={50} />+
          </span>
          <span data-animation="slide-in-right">
            Ongoing <br />
            Projects
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectOverviewSection;
