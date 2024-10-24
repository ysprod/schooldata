import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  nom: Yup.string()
  .min(2, "Le nom comprend au moins deux caractères")
  .max(45, "Le nom comprend au maximum 45 caractères")
  .matches(/^[a-zA-Z]+$/, "Les caractères spéciaux ne sont pas acceptés !")
  .required("Le nom est requis"),
prenoms: Yup.string() 
  .min(2, "Le prénom comprend au moins deux caractères")
  .max(45, "Le prénom comprend au maximum 45 caractères")
  .matches(/^[a-zA-Z]+$/, "Les caractères spéciaux ne sont pas acceptés !")
  .required("Le prénom est requis"),
email: Yup.string()
  .email("Saisissez une adresse email valide")
  .required("L'email est requis"),
phone: Yup.string()
  .min(2, "Le téléphone comprend au moins deux caractères")
  .max(45, "Le téléphone comprend au maximum 45 caractères")
  .required("Le téléphone est requis"),
password: Yup.string()
  .min(6, "Le mot de passe doit être au moins 6 caractères")
  .max(50, "Le mot de passe doit être inférieur à 50 caractères")
  .required("Le mot de passe est requis"),
confirmPassword: Yup.string()
  .oneOf([Yup.ref("password"), null], "Le mot de passe doit correspondre")
  .required("La confirmation du mot de passe est requise"),
accepted: Yup.boolean()
  .oneOf([true], "Veuillez accepter les conditions d'utilisation")
  .required("L'acceptation est obligatoire"),
});