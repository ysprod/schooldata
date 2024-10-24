// "use client"
"use client"
import { Navbar, NavbarBrand } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import SigninButton from "./SignInButton";

export default function Appbar(): JSX.Element {
   return (
    <Navbar isBordered className="sticky top-0 z-50 bg-white w-full">
      <NavbarBrand>
        <Link href="/">
          <Image
            src="/logo.png"
            className="h-8 mr-5 sm:h-9"
            width={50}
            height={50}
            alt="Ecole+"
          />
        </Link>
      </NavbarBrand>
      <SigninButton />
    </Navbar>
  );
}

