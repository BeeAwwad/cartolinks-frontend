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
    <li className="relative flex flex-col items-center hover:bg-slate-200 py-2 px-2.5 lg:px-4 group hover:bg-primary-200 dark:hover:bg-primary-800 rounded-xl cursor-pointer">
      <Icon icon={icon} width={19} height={19} />
      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-4 px-2 py-1 rounded-lg bg-slate-100 dark:bg-primary-800 text-xs opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 pointer-events-none z-10">
        {label}
      </span>
    </li>
  );
};

const MobileNavItem = ({ icon, label }: NavItemProps) => {
  return (
    <a
      href="#"
      className="flex items-center gap-3 p-2 text-black hover:bg-gray-200 rounded-lg"
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
      className="bg-primary-100 dark:bg-primary-850 fixed top-2 right-0 left-0 z-81 mx-auto hidden sm:flex w-fit origin-center transform justify-center rounded-2xl backdrop-blur-2xl transition-[transform,opacity,scale,translate,background-color] select-none
    duration-[500ms] ease-[cubic-bezier(0,1,.35,1)]"
    >
      <ul className="flex items-center rounded-2xl bg-slate-100 gap-2 p-2">
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
    <div className="sm:hidden">
      {/* Top bar with menu button */}
      <div className="flex items-center justify-between p-4">
        <Image src={"/logo.svg"} width={25} height={25} alt="logo" />
        <button onClick={() => setOpen(true)}>
          <Icon
            icon="material-symbols-light:side-navigation"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Side nav */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-4">
          <button onClick={() => setOpen(false)}>
            <Icon
              icon="material-symbols:close-rounded"
              width={24}
              height={24}
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
