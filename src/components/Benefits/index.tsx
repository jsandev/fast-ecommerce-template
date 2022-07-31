import styled from "styled-components";
import { FiTrash, FiPackage, FiMapPin, FiHeadphones } from "react-icons/fi";

import { BREAKPOINTS } from "ui";

export const Benefits = () => {
  return (
    <section className="w-full px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem] pb-[5rem]">
      <Grid className="w-full max-w-[1200px] mx-auto grid justify-center gap-5">
        <div className="w-full flex flex-col items-center justify-center px-2 py-6">
          <FiTrash className="stroke-orange" size={32} />
          <h1 className="font-semibold text-[1rem] text-black text-center mt-[0.625rem] mb-5">
            Free Shipping
          </h1>
          <h3 className="font-normal text-[0.875rem] text-gray text-center">
            Fast and ready where you need it. Call now, don{"'"}t wait!
          </h3>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-2 py-6">
          <FiPackage className="stroke-orange" size={32} />
          <h1 className="font-semibold text-[1rem] text-black text-center mt-[0.625rem] mb-5">
            Safe delivery
          </h1>
          <h3 className="font-normal text-[0.875rem] text-gray text-center">
            Quality and security for transportation and delivery
          </h3>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-2 py-6">
          <FiMapPin className="stroke-orange" size={32} />
          <h1 className="font-semibold text-[1rem] text-black text-center mt-[0.625rem] mb-5">
            Tracking
          </h1>
          <h3 className="font-normal text-[0.875rem] text-gray text-center">
            Real-time updates trusted by professionals
          </h3>
        </div>
        <div className="w-full flex flex-col items-center justify-center px-2 py-6">
          <FiHeadphones className="stroke-orange" size={32} />
          <h1 className="font-semibold text-[1rem] text-black text-center mt-[0.625rem] mb-5">
            Customer Support
          </h1>
          <h3 className="font-normal text-[0.875rem] text-gray text-center">
            Service, support and attention 24 hours a day
          </h3>
        </div>
      </Grid>
    </section>
  );
};

const Grid = styled.section`
  grid-template-columns: 1fr;

  @media (min-width: ${BREAKPOINTS.sm}px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  @media (min-width: ${BREAKPOINTS.lg}px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
`;
