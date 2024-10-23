import { getServerSession } from "next-auth";
import Image from "next/image";
import {
  Card,
  CardHeader,
  Divider,
  CardBody,
  CardFooter,
} from "@nextui-org/react";
import Link from "next/link";
import { ProfilemenuItems } from "@/components/Menu";
import { MonMenu } from "@/components/monmenu";
import { AuthUser } from '../../../lib/interfaces';
import { useAuth } from "@/firebase/auth";

const ProfilePage = async () => {
 const {authUser:user} = useAuth();
   
  return (
    <>
      <MonMenu menuItems={ProfilemenuItems}></MonMenu>
      <div className="grid items-center w-full grid-cols-1 gap-3 p-3 m-1 md:grid-cols-2 place-items-center">
        <div className="flex items-center justify-center md:col-span-2">
          <h1 className="text-4xl font-bold text-center">
            MON PROFIL UTILISATEUR
          </h1>
        </div>
        <Card className="w-full p-2 m-4">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md text-default-500">
                Information sur le profil
              </p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>Nom : {user?.name}</p>
            <p>Prenom(s) : {user?.name}</p>
            <p>Téléphone: {user?.name}</p>
            <p>Email: {user?.email}</p>
          </CardBody>
          <Divider />
          <CardFooter>
            <Link href="/dashboard">Acceder au tableau de bord</Link>
          </CardFooter>
        </Card>
        <Image src="/profil.png" alt="Login Form" width={500} height={500} />
      </div></>
  );
};

export default ProfilePage;
