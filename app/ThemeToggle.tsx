"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full size-10 relative"
    >
      <Icon
        icon="ic:baseline-light-mode"
        width={20}
        height={20}
        className="absolute size-7 rotate-0 scale-100 dark:-rotate-90 dark:scale-0 transition-all duration-300 inset-0 m-auto"
      />

      <Icon
        icon="ic:baseline-dark-mode"
        className="absolute size-7 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all duration-300 inset-0 m-auto"
        width={20}
        height={20}
      />
    </button>
  );
};

export default ThemeToggle;
