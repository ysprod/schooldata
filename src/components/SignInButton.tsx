"use client";

import {
  Avatar, Button, Dropdown, DropdownItem, DropdownMenu,
  DropdownTrigger, NavbarContent, NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { menuItems } from "./Menu";
import { MonMenu } from "./monmenu";
import router from "next/router";
import { useAuth } from "@/firebase/auth";

const SigninButton = () => {
  const { authUser, signOut } = useAuth();
  const urlimage = authUser?.name || "./avatar.png";
  const handleLogoClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    await signOut();
    router.push("/");
  };
  return (
    <>
      <NavbarContent className="flex justify-between items-center w-full" justify="end">
        {authUser ? (
          <>
            <NavbarItem className="ml-5">
              <MonMenu menuItems={menuItems} orientation="horizontal" />
            </NavbarItem>
            <NavbarItem className="ml-5">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Avatar
                    isBordered
                    color="success"
                    name="YAYA SIDIBE"
                    src={urlimage}
                  />
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Profile Actions"
                  variant="shadow"
                  className="bg-white"
                >
                  <DropdownItem key="profile" className="gap-2 h-14">
                    <p className="font-semibold">
                      <br />
                      Bienvenue!
                      <br />
                      {authUser.name}
                    </p>
                  </DropdownItem>
                  <DropdownItem key="settings" href="/dashboard">
                    Tableau de board
                  </DropdownItem>
                  <DropdownItem key="team_settings" href="/profile">
                    Profile
                  </DropdownItem>
                  <DropdownItem key="system" href="/">
                    Options
                  </DropdownItem>
                  <DropdownItem key="help_and_feedback" href="/">
                    Feedback
                  </DropdownItem>
                  <DropdownItem key="logout" color="danger">
                    <Button
                      onClick={handleLogoClick}
                      className="p-2 px-6 py-2 font-bold text-white bg-orange-600 rounded cursor-pointer md:p-4"
                    >
                      Se deconnecter
                    </Button>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </NavbarItem>
          </>
        ) : (
          <>
            <NavbarItem className="hidden lg:flex">
              <div className="flex items-center gap-2">
                <Button
                  as={Link}
                  href={"/auth/signin"}
                  className="p-2 px-6 py-2 font-bold text-white bg-orange-600 rounded cursor-pointer md:p-4"
                >
                  Se connecter
                </Button>
                <Button
                  as={Link}
                  href={"/auth/signup"}
                  className="p-2 px-6 py-2 font-bold text-white bg-green-600 rounded cursor-pointer md:p-4"
                >
                  Inscription
                </Button>
              </div>
            </NavbarItem>
          </>
        )}
      </NavbarContent>
    </>
  );
};

export default SigninButton;
