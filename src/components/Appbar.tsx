// "use client"
"use client"
import { Navbar, NavbarBrand } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import SigninButton from "./SignInButton";
import { useAuth } from "@/firebase/auth"; 
import { useRouter } from "next/navigation";
import { useToastMessages } from "@/components/message/usetoastmessage";
import { useEffect } from "react";

export default function Appbar(): JSX.Element {
  const router = useRouter();
  const { Info } = useToastMessages();
  const { authUser, isLoading, signOut } = useAuth();

  useEffect(() => {
    if (!isLoading && !authUser) {
      router.push("/");
    }
  }, [isLoading, authUser, router]);

  const handleLogoClick = async (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    await signOut(); // Appelle la fonction signOut
    router.push("/"); // Redirige vers la page d'accueil ou une autre page après la déconnexion
  };

  return (
    <Navbar isBordered className="sticky top-0 z-50 bg-white w-full">
      <NavbarBrand>
        <Link href="/" onClick={handleLogoClick}>
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

