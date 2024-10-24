"use client";

import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "@/components/ui/use-toast";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth } from "@/firebase/firebase";

// Schéma de validation avec Yup
const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Saisissez une adresse email valide").required("L'email est requis"),
});

const ForgotPasswordPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleForgotPassword = async (values: { email: string }) => {
    setIsSubmitting(true);
    try {
      await sendPasswordResetEmail(auth, values.email);
      toast({
        description: "Le lien de récupération du mot de passe vous a été envoyé!",
      });
    } catch (error) {
      toast({ description: "Une erreur s'est produite !" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h1 className="text-center text-white">RECUPERATION DE COMPTE</h1>
      <div className="grid items-center grid-cols-1 md:grid-cols-3">
        <Formik
          initialValues={{ email: "" }}
          validationSchema={forgotPasswordSchema}
          onSubmit={handleForgotPassword}
        >
          {({ isValid, dirty }) => (
            <Form className="flex flex-col gap-2 p-2 m-2 border rounded-md shadow">
              <div className="p-2 text-center text-white">Entrez votre email</div>

              <div>
                <Field name="email" as={Input} label="Email" placeholder="Votre email" />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <Button
                isLoading={isSubmitting}
                type="submit"
                disabled={isSubmitting || !isValid || !dirty}
                color="primary"
              >
                {isSubmitting ? "Veuillez patienter..." : "Récupérer le mot de passe"}
              </Button>
            </Form>
          )}
        </Formik>

        <Image
          src={"/forgotPass.png"}
          alt="Mot de passe oublié"
          width={500}
          height={500}
          className="col-span-2 place-self-center"
        />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
