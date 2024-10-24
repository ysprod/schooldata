import { toast } from "@/components/ui/use-toast";
import { useCallback } from "react";
import { formatDateinverse } from "@/app/utils/functions";
import { Student } from "@/lib/interfaces";

const ERRORMESSAGE = "Erreur lors de la récupération de la demande.";
type SetFormData = React.Dispatch<React.SetStateAction<Student | null>>;
type SetIsLoading = React.Dispatch<React.SetStateAction<boolean>>;

export const useFetchDemande = (
  id: number,
  setFormData: SetFormData,
  setIsLoading: SetIsLoading
) => {

  const fetchDemande = useCallback(async () => {
    setIsLoading(true);
    try {
      const data =null;
      if (data) {
        data.birthday = formatDateinverse(data.birthday);
        setFormData(data);
      } else {
        toast({ description: ERRORMESSAGE });
        setFormData(null);
      }
    } catch (error) {
      toast({ description: ERRORMESSAGE });
      setFormData(null);
    } finally {
      setIsLoading(false);
    }
  }, [setFormData, setIsLoading]);

  return fetchDemande;
};
