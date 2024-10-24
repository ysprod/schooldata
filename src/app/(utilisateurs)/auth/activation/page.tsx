"use client";

import { useState } from "react";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { toast } from "@/components/ui/use-toast";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { auth } from "@/firebase/firebase";

// Schéma de validation avec Yup pour l'inscription
const signupSchema = Yup.object().shape({
    email: Yup.string().email("Saisissez une adresse email valide").required("L'email est requis"),
    password: Yup.string()
        .min(6, "Le mot de passe doit contenir au moins 6 caractères")
        .required("Le mot de passe est requis"),
});

const AccountActivationPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Fonction pour créer un compte et envoyer l'email de vérification
    const handleSignUp = async (values: { email: string; password: string }) => {
        setIsSubmitting(true);
        try {
            // Création de l'utilisateur
            const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
            const user = userCredential.user;

            // Envoi de l'email de vérification
            await sendEmailVerification(user);

            toast({
                description: "Un e-mail d'activation vous a été envoyé ! Vérifiez votre boîte de réception.",
            });
        } catch (error) {
            toast({ description: "Une erreur s'est produite lors de l'inscription !" });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <h1 className="text-center text-white">ACTIVATION DE COMPTE CLIENT</h1>
            <div className="grid items-center grid-cols-1 md:grid-cols-3">
                <Formik
                    initialValues={{ email: "", password: "" }}
                    validationSchema={signupSchema}
                    onSubmit={handleSignUp}
                >
                    {({ isValid, dirty }) => (
                        <Form className="flex flex-col gap-2 p-2 m-2 border rounded-md shadow">
                            <div className="p-2 text-center text-white">Entrez vos informations pour créer un compte</div>

                            <div>
                                <Field name="email" as={Input} label="Email" placeholder="Votre email" />
                                <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                            </div>

                            <div>
                                <Field
                                    name="password"
                                    as={Input}
                                    label="Mot de passe"
                                    type="password"
                                    placeholder="Votre mot de passe"
                                />
                                <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                            </div>

                            <Button
                                isLoading={isSubmitting}
                                type="submit"
                                disabled={isSubmitting || !isValid || !dirty}
                                color="primary"
                            >
                                {isSubmitting ? "Veuillez patienter..." : "Créer un compte et activer"}
                            </Button>
                        </Form>
                    )}
                </Formik>

                <Image
                    src={"/accountActivation.png"}
                    alt="Activation de compte"
                    width={500}
                    height={500}
                    className="col-span-2 place-self-center"
                />
            </div>
        </>
    );
};

export default AccountActivationPage;
