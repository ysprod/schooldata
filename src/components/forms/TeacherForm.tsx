import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import InputField from "../InputField";
import Image from "next/image";

// Schéma de validation avec Yup
const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Le nom d'utilisateur doit comporter au moins 3 caractères !")
    .max(20, "Le nom d'utilisateur doit comporter au maximum 20 caractères !")
    .required("Le nom d'utilisateur est obligatoire !"),
  email: Yup.string().email("Adresse e-mail non valide !").required("L'email est obligatoire !"),
  password: Yup.string()
    .min(8, "Le mot de passe doit comporter au moins 8 caractères !")
    .required("Le mot de passe est obligatoire !"),
  firstName: Yup.string().required("Le prénom est obligatoire !"),
  lastName: Yup.string().required("Le nom de famille est obligatoire !"),
  phone: Yup.string().required("Le téléphone est obligatoire !"),
  address: Yup.string().required("L'adresse est obligatoire !"),
  bloodType: Yup.string().required("Le groupe sanguin est requis !"),
  birthday: Yup.date().required("L'anniversaire est requis !"),
  sex: Yup.string().oneOf(["male", "female"], "Le sexe est requis !").required("Le sexe est requis !"),
  img: Yup.mixed().required("L'image est requise !"),
});

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const initialValues = {
    username: data?.username || "",
    email: data?.email || "",
    password: "",
    firstName: data?.firstName || "",
    lastName: data?.lastName || "",
    phone: data?.phone || "",
    address: data?.address || "",
    bloodType: data?.bloodType || "",
    birthday: data?.birthday || "",
    sex: data?.sex || "male",
    img: null,
  };

  const onSubmit = (values: typeof initialValues) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ setFieldValue, errors, touched }) => (
        <Form className="flex flex-col gap-8">
          <h1 className="text-xl font-semibold">
            {type === "create" ? "Créer un enseignant" : "Modifier un enseignant"}
          </h1>
          <span className="text-xs text-gray-400 font-medium">Informations d&apos;authentification</span>

          <div className="flex justify-between flex-wrap gap-4">
            <InputField label="Nom d'utilisateur" name="username" />
            <InputField label="Email" name="email" />
            <InputField label="Mot de passe" name="password" type="password" />
          </div>

          <span className="text-xs text-gray-400 font-medium">Informations personnelles</span>

          <div className="flex justify-between flex-wrap gap-4">
            <InputField label="Prénom" name="firstName" />
            <InputField label="Nom de famille" name="lastName" />
            <InputField label="Téléphone" name="phone" />
            <InputField label="Adresse" name="address" />
            <InputField label="Groupe sanguin" name="bloodType" />
            <InputField label="Date de naissance" name="birthday" type="date" />

            <div className="flex flex-col gap-2 w-full md:w-1/4">
              <label className="text-xs text-gray-500">Sexe</label>
              <Field
                as="select"
                name="sex"
                className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full"
              >
                <option value="male">Homme</option>
                <option value="female">Femme</option>
              </Field>
              <ErrorMessage name="sex" component="p" className="text-xs text-red-400" />
            </div>

            <div className="flex flex-col gap-2 w-full md:w-1/4 justify-center">
              <label
                className="text-xs text-gray-500 flex items-center gap-2 cursor-pointer"
                htmlFor="img"
              >
                <Image src="/upload.png" alt="Upload icon" width={28} height={28} />
                <span>Télécharger une photo</span>
              </label>
              <input
                type="file"
                id="img"
                className="hidden"
                onChange={(event) => setFieldValue("img", event.currentTarget.files?.[0])}
              />
              {/* {errors.img && touched.img && (
                // <p className="text-xs text-red-400">{errors.img}</p>
              )} */}
            </div>
          </div>

          <button className="bg-blue-400 text-white p-2 rounded-md">
            {type === "create" ? "Enregistrer" : "Modifier"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TeacherForm;
