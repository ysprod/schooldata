import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Le nom est requis!"),
  email: Yup.string().email("Email invalide!").required("Email Requis!"),
  password: Yup.string().required("Le mot de passe est requis!"),
});