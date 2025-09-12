import Link from "next/link";
import Button from "./ui/Button";
import Image from "next/image";
import NavBar, { MobileNavBar } from "./NavBar";

const Header = () => {
  return (
    <>
      <MobileNavBar />
      <header className="flex items-center justify-between p-4">
        <Link href="/" className="sm:block hidden">
          <Image src={"/logo.svg"} width={25} height={25} alt="logo" />
        </Link>
        <NavBar />
        <div className="hidden sm:flex gap-2">
          <Button className="hidden xl:flex">Pricing</Button>
          <Button className="hidden md:flex">Log In</Button>
          <Button type="action">Sign Up</Button>
        </div>
      </header>
    </>
  );
};

export default Header;
