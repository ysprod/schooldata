"use client";

import { toast } from "@/components/ui/use-toast";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { Button, Divider, Input } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase/firebase";

interface Props {
  callbackUrl?: string;
}

const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Entrez une adresse valide").required("Requis"),
  password: Yup.string().required("Saisissez un mot de passe"),
});

const SignInForm = (props: Props) => {
  const router = useRouter();
  const [visiblePass, setVisiblePass] = useState(false);

  const handleSignIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push(props.callbackUrl ? props.callbackUrl : "/admin");
    } catch (error: any) {
      toast({ description: error.message });
    }
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={SignInSchema}
      onSubmit={(values, { setSubmitting }) => {
        handleSignIn(values.email, values.password);
        setSubmitting(false);
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="flex flex-col w-full gap-2 overflow-hidden border rounded-md shadow">
          <div className="p-2 text-center bg-gradient-to-b from-white to-slate-200 dark:from-slate-700 dark:to-slate-900">
            CONNECTEZ-VOUS!
          </div>
          <div className="flex flex-col gap-2 p-2">
            <Field
              name="email"
              type="email"
              as={Input}
              label="Email"
              errorMessage={errors.email && touched.email ? errors.email : ""}
            />
            <Field
              name="password"
              type={visiblePass ? "text" : "password"}
              as={Input}
              label="Mot de passe"
              errorMessage={
                errors.password && touched.password ? errors.password : ""
              }
              endContent={
                <button
                  type="button"
                  onClick={() => setVisiblePass((prev) => !prev)}
                >
                  {visiblePass ? (
                    <EyeSlashIcon className="w-4" />
                  ) : (
                    <EyeIcon className="w-4" />
                  )}
                </button>
              }
            />
            <div className="flex items-center justify-center gap-2">
              <Button
                color="primary"
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
                className="p-2 px-6 py-2 font-bold text-white bg-green-600 rounded cursor-pointer md:p-4"
              >
                {isSubmitting ? "En cours..." : "Connexion"}
              </Button>
            </div>
          </div>
          <Link className="text-center " href={"/auth/forgotPassword"}>
            Mot de passe oublié?
          </Link>
          <Divider className="bg-white" />
          <div className="flex items-center justify-center gap-2">
            <Button
              as={Link}
              href="/auth/signup"
              className="p-2 px-6 py-1 m-0 font-bold text-white bg-orange-600 rounded cursor-pointer max-w-96 md:p-3"
            >
              Créer un nouveau compte
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SignInForm;
