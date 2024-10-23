"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { Input, Select, Button } from "@nextui-org/react"; // Importation des composants NextUI
import { Formik, Field, Form, ErrorMessage } from "formik";

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Le nom d'utilisateur doit comporter au moins 3 caractères")
    .max(20, "Le nom d'utilisateur doit comporter au maximum 20 caractères")
    .required("Nom d'utilisateur est requis"),
  email: Yup.string()
    .email("Adresse e-mail non valide")
    .required("Email est requis"),
  password: Yup.string()
    .min(8, "Le mot de passe doit comporter au moins 8 caractères")
    .required("Mot de passe est requis"),
  firstName: Yup.string().required("Prénom est requis"),
  lastName: Yup.string().required("Nom de famille est requis"),
  phone: Yup.string().required("Téléphone est requis"),
  address: Yup.string().required("Adresse est requise"),
  bloodType: Yup.string().required("Groupe sanguin est requis"),
  birthday: Yup.date().required("Date de naissance est requise"),
  sex: Yup.string().required("Sexe est requis"),
});

const StudentForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
    // Ajoutez ici votre logique de soumission, par exemple, envoyer les données à un serveur
    // Exemple :
    // fetch('/api/students', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(values),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('Success:', data);
    // })
    // .catch((error) => {
    //   console.error('Error:', error);
    // });
  };

  return (
    <Formik
      initialValues={{
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        phone: "",
        address: "",
        bloodType: "",
        birthday: "",
        sex: "",
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ errors, touched }) => (
        <Form className="flex flex-col gap-8">
          <h1 className="text-xl font-semibold">Créer un apprenant</h1>
          <span className="text-xs text-gray-400 font-medium">
            Informations d&apos;authentification
          </span>

          <div className="flex justify-between flex-wrap gap-4">
            <Field name="username">
              {({ field }) => (
                <Input
                  {...field}
                  label="Nom d'utilisateur"
                  error={touched.username && errors.username ? errors.username : undefined}
                />
              )}
            </Field>
            <Field name="email">
              {({ field }) => (
                <Input
                  {...field}
                  label="Email"
                  error={touched.email && errors.email ? errors.email : undefined}
                />
              )}
            </Field>
            <Field name="password">
              {({ field }) => (
                <Input
                  {...field}
                  label="Mot de passe"
                  type="password"
                  error={touched.password && errors.password ? errors.password : undefined}
                />
              )}
            </Field>
          </div>

          <span className="text-xs text-gray-400 font-medium">
            Informations personnelles
          </span>

          <div className="flex justify-between flex-wrap gap-4">
            <Field name="firstName">
              {({ field }) => (
                <Input
                  {...field}
                  label="Prénom"
                  error={touched.firstName && errors.firstName ? errors.firstName : undefined}
                />
              )}
            </Field>
            <Field name="lastName">
              {({ field }) => (
                <Input
                  {...field}
                  label="Nom de famille"
                  error={touched.lastName && errors.lastName ? errors.lastName : undefined}
                />
              )}
            </Field>
            <Field name="phone">
              {({ field }) => (
                <Input
                  {...field}
                  label="Téléphone"
                  error={touched.phone && errors.phone ? errors.phone : undefined}
                />
              )}
            </Field>
            <Field name="address">
              {({ field }) => (
                <Input
                  {...field}
                  label="Adresse"
                  error={touched.address && errors.address ? errors.address : undefined}
                />
              )}
            </Field>
            <Field name="bloodType">
              {({ field }) => (
                <Input
                  {...field}
                  label="Groupe sanguin"
                  error={touched.bloodType && errors.bloodType ? errors.bloodType : undefined}
                />
              )}
            </Field>
            <Field name="birthday">
              {({ field }) => (
                <Input
                  {...field}
                  label="Date de naissance"
                  type="date"
                  error={touched.birthday && errors.birthday ? errors.birthday : undefined}
                />
              )}
            </Field>

            <div className="flex flex-col gap-2 w-full md:w-1/4">
              <label className="text-xs text-gray-500">Sexe</label>
              <Field name="sex">
                {({ field }) => (
                  <Select
                    {...field}
                    label="Sexe"
                    error={touched.sex && errors.sex ? errors.sex : undefined}
                  >
                    {/* <Select.Option value="">Choisir</Select.Option>
                    <Select.Option value="male">Homme</Select.Option>
                    <Select.Option value="female">Femme</Select.Option> */}
                  </Select>
                )}
              </Field>
              <ErrorMessage name="sex" component="p" className="text-xs text-red-400" />
            </div>
          </div>
          <Button type="submit" className="bg-blue-400 text-white p-2 rounded-md">
            Enregistrer
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default StudentForm;
