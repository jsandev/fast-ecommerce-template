import Link from "next/link";
import { useDispatch } from "react-redux";

import { navigationActions } from "store/navigation";

import { FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <header className="w-full h-[80px] flex items-center justify-center px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem]">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-[1.5rem] text-turquoise">JSandoval.</a>
        </Link>
        <ul className="list-none flex items-center gap-6">
          <li>
            <Link href="/wishlist">
              <a className="relative">
                <FiHeart size={24} />
                <span className="w-[1rem] h-[1rem] absolute -top-[6px] -right-[6px] flex justify-center items-center bg-red rounded-circle font-semibold text-[0.625rem] text-white">
                  3
                </span>
              </a>
            </Link>
          </li>
          <li>
            <div
              className="relative cursor-pointer"
              onClick={() => dispatch(navigationActions.viewCartVisibleToggled())}
            >
              <FiShoppingCart size={24} />
              <span className="w-[1rem] h-[1rem] absolute -top-[6px] -right-[6px] flex justify-center items-center bg-red rounded-circle font-semibold text-[0.625rem] text-white">
                5
              </span>
            </div>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => dispatch(navigationActions.modalLoginVisibleToggled())}
          >
            <FiUser size={24} />
          </li>
        </ul>
      </div>
    </header>
  );
};
