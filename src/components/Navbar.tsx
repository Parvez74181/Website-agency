"use client";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "@/types/navLinks";
import styles from "@/styles/Navbar.module.scss";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useAppContext } from "@/context/context";

const navLinks: NavLinks[] = [
  { name: "Home", path: "" },
  { name: "Services", path: "services" },
  { name: "Portfolio", path: "portfolio" },
  { name: "Blog", path: "blog" },
  { name: "Career", path: "career" },
  { name: "About", path: "about" },
  { name: "Contact", path: "contact" },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const { setMaskColor, setIsHovering, setOpacity } = useAppContext();
  return (
    <>
      <nav
        className="xl:px-28 lg:px-20 px-5 my-5 md:mx-auto flex justify-between items-center"
        onMouseEnter={() => {
          setMaskColor("black");
        }}
        onMouseLeave={() => {
          setMaskColor("white");
        }}
      >
        <div className="logo w-2/5">
          <Link href="/" data-aos="fade-down">
            <Image src="/logo.svg" alt="logo" width={250} height={50} />
          </Link>
        </div>

        <ul className="hidden lg:flex justify-between items-center w-3/5 *:text-xl">
          {navLinks.map((links: NavLinks, i: number) => (
            <li
              key={i}
              data-aos="fade-down"
              data-aos-delay={`${(i + 1) * 100}`}
              className={`${styles["nav-links"]} ${pathname == "/" + links.path && styles.active}`}
              onMouseEnter={() => {
                setIsHovering(true);
                setOpacity(30);
              }}
              onMouseLeave={() => {
                setIsHovering(false);
                setOpacity(70);
              }}
            >
              <Link href={`/${links.path}`}>{links.name}</Link>
            </li>
          ))}
        </ul>

        <div
          className={`${styles["hamburger"]} ${
            isActive ? styles.active : ""
          } lg:hidden size-9 flex justify-center items-end flex-col relative cursor-pointer`}
          onClick={() => setIsActive(!isActive)}
        >
          <span className="w-full block my-1 h-1 rounded-full bg-black"></span>
          <span className="w-[80%] block my-1 h-1 rounded-full bg-black"></span>
          <span className="w-full block my-1 h-1 rounded-full bg-black"></span>
        </div>
      </nav>

      {/* <!-- mobile menu --> */}

      <div className={`${styles["menu-layer"]} ${isActive ? styles.active : ""} h-full fixed top-0 right-0`}></div>
      <ul
        className={`${styles["mobile-menu"]} ${
          isActive ? styles.active : ""
        } flex left-0 w-full h-full lg:hidden fixed top-0 flex-col gap-10 *:text-3xl justify-center items-center font-big-shoulders-text tracking-widest *:outline-2 *:outline-red-500`}
      >
        {navLinks.map((links: NavLinks, i: number) => (
          <li
            key={i}
            data-aos="fade-down"
            data-aos-delay={`${(i + 1) * 100}`}
            className={`${styles["nav-links"]} ${pathname == "/" + links.path && styles.active}`}
            onClick={() => setIsActive(!isActive)}
          >
            <Link href={`/${links.path}`}>{links.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Navbar;
