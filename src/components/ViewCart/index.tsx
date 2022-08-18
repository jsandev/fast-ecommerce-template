import { CardCart } from "components/CardCart";
import React from "react";
import { FiChevronLeft } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { navigationActions } from "store/navigation";
import styled, { css } from "styled-components";
import { CUSTOM_TRANSITION, hideScroll } from "ui";

export const ViewCart = () => {
  const dispatch = useDispatch();
  const viewCartVisible = useSelector((state: RootState) => state.navigation.viewCartVisible);

  return (
    <OverLay
      viewCartVisible={viewCartVisible}
      className="w-full h-full fixed top-0 left-0 bg-[#000] bg-opacity-25 flex justify-end opacity-0 invisible"
      onClick={() => dispatch(navigationActions.viewCartVisibleToggled())}
    >
      <ViewCartWrapper
        viewCartVisible={viewCartVisible}
        className="w-full h-full max-w-[400px] grid grid-cols-1 grid-rows-[auto_1fr_auto] bg-white"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div className="w-full flex items-center gap-[10px] px-3 py-[1rem]">
          <FiChevronLeft
            size={20}
            className="cursor-pointer"
            onClick={() => dispatch(navigationActions.viewCartVisibleToggled())}
          />
          <h3 className="font-normal text-[0.875rem] text-black">
            Your Cart <span className="font-medium text-orange">(2 items)</span>
          </h3>
        </div>
        <ProductsWrapper className="w-full h-full flex flex-col gap-[1.875rem] overflow-y-auto py-5 px-6">
          <CardCart
            name="Logitech MX MASTER 3S"
            price={99.99}
            image={require("../../assets/images/mouse-logitech-mx-master.webp")}
          />
          <CardCart
            name="Headphones Logitech G935"
            price={310.49}
            image={require("../../assets/images/auriculares-logitech-main.webp")}
          />
        </ProductsWrapper>
        <div className="w-full flex flex-col px-6 pb-[30px] gap-3">
          <div className="w-full flex justify-between items-center">
            <h3 className="font-medium text-[1rem] text-black">Subtotal</h3>
            <p className="font-medium text-[1.125rem] text-turquoise">$410.48</p>
          </div>
          <button className="outline-none appearance-none w-full bg-turquoise hover:bg-[#019DA5] font-medium text-[0.875rem] text-white text-center py-[0.625rem] rounded-[1.875rem]">
            Go to pay
          </button>
          <button
            className="xs:hidden outline-none appearance-none w-full border-2 border-turquoise font-medium text-[0.875rem] text-turquoise text-center py-[0.625rem] rounded-[1.875rem]"
            onClick={() => dispatch(navigationActions.viewCartVisibleToggled())}
          >
            Return
          </button>
        </div>
      </ViewCartWrapper>
    </OverLay>
  );
};

interface IStyledProps {
  viewCartVisible: boolean;
}
const ViewCartWrapper = styled.div`
  transition: transform ${CUSTOM_TRANSITION};

  ${(props: IStyledProps) =>
    props.viewCartVisible
      ? css`
          transform: translateX(0px);
        `
      : css`
          transform: translateX(400px);
        `};
`;

const OverLay = styled.div`
  transition: opacity ${CUSTOM_TRANSITION}, visibility ${CUSTOM_TRANSITION};

  ${(props: IStyledProps) =>
    props.viewCartVisible
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `};
`;

const ProductsWrapper = styled.div`
  ${hideScroll}
`;
