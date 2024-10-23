//import { activateUser } from "@/lib/actions/authActions/authActions";

interface Props {
  params: {
    jwt: string;
  };
}

const ActivationPage = async ({ params }: Props) => {
 // const result = await activateUser(params.jwt);
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {/* {result === "userNotExist" ? (
        <p className="text-2xl text-red-500">Cet utilisateur est introuvable</p>
      ) : result === "alreadyActivated" ? (
        <p className="text-2xl text-red-500">Utilisateur dejà activé</p>
      ) : result === "success" ? (
        <p className="text-2xl text-green-500">Utilisateur activé</p>
      ) : (
        <p className="text-2xl text-yellow-500">Erreur inconnue</p>
      )} */}
    </div>
  );
};

export default ActivationPage;
