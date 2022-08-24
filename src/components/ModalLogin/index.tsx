import React, { useEffect, useState } from "react";
import { IconFacebook, IconGoogle } from "assets/icons";
import styled, { css } from "styled-components";
import { CSSTransition } from "react-transition-group";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { navigationActions } from "store/navigation";

import { AppInput } from "components/elements/AppInput";

import { FiLogIn, FiUser, FiX } from "react-icons/fi";
import { CUSTOM_TRANSITION } from "ui";

export const ModalLogin = () => {
  const dispatch = useDispatch();
  const modalLoginVisible = useSelector((state: RootState) => state.navigation.modalLoginVisible);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const [showSignUp, setShowSignUp] = useState(false);
  const [animatedStep, setAnimatedStep] = useState(false);

  useEffect(() => {
    setEmail("");
    setPassword("");
  }, [showSignUp]);

  return (
    <OverLay
      modalLoginVisible={modalLoginVisible}
      className="w-full h-full fixed top-0 left-0 bg-[#000] bg-opacity-25 flex justify-center items-center opacity-0 invisible"
      onClick={() => dispatch(navigationActions.modalLoginVisibleToggled())}
    >
      <div
        className="w-full h-full relative bg-white flex justify-center items-center p-6 overflow-hidden xs:max-w-[400px] xs:max-h-[550px] xs:rounded-[1rem]"
        onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      >
        <div
          className="xs:hidden absolute w-[32px] h-[32px] top-[1.25rem] right-[1.25rem] flex justify-center items-center cursor-pointer"
          onClick={() => dispatch(navigationActions.modalLoginVisibleToggled())}
        >
          <FiX size={24} className="stroke-gray" />
        </div>

        <CSSTransition
          in={!showSignUp && !animatedStep}
          timeout={125}
          classNames="switch"
          unmountOnExit
          onExited={() => {
            setAnimatedStep(showSignUp);
          }}
        >
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="font-medium text-[1.25rem] text-black">Hello Again!</h1>
            <h3 className="font-normal text-[0.875rem] text-gray mt-[0.3125rem] text-center">
              wellcome back you’ve been missed!
            </h3>
            <div className="w-full max-w-[280px] flex flex-col items-center gap-[0.625rem] mt-6">
              <AppInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <AppInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="w-full outline-none appearance-none bg-turquoise hover:bg-turquoise-hover flex justify-center items-center gap-[0.625rem] text-[0.875rem] text-white py-[0.625rem] rounded-[1.875rem] mt-[1.875rem]">
                Sign In
                <FiLogIn size={16} className="stroke-white" />
              </button>
            </div>
            <p className="font-normal text-[0.875rem] text-gray text-center mt-[1.875rem]">
              Or continue with
            </p>
            <div className="flex items-center gap-[0.625rem] mt-[1.25rem] mb-[3.125rem]">
              <button className="w-[3.125rem] h-[2.1875rem] outline-none appearance-none bg-[#F3F3F3] hover:bg-gray50 flex justify-center items-center rounded-xxl">
                <IconGoogle />
              </button>
              <button className="w-[3.125rem] h-[2.1875rem] outline-none appearance-none bg-[#F3F3F3] hover:bg-gray50 flex justify-center items-center rounded-xxl">
                <IconFacebook />
              </button>
            </div>
            <p className="font-normal text-[0.875rem] text-gray text-center">
              Don’t have an account yet?{" "}
              <strong className="text-turquoise cursor-pointer" onClick={() => setShowSignUp(true)}>
                Sign Up
              </strong>
            </p>
          </div>
        </CSSTransition>

        <CSSTransition
          in={showSignUp && animatedStep}
          timeout={125}
          classNames="switch"
          unmountOnExit
          onExited={() => {
            setAnimatedStep(showSignUp);
          }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center">
            <h1 className="font-medium text-[1.25rem] text-black">Hey!</h1>
            <h3 className="font-normal text-[0.875rem] text-gray mt-[0.3125rem] text-center">
              Thank you for registering with us
            </h3>
            <div className="w-full max-w-[280px] flex flex-col items-center gap-[0.625rem] mt-6">
              <AppInput
                type="text"
                name="name"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
              <AppInput
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <AppInput
                type="password"
                name="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="w-full outline-none appearance-none bg-turquoise hover:bg-turquoise-hover flex justify-center items-center gap-[0.625rem] text-[0.875rem] text-white py-[0.625rem] rounded-[1.875rem] mt-[1.875rem]">
                Sign Up
                <FiUser size={16} className="stroke-white" />
              </button>
            </div>
            <p className="font-normal text-[0.875rem] text-gray text-center mt-[1.875rem]">
              Or continue with
            </p>
            <div className="flex items-center gap-[0.625rem] mt-[1.25rem] mb-[3.125rem]">
              <button className="w-[3.125rem] h-[2.1875rem] outline-none appearance-none bg-[#F3F3F3] hover:bg-gray50 flex justify-center items-center rounded-xxl">
                <IconGoogle />
              </button>
              <button className="w-[3.125rem] h-[2.1875rem] outline-none appearance-none bg-[#F3F3F3] hover:bg-gray50 flex justify-center items-center rounded-xxl">
                <IconFacebook />
              </button>
            </div>
            <p className="font-normal text-[0.875rem] text-gray text-center">
              Do you have an account with us?{" "}
              <strong
                className="text-turquoise cursor-pointer"
                onClick={() => setShowSignUp(false)}
              >
                Sign In
              </strong>
            </p>
          </div>
        </CSSTransition>
      </div>
    </OverLay>
  );
};

interface IStyledProps {
  modalLoginVisible: boolean;
}

const OverLay = styled.div`
  transition: opacity ${CUSTOM_TRANSITION}, visibility ${CUSTOM_TRANSITION};

  ${(props: IStyledProps) =>
    props.modalLoginVisible
      ? css`
          opacity: 1;
          visibility: visible;
        `
      : css`
          opacity: 0;
          visibility: hidden;
        `};

  .switch-enter {
    opacity: 0;
    transform: translateX(100px);
  }
  .switch-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 125ms, transform 125ms;
    transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
  }
  .switch-exit {
    opacity: 1;
  }
  .switch-exit-active {
    opacity: 0;
    transform: translateX(-100px);
    transition: opacity 125ms, transform 125ms;
    transition-timing-function: cubic-bezier(0.5, 1, 0.89, 1);
  }
`;
