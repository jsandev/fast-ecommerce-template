import classNames from "classnames";
import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import styled from "styled-components";

interface IProps {
  id?: string;
  type: "text" | "number" | "email" | "password";
  name: string;
  classname?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const AppInput: React.FC<IProps> = ({
  id,
  name,
  type,
  classname,
  placeholder,
  value,
  onChange,
}) => {
  const [viewPassword, setViewPassword] = useState(false);

  return (
    <InputWrapper className="w-full h-[40px] relative rounded-xxl overflow-hidden">
      <input
        id={id}
        type={viewPassword ? "text" : type}
        name={name}
        className={classNames(
          "w-full h-full outline-none appearance-none bg-gray50 px-[0.625rem] py-1 font-normal text-black text-[0.875rem] placeholder:text-[0.875rem] placeholder:text-black",
          { "pr-[40px]": type === "password" },
          classname
        )}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {type === "password" && (
        <div
          className="absolute top-1/2 -translate-y-1/2 right-[0.625rem] cursor-pointer"
          onClick={() => setViewPassword((s) => !s)}
        >
          {viewPassword ? (
            <FiEye size={20} className="stroke-black" />
          ) : (
            <FiEyeOff size={20} className="stroke-black" />
          )}
        </div>
      )}
    </InputWrapper>
  );
};

const InputWrapper = styled.div`
  > input {
    &::placeholder {
      /* font-size: 12px !important; */
    }
  }
`;
