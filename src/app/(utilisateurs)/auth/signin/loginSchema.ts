import * as Yup from "yup";
 
export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid Email!")
    .required("Email requis !"),
    password: Yup.string()
    .required("Mot de passe requis!"),
});
