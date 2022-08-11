import { CardProduct, ICardProduct } from "components/CardProduct";
import React from "react";
import styled from "styled-components";

interface IProps {
  titleSection: string;
  products: ICardProduct[];
}

export const ProductsGroup: React.FC<IProps> = ({ titleSection, products }) => {
  return (
    <section className="w-full px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem] pb-[9.375rem]">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center">
        <h1 className="font-bold text-[1.5rem] text-black my-[2rem] text-center md:my-[3.75rem] md:text-[2rem]">
          {titleSection}
        </h1>
        <Grid className="w-full grid">
          {products.map(({ name, price, image }, i) => (
            <CardProduct key={i} name={name} price={price} image={image} />
          ))}
        </Grid>
      </div>
    </section>
  );
};

const Grid = styled.div`
  grid-template-columns: repeat(auto-fit, minmax(230px, 250px));
  justify-content: center;
  gap: 30px;
`;
