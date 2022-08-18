import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { QuantityActions } from "components/QuantityActions";

export interface ICardCart {
  image: any;
  name: string;
  price: number;
}

export const CardCart: React.FC<ICardCart> = ({ image, name, price }) => {
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
    <div className="w-full grid grid-cols-[106px_1fr] gap-[1.125rem]">
      <Link href="/some-product">
        <a className="w-full h-[106px] bg-gray50 flex justify-center items-center rounded-xxl">
          <Image src={image} alt={name} />
        </a>
      </Link>
      <div className="w-full flex flex-col justify-between">
        <div className="flex flex-col items-start">
          <Link href="/some-product">
            <a className="font-normal text-[0.875rem] text-black">{name}</a>
          </Link>
          <h3 className="font-bold text-[1rem] text-turquoise">${price}</h3>
        </div>
        <div>
          <QuantityActions
            ref={inputRef}
            handleAdd={handleAdd}
            handleDismiss={handleDismiss}
            quantity={quantity}
            setQuantity={setQuantity}
            smallMode
          />
        </div>
      </div>
    </div>
  );
};
