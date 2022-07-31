import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { Benefits } from "components/Benefits";
import { Layout } from "components/Layout";

import { FiArrowRight } from "react-icons/fi";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Fast Ecommerce Template</title>
      </Head>
      <Layout>
        <section className="w-full px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem] pt-[1.25rem] pb-[5rem]">
          <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 gap-5 xl:grid-cols-[1fr_390px]">
            <div className="w-full bg-gray50 rounded-[1rem] flex flex-col items-center justify-between gap-5 px-[0.5rem] py-[1rem] overflow-hidden xs:px-[2.1875rem] xs:py-[1.875rem] xs:flex-row lg:px-[3.75rem]">
              <div className="w-full flex flex-col items-center xs:items-start">
                <h3 className="font-normal text-[1.125rem] text-black mb-[10px]">Most Popular</h3>
                <h1 className="font-bold text-[2rem] text-center leading-[2rem] text-turquoise xs:text-left md:leading-[2.5rem] lg:leading-[3.125rem] md:text-[2.5rem] lg:text-[3rem]">
                  Headphones
                  <br />
                  <span className="font-extrabold text-black">SONY</span>
                </h1>
                <div className="flex items-center gap-[0.625rem] mt-5 mb-6">
                  <sup className="font-normal text-[1.125rem] text-black">from</sup>
                  <h3 className="font-bold text-[1.7rem] text-black lg:text-[2.5rem]">$199.99</h3>
                </div>
                <Link href="/">
                  <a className="h-[40px] flex items-center justify-center bg-turquoise text-[0.875rem] text-white rounded-[1.875rem] px-[1.5625rem]">
                    Shop now
                    <FiArrowRight size={24} />
                  </a>
                </Link>
              </div>
              <Image
                width={350}
                height={350}
                src={require("../assets/images/sony-main.jpg")}
                alt=""
              />
            </div>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-5">
              <Link href="/">
                <a className="w-full xs:h-[120px] flex flex-col items-center justify-between bg-turquoise px-4 rounded-[1rem] gap-2 py-2 xs:flex-row">
                  <div className="flex flex-col items-center xs:items-start">
                    <h3 className="font-normal text-[0.875rem] text-white60">Top Product</h3>
                    <h1 className="font-bold text-[0.875rem] text-white mb-[1rem] whitespace-nowrap xs:text-[1rem]">
                      Webcam HD C270
                    </h1>
                    <p className="font-medium text-[1.125rem] text-white">$24.99</p>
                  </div>
                  <Image
                    width={100}
                    height={100}
                    src={require("../assets/images/camera-logitech-main.webp")}
                    alt="Webcam HD C270"
                  />
                </a>
              </Link>
              <Link href="/">
                <a className="w-full xs:h-[120px] flex flex-col items-center justify-between bg-turquoise10 px-4 rounded-[1rem] gap-2 py-2 overflow-hidden xs:flex-row">
                  <div className="order-2 xs:order-none">
                    <Image
                      width={100}
                      height={100}
                      src={require("../assets/images/redmi-pro-main.webp")}
                      alt="Xaomi Redmi Buds 3"
                    />
                  </div>
                  <div className="flex flex-col items-center xs:items-end">
                    <h3 className="font-normal text-[0.875rem] text-gray text-right">On sale</h3>
                    <h1 className="font-bold text-[1rem] text-dark text-right whitespace-nowrap">
                      Xaomi Redmi Buds 3
                    </h1>
                    <p className="font-normal text-[0.875rem] text-dark text-right mt-[1rem]">
                      Discover now
                    </p>
                  </div>
                </a>
              </Link>
              <Link href="/">
                <a className="w-full xs:h-[120px] flex flex-col items-center justify-between bg-orange px-4 rounded-[1rem] gap-2 py-2 overflow-hidden xs:flex-row">
                  <div className="flex flex-col items-center xs:items-start">
                    <h3 className="font-normal text-[0.875rem] text-white60">New Arrivals</h3>
                    <h1 className="font-bold text-[1rem] text-white mb-[1rem] whitespace-nowrap">
                      Mi Smart Band 6
                    </h1>
                    <p className="font-normal text-[0.75rem] text-white">Shop now</p>
                  </div>
                  <Image
                    width={100}
                    height={100}
                    src={require("../assets/images/redmi-watch-main.png")}
                    alt="Mi Smart Band 6"
                  />
                </a>
              </Link>
            </div>
          </div>
        </section>
        <Benefits />
      </Layout>
    </>
  );
};

export default Home;
