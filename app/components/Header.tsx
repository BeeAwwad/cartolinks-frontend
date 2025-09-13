"use client";

import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";
import NavBar, { MobileNavBar } from "./NavBar";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "../useTheme";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <MobileNavBar />
      <header className="hidden sm:flex items-center justify-between fixed w-full p-4 z-5 backdrop-blur-md top-0">
        <Link href="/" className="sm:block hidden">
          <Image src={"/logo.svg"} width={25} height={25} alt="logo" />
        </Link>
        <NavBar />
        <div className="hidden sm:flex gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            {theme === "light" ? (
              <Icon
                icon="material-symbols:light-mode-rounded"
                width={20}
                height={20}
              />
            ) : (
              <Icon
                icon="material-symbols:dark-mode-rounded"
                className="text-white"
                width={20}
                height={20}
              />
            )}
          </button>
          <Button className="hidden md:flex">Log In</Button>
          <Button type="action">Sign Up</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
