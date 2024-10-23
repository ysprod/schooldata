"use server";
import { Result } from "./utils/types";
import { Student } from "@prisma/client";
import { StudentFormProps } from "@/components/demandeForm";

export async function handleDemandeUpdate(formData: StudentFormProps, id: number): Promise<Result> {
  try {
        return {
      success: false,
      error: "Erreur inconnue",
    };
  } catch (error) {
    return {
      success: false,
      error: `${error.message}`,
    };
  }
}

export async function handleDemandeDelete(id: number): Promise<Result> {
  try {
    
    return {
      success: false,
      error: "Erreur inconnue",
    };
  } catch (error) {
    return {
      success: false,
      error: `${error.message}`,
    };
  }
}

export async function handleUserUpdate(formData: any, id: string): Promise<Result> {
  try {
    return {
      success: false,
      error: "Erreur inconnue",
    };
  } catch (error) {
    return {
      success: false,
      error: ` ${error.message}`,
    };
  }
}
 
export async function RetrieveDemande(id: number): Promise<any | null> {
  console.log(id);
  try {
    return {
      success: false,
      error: "Erreur inconnue",
    };
  } catch (error) {
    return null;
  }
}