import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

import { Boutonform } from "./boutonform";
import { handleDemandeDelete } from "@/app/actions";
import { Titrepage } from "./titrepage";

export interface DeleteButtonProps {
  id: number;
}

export const DeleteButton = ({ id }: DeleteButtonProps) => {
  const router = useRouter();

  const handleReset = () => {
    router.push("/admin");
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();
    const result = await handleDemandeDelete(id);
    if (result.success === true) {
      toast({ description: "Formulaire suprimé avec succès !" });
      router.push("/admin");
    } else {
      toast({ description: `Erreur : ${result.error}` });
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 p-2 m-2 border rounded-md shadow"
      >
        <Titrepage> CONFIRMATION DE LA DEMANDE DE SUPPRESSION</Titrepage>
        <Boutonform
          handleReset={handleReset}
          texteboutonvalidation="Confirmer"
        ></Boutonform>
      </form>
    </>
  );
};
