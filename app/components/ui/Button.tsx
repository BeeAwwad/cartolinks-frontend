import React from "react";
type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  link?: string;
  type?: "action" | "default";
  className?: string;
};

const Button = ({
  children,
  onClick,
  link,
  type = "default",
  className,
}: ButtonProps) => {
  return (
    <a
      onClick={onClick}
      href={link}
      className={`text-xs font-medium flex items-center justify-center rounded-full px-5 py-3 text-black/70 backdrop-blur-lg transition-colors duration-300 ease-[cubic-bezier(.33,0,.2,1)] cursor-pointer hover:text-black ${
        type === "action"
          ? "bg-blue-600 text-white hover:text-white/85 hover:bg-blue-700"
          : "hover:bg-slate-200/60 bg-slate-100 text-slate-800 hover:text-black/75"
      } ${className || ""}`}
    >
      {children}
    </a>
  );
};

export default Button;
