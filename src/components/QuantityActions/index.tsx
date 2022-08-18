import classNames from "classnames";
import React from "react";

interface IProps {
  handleDismiss: any;
  handleAdd: any;
  quantity: number;
  setQuantity: (value: number) => void;
  smallMode?: boolean;
  className?: string;
}

export const QuantityActions = React.forwardRef<HTMLInputElement, IProps>(
  ({ handleDismiss, handleAdd, quantity, setQuantity, smallMode, className }, inputRef) => {
    return (
      <div className={classNames("flex items-center gap-[5px]", className)}>
        <button
          className={classNames(
            "outline-none appearance-none text-[1.125rem] text-gray flex items-center justify-center bg-[#F2F2F2] rounded-[5px] hover:bg-gray50",
            { "w-[30px] h-[30px]": smallMode },
            { "w-[40px] h-[40px]": !smallMode }
          )}
          onClick={handleDismiss}
        >
          {"-"}
        </button>
        <input
          ref={inputRef}
          type="number"
          className={classNames(
            "outline-none appearance-none text-center text-[1.125rem] text-gray border-1 border-turquoise rounded-[5px]",
            { "w-[40px] h-[30px]": smallMode },
            { "w-[50px] h-[40px]": !smallMode }
          )}
          value={quantity}
          min={1}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />
        <button
          className={classNames(
            "outline-none appearance-none text-[1.125rem] text-gray flex items-center justify-center bg-[#F2F2F2] rounded-[5px] hover:bg-gray50",
            { "w-[30px] h-[30px]": smallMode },
            { "w-[40px] h-[40px]": !smallMode }
          )}
          onClick={handleAdd}
        >
          {"+"}
        </button>
      </div>
    );
  }
);

QuantityActions.displayName = "QuantityActions";
