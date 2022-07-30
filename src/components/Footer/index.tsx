import Link from "next/link";
import { FiLinkedin, FiGithub, FiTwitter } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-full bg-turquoise px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem]">
      <div className="w-full max-w-[1200px] mx-auto pt-[6.25rem] flex flex-col items-center">
        <Link href="/">
          <a className="font-bold text-[2rem] text-white">JSandoval.</a>
        </Link>
        <p className="w-full max-w-[450px] font-normal text-[0.875rem] text-white text-center mt-[0.625rem]">
          A simple, accessible and fast ecommerce template to sell your products safely and
          efficiently
        </p>
        <div className="flex items-center gap-5 mt-10">
          <a
            href="https://www.linkedin.com/in/jimmysandovalramirez/"
            target="_blank"
            rel="noreferrer"
          >
            <FiLinkedin className="stroke-black" size={24} />
          </a>
          <a href="https://github.com/jsandev" target="_blank" rel="noreferrer">
            <FiGithub className="stroke-black" size={24} />
          </a>
          <a href="https://twitter.com/iam_sam0610" target="_blank" rel="noreferrer">
            <FiTwitter className="stroke-black" size={24} />
          </a>
        </div>

        <div className="w-full max-[1200px] mx-auto border-1 border-white border-opacity-[0.6] border-dashed mt-[7.5rem]"></div>

        <h3 className="font-normal text-[0.875rem] text-white text-center my-[1.875rem]">
          Copyright © 2022 All Rights Reserved. Developed by{" "}
          <strong className="font-semibold">Jimmy Sandoval</strong>
        </h3>
      </div>
    </footer>
  );
};
