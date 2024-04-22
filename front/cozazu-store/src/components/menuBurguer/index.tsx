"use client";
import { RiMenuLine } from "@remixicon/react";
import { useContext } from "react";
import { ContextoMenu } from "../menuContext";

export const MenuBurger: React.FC = (): React.ReactElement => {
  const { statusMenu, setStatusMenu } = useContext(ContextoMenu);
  const handleClick = () => {
    setStatusMenu(!statusMenu);

    console.log(statusMenu);
  };

  return (
    <div className="md:hidden cursor-pointer" onClick={handleClick}>
      <RiMenuLine color="#ffffff" size={30} />
    </div>
  );
};