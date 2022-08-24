import React from "react";

import { Footer } from "components/Footer";
import { Header } from "components/Header";
import { ViewCart } from "components/ViewCart";
import { ModalLogin } from "components/ModalLogin";

interface IProps {
  children: React.ReactNode;
}
export const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col relative">
      <main className="w-full flex flex-col">
        <Header />
        {children}
      </main>
      <Footer />

      <ViewCart />
      <ModalLogin />
    </div>
  );
};
