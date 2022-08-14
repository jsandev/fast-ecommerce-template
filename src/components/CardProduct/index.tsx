import React from "react";
import Image from "next/image";
import Link from "next/link";

import { FiHeart } from "react-icons/fi";

export interface ICardProduct {
  image: any;
  name: string;
  price: number;
}

export const CardProduct: React.FC<ICardProduct> = ({ image, name, price }) => {
  return (
    <div className="flex flex-col">
      <div className="w-full max-w-[250px] h-[250px] relative flex justify-center items-center bg-gray50 rounded-[1rem]">
        <Image src={image} alt={name} />
        <span className="group absolute top-[1rem] right-[1rem] cursor-pointer">
          <FiHeart size={24} className="group-hover:fill-turquoise group-hover:stroke-turquoise" />
        </span>
      </div>
      <div className="p-[0.625rem]">
        <Link href={`/some-product`}>
          <a className="font-medium hover:underline text-[1rem] text-black">{name}</a>
        </Link>
        <h4 className="font-bold text-[1.125rem] text-turquoise">${price}</h4>
      </div>
    </div>
  );
};
