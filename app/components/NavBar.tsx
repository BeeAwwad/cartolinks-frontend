"use client";

import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

type NavItemProps = {
  icon: string;
  label: string;
};

const NavItem = ({ icon, label }: NavItemProps) => {
  return (
    <li
      className="relative flex flex-col items-center py-2 px-2.5 lg:px-4 group rounded-xl cursor-pointer
      hover:bg-slate-200 dark:hover:bg-slate-700"
    >
      <Icon
        icon={icon}
        width={19}
        height={19}
        className="text-slate-800 dark:text-slate-200"
      />
      <span
        className="absolute left-1/2 -translate-x-1/2 top-full mt-4 px-2 py-1 rounded-lg 
        bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200
        text-xs opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 
        transition-all duration-200 pointer-events-none z-10"
      >
        {label}
      </span>
    </li>
  );
};

const MobileNavItem = ({ icon, label }: NavItemProps) => {
  return (
    <a
      href="#"
      className="flex items-center gap-3 p-2 rounded-lg
      text-slate-800 dark:text-slate-200 
      hover:bg-slate-200 dark:hover:bg-slate-700"
    >
      <Icon icon={icon} width={20} height={20} />
      <span className="text-sm font-medium">{label}</span>
    </a>
  );
};

const links = [
  { icon: "jam:home-f", label: "Home" },
  { icon: "line-md:image-filled", label: "Image" },
  { icon: "fluent:video-28-filled", label: "Video" },
  { icon: "fa6-solid:wand-magic-sparkles", label: "Enhancer" },
  { icon: "ion:pencil-sharp", label: "Realtime" },
  { icon: "icon-park-outline:compass", label: "Edits" },
  { icon: "material-symbols-light:folder-rounded", label: "Assets" },
];

const NavBar = () => {
  return (
    <nav
      className="fixed top-2 right-0 left-0 z-50 mx-auto hidden sm:flex w-fit justify-center 
      rounded-2xl backdrop-blur-2xl
      bg-slate-100 dark:bg-slate-900
      transition-[transform,opacity,scale,translate,background-color]
      duration-[500ms] ease-[cubic-bezier(0,1,.35,1)]"
    >
      <ul className="flex items-center gap-2 p-2">
        {links.map((link) => (
          <NavItem key={link.label} icon={link.icon} label={link.label} />
        ))}
      </ul>
    </nav>
  );
};

export const MobileNavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="sm:hidden fixed top-0 left-0 w-full z-40
      bg-white dark:bg-slate-900 backdrop-blur-md"
    >
      {/* Top bar with menu button */}
      <div className="flex items-center justify-between p-4">
        {/* Light logo */}
        <Image
          src="/logo.svg"
          width={25}
          height={25}
          alt="logo"
          className="block dark:hidden"
        />
        {/* Dark logo */}
        <Image
          src="/logo-dark.svg"
          width={25}
          height={25}
          alt="logo dark"
          className="hidden dark:block"
        />
        <button onClick={() => setOpen(true)}>
          <Icon
            icon="material-symbols-light:side-navigation"
            width={24}
            height={24}
            className="text-slate-900 dark:text-slate-200"
          />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40 sm:z-50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side nav */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 
        bg-white dark:bg-slate-900 bottom-0 backdrop-blur-lg
        z-50 transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setOpen(false)}>
            <Icon
              icon="material-symbols:close-rounded"
              width={24}
              height={24}
              className="text-slate-800 dark:text-slate-200"
            />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-4">
          {links.map((link) => (
            <MobileNavItem
              key={link.label}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
