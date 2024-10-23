import { Image } from "@nextui-org/react";

export default function NotFound() {
  return (
    <div className="grid items-center w-full grid-cols-1 gap-2 p-5 md:grid-cols-2 place-items-center">
      <div className="flex items-center justify-center md:col-span-2">
        <h1 className="p-5 m-0 text-5xl font-bold text-center capitalize">
          La ressource demandée est introuvable
        </h1>
        <Image src="/erreur.png" alt="Login Form" width={500} height={500} />
      </div>
    </div>
  );
}
