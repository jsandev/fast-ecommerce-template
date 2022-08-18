import { css } from "styled-components";

interface IBreakPoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
}

export const BREAKPOINTS: IBreakPoints = {
  xs: 481,
  sm: 641,
  md: 769,
  lg: 1025,
  xl: 1225,
};

export const CUSTOM_TRANSITION = "250ms cubic-bezier(0.33, 1, 0.68, 1)";

export const hideScroll = css`
  /* Safari, Chrome */
  &::-webkit-scrollbar {
    display: none;
    width: 0;
  }
  /* Firefox */
  scrollbar-width: none;
`;
