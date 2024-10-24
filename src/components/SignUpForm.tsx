import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { Button, Checkbox, Input } from "@nextui-org/react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FcGoogle } from "react-icons/fc";
import { useRegister } from "@/hooks/useregister";

const SignUpForm = () => {
  const { isSubmitting, initialValues, schema, handleSubmit, navigate, googleSignUp } = useRegister();
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const toggleVisiblePass = () => setIsVisiblePass((prev) => !prev);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className="grid grid-cols-2 gap-3 p-2 border rounded-md shadow place-self-stretch">
        <div className="m-auto">
          <div className="m-auto">
            <p className="mt-6 ml-1">
              Vous avez déjà un compte ?{" "}
              <span className="underline hover:text-blue-400 cursor-pointer"
                onClick={() => { navigate("login"); }}
              >
                Se connecter
              </span>
            </p>
            <div
              className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group"
              onClick={() => { googleSignUp(); }}
            >
              <FcGoogle size={22} />
              <span className="font-medium text-black group-hover:text-white">
                Se connecter avec Google
              </span>
            </div>
          </div>
          <div>
            <br />
            <h2 className="text-5xl font-semibold block text-nowrap">Inscription Ecole +</h2>
            <Field name="nom">
              {({ field, meta }: any) => (
                <Input
                  {...field}
                  label="Nom"
                  errorMessage={meta.touched && meta.error}
                  isInvalid={!!meta.error && meta.touched} />
              )}
            </Field>
            <Field name="prenoms">
              {({ field, meta }: any) => (
                <Input
                  {...field}
                  label="Prénoms"
                  errorMessage={meta.touched && meta.error}
                  isInvalid={!!meta.error && meta.touched} />
              )}
            </Field>
            <Field name="email">
              {({ field, meta }: any) => (
                <Input
                  {...field}
                  label="Email"
                  className="col-span-2"
                  errorMessage={meta.touched && meta.error}
                  isInvalid={!!meta.error && meta.touched} />
              )}
            </Field>
            <Field name="phone">
              {({ field, meta }: any) => (
                <Input
                  {...field}
                  label="Téléphone"
                  className="col-span-2"
                  errorMessage={meta.touched && meta.error}
                  isInvalid={!!meta.error && meta.touched} />
              )}
            </Field>
            <Field name="password">
              {({ field, meta }: any) => (
                <Input
                  {...field}
                  label="Mot de passe"
                  className="col-span-2"
                  type={isVisiblePass ? "text" : "password"}
                  endContent={isVisiblePass ? (
                    <EyeSlashIcon
                      className="w-4 cursor-pointer"
                      onClick={toggleVisiblePass} />
                  ) : (
                    <EyeIcon
                      className="w-4 cursor-pointer"
                      onClick={toggleVisiblePass} />
                  )}
                  errorMessage={meta.touched && meta.error}
                  isInvalid={!!meta.error && meta.touched} />
              )}
            </Field>
            <Field name="confirmPassword">
              {({ field, meta }: any) => (
                <Input
                  {...field}
                  label="Confirmer le mot de passe"
                  className="col-span-2"
                  type={isVisiblePass ? "text" : "password"}
                  errorMessage={meta.touched && meta.error}
                  isInvalid={!!meta.error && meta.touched} />
              )}
            </Field>
            <Field name="accepted" type="checkbox">
              {({ field, meta }: any) => (
                <Checkbox
                  {...field}
                  className="col-span-2"
                  isInvalid={!!meta.error && meta.touched}
                >
                  <span>J`accepte les termes d`utilisation</span>
                </Checkbox>
              )}
            </Field>
            <ErrorMessage name="accepted" component="p" className="text-red-500" />
            <br /> <br />
            <div className="flex justify-center col-span-2 pt-4">
              <Button
                disabled={isSubmitting}
                className="w-48 p-2 px-6 py-2 font-bold text-white bg-orange-400 rounded cursor-pointer btn-get-started scrollto md:p-4"
                color="primary"
                type="submit"
              >
                {isSubmitting ? "Connexion en cours..." : "Enregistrer"}
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;