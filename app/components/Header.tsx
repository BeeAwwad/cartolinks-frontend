import Link from "next/link";
import Button from "./ui/CustomButton";
import Image from "next/image";
import NavBar, { MobileNavBar } from "./NavBar";
import ThemeToggle from "../ThemeToggle";

const Header = () => {
  return (
    <>
      <MobileNavBar />
      <header className="hidden sm:flex items-center justify-between fixed w-full p-4 z-5 top-0">
        <Link href="/" className="sm:block hidden">
          <Image
            src="/logo.svg"
            width={25}
            height={25}
            alt="logo"
            className="block dark:hidden"
          />
          <Image
            src="/logo-dark.svg"
            width={25}
            height={25}
            alt="logo dark"
            className="hidden dark:block"
          />
        </Link>
        <NavBar />
        <div className="hidden sm:flex gap-2">
          <ThemeToggle />
          <Button className="hidden md:flex">Log In</Button>
          <Button type="action">Sign Up</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
