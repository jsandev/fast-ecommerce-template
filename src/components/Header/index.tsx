import Link from "next/link";
import { FiHeart, FiUser, FiShoppingCart } from "react-icons/fi";

export const Header = () => {
  return (
    <header className="w-full h-[80px] flex items-center justify-center px-[1.25rem] xs:px-[1.5rem] md:px-[2.5rem] lg:px-[3rem]">
      <div className="w-full max-w-[1200px] mx-auto flex items-center justify-between">
        <Link href="/">
          <a className="font-bold text-[1.5rem] text-turquoise">JSandoval.</a>
        </Link>
        <ul className="list-none flex items-center gap-6">
          <li>
            <Link href="/">
              <a className="relative">
                <FiHeart size={24} />
                <span className="w-[1rem] h-[1rem] absolute -top-[6px] -right-[6px] flex justify-center items-center bg-red rounded-circle font-semibold text-[0.625rem] text-white">
                  3
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a className="relative">
                <FiShoppingCart size={24} />
                <span className="w-[1rem] h-[1rem] absolute -top-[6px] -right-[6px] flex justify-center items-center bg-red rounded-circle font-semibold text-[0.625rem] text-white">
                  5
                </span>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <FiUser size={24} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
