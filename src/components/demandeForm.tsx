 
import { Student } from "@prisma/client";
import { z } from "zod";
 
export const DemandeFormSchema = z.object({
  nom: z.string(),
  prenom: z.string(),
  sexe: z.string(),
  datenaissance: z.string(),
  lieunaissance: z.string(),
  nationalite: z.string(),
  datedenaturalisation: z.string(),
  datedecretdenaturalisation: z.string(),
  nometprenomspere: z.string(),
  nometprenomsmere: z.string(),
  nationalitepere: z.string(),
  nationalitemere: z.string(),
  profession: z.string(),
  domicile: z.string(),
  adresse: z.string(),
  telephone: z.string(),
  numeroelecteur: z.string(),
  numerocni: z.string(),
  intituledeliste: z.string(),
  resident: z.string(),
  numerodordre: z.string(),
  partiougroupementpolitique: z.string(),
  numerocirconscription: z.string(),
  nomcirconscription: z.string(),
  datededeclaration: z.string(),
  lieudedeclaration: z.string(),
});

export type StudentFormProps = Omit<Student, "id">;
export type DemandeInputType = z.infer<typeof DemandeFormSchema>;

export const dataForm: StudentFormProps = {
  userId: "0",
  address : "",
  birthday : "",
  bloodType : "",
  email : "",
  firstName : "",
  lastName : "",
  password : "",
  phone : "",
  sex : "",
  username : "",
  urlphoto : "",
  lieunaissance : "",
  nationalite : "",    
};


export const dataFormr: StudentFormProps = {
  userId: "0",
  address: "ABIDJAN COCODY ANGRÉ RUE DES BARS",
  birthday: "2024-08-31",
  bloodType: "tyiyti",
  email: "yayasidibeproduction@gmail.com",
  firstName: "CITEkukytkiyti",
  lastName: "SIRtyiytityi",
  password: "123456789",
  phone: "0758385387",
  sex: "male",
  username: "yayasi",
  urlphoto: "./avatar.png",
  lieunaissance: "",
  nationalite: "",
}
