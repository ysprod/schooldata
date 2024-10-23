import {
    Navbar,
    NavbarBrand,
    NavbarContent,
  } from "@nextui-org/react";
  import Link from "next/link";
  import Image from "next/image";
  import SigninButton from "./SignInButton";
  
  export default function Defaultappbar(): JSX.Element {
    return (
      <>
      
      <div className="sticky top-0 z-50 bg-white">
      <Navbar isBordered className="container bg-white">
        <NavbarBrand>
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              className="h-6 mr-2 sm:h-9"
              width={50}
              height={50}
              alt="CEI" />
            <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">
              Ecole+
            </span>
          </Link>
        </NavbarBrand>
        <NavbarContent className="hidden gap-3 sm:flex" justify="center">  
          <div className='flex items-center justify-between p-4'>
            <div className='hidden md:flex items-center gap-2 text-xs rounded-full ring-[1.5px] ring-gray-300 px-2'>
              <Image src="/search.png" alt="" width={14} height={14} />
              <input type="text" placeholder="Rechercher..." className="w-[200px] p-2 bg-transparent outline-none" />
            </div>  
          </div>
          </NavbarContent>
        <NavbarContent className=" gap-3 sm:flex" justify="center">
  
          <div className='flex items-center justify-between p-4'>
            
            <div className='flex items-center gap-6 justify-end w-full'>
              <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer'>
                <Image src="/message.png" alt="" width={20} height={20} />
              </div>
              <div className='bg-white rounded-full w-7 h-7 flex items-center justify-center cursor-pointer relative'>
                <Image src="/announcement.png" alt="" width={20} height={20} />
                <div className='absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center bg-purple-500 text-white rounded-full text-xs'>1</div>
              </div>
            </div>
  
          </div>
  
        </NavbarContent>
        <SigninButton />
      </Navbar>
        </div>
      </>
    );
  }