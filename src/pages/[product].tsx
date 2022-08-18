import React, { useState, useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import classNames from "classnames";

import { Layout } from "components/Layout";

import { FiChevronRight, FiShoppingCart, FiHeart } from "react-icons/fi";
import Image from "next/image";
import { ProductsGroup } from "components/ProductsGroup";
import { ICardProduct } from "components/CardProduct";
import { QuantityActions } from "components/QuantityActions";

const Product: NextPage = () => {
  const images = [
    require("../assets/images/sony-main.jpg"),
    require("../assets/images/sony-2.webp"),
    require("../assets/images/sony-3.webp"),
    require("../assets/images/sony-4.webp"),
  ];

  const relatedProducts: ICardProduct[] = [
    {
      name: "Logitech MX MASTER 3S",
      price: 99.99,
      image: require("../assets/images/mouse-logitech-mx-master.webp"),
    },
    {
      name: "Redragon KUMARA K552",
      price: 145.99,
      image: require("../assets/images/redragon-kumara-main.png"),
    },
    {
      name: "Monitor Samsung 32'",
      price: 499.99,
      image: require("../assets/images/monitor-samsung-main.png"),
    },
    {
      name: "JBL Tune 760NC",
      price: 199.99,
      image: require("../assets/images/headphones-jbl-main.webp"),
    },
  ];

  const [imgSelected, setImgSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleAdd = () => {
    const value = parseInt("" + inputRef.current?.value) + 1;
    setQuantity(value);
  };

  const handleDismiss = () => {
    const value = parseInt("" + inputRef.current?.value) - 1;
    if (value < 1) return;
    setQuantity(value);
  };

  return (
    <>
      <Head>
        <title>Product | Fast Ecommerce Template</title>
      </Head>
      <Layout>
        <section className="w-full py-[0.875rem] px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem]">
          <div className="w-full h-full max-w-[1200px] mx-auto flex flex-wrap items-center gap-[0.4375rem]">
            <Link href="/">
              <a className="font-normal text-[0.875rem] text-gray hover:text-turquoise">Home</a>
            </Link>
            <FiChevronRight size={16} className="stroke-gray" />
            <h3 className="font-normal text-[0.875rem] text-gray">Headphones SONY</h3>
          </div>
        </section>
        <section className="w-full px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem] pb-[3.75rem]">
          <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-[auto_1fr] gap-[1.875rem]">
            <div className="grid grid-cols-1 justify-items-center md:grid-cols-[minmax(250px,320px)] lg:grid-cols-[minmax(50px,64px)_auto] gap-[10px]">
              <div className="w-full grid justify-center grid-cols-[repeat(auto-fit,50px)] auto-rows-[50px] xs:grid-cols-[repeat(auto-fit,80px)] xs:auto-rows-[80px] md:grid-cols-[repeat(auto-fit,50px)] md:auto-rows-[minmax(50px,50px)] lg:grid-cols-1 lg:auto-rows-[minmax(50px,64px)] gap-[10px] order-2 lg:order-none">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className={classNames(
                      "flex justify-center items-center border-1 overflow-hidden cursor-pointer rounded-[3px]",
                      { "border-orange": imgSelected === i },
                      { "border-gray50": imgSelected !== i }
                    )}
                    onClick={() => setImgSelected(i)}
                  >
                    <Image src={img} alt="" />
                  </div>
                ))}
              </div>
              <div className="w-full md:max-w-[400px] rounded-[3px] border-1 border-gray50 overflow-hidden">
                <Image src={images[imgSelected]} priority alt="" />
              </div>
            </div>
            <div className="w-full flex flex-col justify-start">
              <h1 className="font-bold text-[1.875rem] text-black">Headphones SONY</h1>
              <h3 className="font-normal text-[1rem] text-[#777] leading-[1.5rem] mt-[0.625rem] mb-[1.875rem]">
                Immerse yourself deep in the bass and experience a clubbing experience with enhanced
                noise cancellation and wireless freedom. These comfortable Bluetooth® headphones let
                you enjoy your music throughout the day and stay in touch with your friends thanks
                to multipoint connectivity and crystal clear calls.
              </h3>
              <div className="flex flex-col xs:flex-row xs:items-center xs:gap-4">
                <h2 className="font-bold text-[2rem] text-turquoise order-2 xs:order-none">
                  $199.99
                </h2>
                <h5 className="font-medium text-[0.75rem] text-gray">
                  Available <span className="font-medium text-orange">30</span> units
                </h5>
              </div>
              <QuantityActions
                ref={inputRef}
                handleAdd={handleAdd}
                handleDismiss={handleDismiss}
                quantity={quantity}
                setQuantity={setQuantity}
                className="mt-[24px] mb-[1.875rem] xs:mt-[2.5rem]"
              />
              <div className="flex flex-col xs:flex-row xs:items-center gap-6">
                <button className="outline-none appearance-none text-[0.875rem] bg-orange hover:bg-orange-hover text-white flex justify-center items-center gap-[10px] rounded-[30px] px-6 py-[10px]">
                  Add to card <FiShoppingCart size={20} />
                </button>
                <button className="outline-none appearance-none flex flex-col items-center text-[0.875rem] text-gray group">
                  <FiHeart size={24} className="stroke-orange group-hover:fill-orange" />
                  Add to favourites
                </button>
              </div>
            </div>
          </div>
        </section>
        <ProductsGroup titleSection="Related products" products={relatedProducts} />
      </Layout>
    </>
  );
};

export default Product;
