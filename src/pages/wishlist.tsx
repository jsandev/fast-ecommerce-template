import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { Layout } from "components/Layout";
import { Benefits } from "components/Benefits";

import { FiChevronRight, FiShoppingCart, FiTrash } from "react-icons/fi";

const Wishlist: NextPage = () => {
  return (
    <>
      <Head>
        <title>Wishlist | Fast Ecommerce Template</title>
      </Head>
      <Layout>
        <section className="w-full py-[0.875rem] px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem]">
          <div className="w-full h-full max-w-[1200px] mx-auto flex flex-wrap items-center gap-[0.4375rem]">
            <Link href="/">
              <a className="font-normal text-[0.875rem] text-gray hover:text-turquoise">Home</a>
            </Link>
            <FiChevronRight size={16} className="stroke-gray" />
            <h3 className="font-normal text-[0.875rem] text-gray">Wishlist</h3>
          </div>
        </section>
        <section className="w-full px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem] pb-[6.25rem]">
          <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
            <h1 className="font-medium text-[1.375rem] text-gray mb-6 md:mb-[2.5rem]">Wishlist</h1>
            <div className="w-full flex flex-col">
              <div className="hidden w-full md:grid grid-cols-[2.5fr_1fr_1fr_1fr] pb-[0.875rem] border-b-1 border-gray50">
                <div className="font-medium text-[0.875rem] text-gray text-center">Product</div>
                <div className="font-medium text-[0.875rem] text-gray text-center">Price</div>
                <div className="font-medium text-[0.875rem] text-gray text-center">Status</div>
                <div className="font-medium text-[0.875rem] text-gray text-center">Actions</div>
              </div>
              <div className="w-full flex flex-col items-center gap-10 md:gap-6 md:pt-5">
                {[...Array(5).keys()].map((_, i) => (
                  <div
                    key={i}
                    className="w-full max-w-[350px] grid grid-cols-1 md:grid-cols-[2.5fr_1fr_1fr_1fr] justify-items-center items-center md:max-w-none"
                  >
                    <div className="flex flex-col md:flex-row items-center gap-4">
                      <Link href="/some-product">
                        <a className="md:w-[106px] md:h-[106px] bg-gray50 flex justify-center items-center rounded-xxl overflow-hidden">
                          <Image
                            src={require("../assets/images/mouse-logitech-mx-master.webp")}
                            alt={""}
                          />
                        </a>
                      </Link>
                      <Link href="/some-product">
                        <a className="font-normal text-[1rem] text-black text-center md:text-left">
                          Logitech MX MASTER 3S
                        </a>
                      </Link>
                    </div>
                    <div className="font-bold text-[1.125rem] text-turquoise">$99.99</div>
                    <div className="font-normal text-[0.875rem] text-gray mt-2 mb-5 md:mt-0 md:mb-0">
                      Available
                    </div>
                    <div className="flex items-center gap-[10px]">
                      <button className="outline-none appearance-none w-[30px] h-[30px] flex justify-center items-center group border-1 border-orange hover:bg-orange rounded-lg">
                        <FiShoppingCart
                          size={16}
                          className="stroke-orange group-hover:stroke-white"
                        />
                      </button>
                      <button className="outline-none appearance-none w-[30px] h-[30px] flex justify-center items-center group border-1 border-orange hover:bg-orange rounded-lg">
                        <FiTrash size={16} className="stroke-orange group-hover:stroke-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Benefits />
      </Layout>
    </>
  );
};

export default Wishlist;
