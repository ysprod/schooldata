import { NavbarItem, Dropdown, DropdownTrigger, Avatar, DropdownMenu, DropdownItem, Button } from "@nextui-org/react";
import Image from "next/image"
import Link from "next/link";
import { Props } from "next/script";

const Connecte = () => {
  return (
    <>
      <NavbarItem>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              color="success"
              name="YAYA SIDIBE"
              src={"/avatar.png"}
            />
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Profile Actions"
            variant="shadow"
            className="bg-white"
          >
            {/* <DropdownItem key="profile" className="gap-2 h-14">
              <p className="font-semibold">
                <br />
                Bienvenue!
                <br />
                {props.nomutilisateur}
              </p>
            </DropdownItem> */}
            <DropdownItem key="settings" href="/dashboard">
              Tableau de board
            </DropdownItem>
            <DropdownItem key="team_settings" href="/profile">
              Profile
            </DropdownItem>
            <DropdownItem key="system" href="/">
              Aide
            </DropdownItem>
            <DropdownItem key="help_and_feedback" href="/">
              Feedback
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              <Button
                as={Link}
                className="p-2 px-6 py-2 font-bold text-white bg-orange-600 rounded cursor-pointer md:p-4"
                href={"/auth/signout"}
              >
                Se deconnecter
              </Button>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarItem>
    </>
  );
};

const Navbar = () => {
  return (
    <div className='flex items-center justify-between p-4'>
      <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
        <Image src="/search.png" alt="" width={14} height={14} />
        <input type="text" placeholder="Rechercher..." className="w-[200px] p-2 bg-transparent outline-none" />
      </div>
      <div className='flex items-center gap-6 justify-end w-full'>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
          <Image src="/message.png" alt="" width={20} height={20} />
        </div>
        <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
          <Image src="/announcement.png" alt="" width={20} height={20} />
          <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
        </div>
        <div className='flex flex-col'>
          <span className="text-xs leading-3 font-medium">Yaya Sidibé</span>
          <span className="text-[10px] text-gray-500 text-right">Admin</span>
        </div>
        <Link href="/profile">
          <Image src="/avatar.png" alt="" width={36} height={36} className="rounded-full" />
        </Link>
        {/* <Connecte/> */}
      </div>
      {/* <div>
        <button id="dropdownUserAvatarButton" data-dropdown-toggle="dropdownAvatar" className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button">
          <span className="sr-only">Open user menu</span>
          <Image className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg"
           alt="user photo"  width={36} height={36}  />
        </button>

        <div id="dropdownAvatar" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>Bonnie Green</div>
            <div className="font-medium truncate">name@flowbite.com</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
            </li>
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
            </li>
          </ul>
          <div className="py-2">
            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Navbar