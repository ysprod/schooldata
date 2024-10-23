/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { Button, Checkbox, Input, Link } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { z } from "zod";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordStrength } from "check-password-strength";
import PasswordStrength from "./PasswordStrength";
import { useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";



const FormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, "Le nom comprend au moins deux caractères")
      .max(45, "Le nom comprend au maximum 45 caractères")
      .regex(
        new RegExp("^[a-zA-Z]+$"),
        "Les caractères speciaux ne sont pas acceptés!"
      ),
    lastName: z
      .string()
      .min(2, "Le prenom comprend au moins deux caractères")
      .max(45, "Le prenom comprend au maximum 45 caractères")
      .regex(
        new RegExp("^[a-zA-Z]+$"),
        "Les caractères speciaux ne sont pas acceptés!"
      ),
    email: z.string().email("Saisissez une adresse email valide"),
    phone: z
      .string()
      .min(2, "Le prenom comprend au moins deux caractères")
      .max(45, "Le prenom comprend au maximum 45 caractères"),
    password: z
      .string()
      .min(6, "Le mot de passe doit être au moins 6 caractères ")
      .max(50, "Le mot de passe doit être inférieur à 50 caractères"),
    confirmPassword: z
      .string()
      .min(
        6,
        "La confirmation du mot de passe doit être au moins 6 caractères  "
      )
      .max(
        50,
        "La confirmation du mot de passe doit être inférieur à 50 caractères"
      ),
    accepted: z.literal(true, {
      errorMap: () => ({
        message: "Veuillez accepter les conditions d utilisation",
      }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Le mot de passe et la confirmation doivent être identiques",
    path: ["confirmPassword"],
  });

type InputType = z.infer<typeof FormSchema>;

const SignUpForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });
  const [passStrength, setPassStrength] = useState(0);
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setPassStrength(passwordStrength(watch().password).id);
  }, [watch().password]);
  const toggleVisblePass = () => setIsVisiblePass((prev) => !prev);

  const saveUser: SubmitHandler<InputType> = async (data) => {
    const { accepted, confirmPassword, ...user } = data;
    const formattedUser = {
      firstname: user.firstName,
      lastname: user.lastName,
      password: user.password,
      email: user.email,
      phone: user.phone,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    try {
      setIsSubmitting(true);
      const result = null;
      console.log(result);
      if (result) {
        router.push("/auth/signin");
      }
    } catch (error) {
      setIsSubmitting(false);
      toast({
        description:
          "Une erreur s est produite lors de l enregistrement du utilisateur.",
      });
      console.error(error);
    }
  };
  return (
    <form
      onSubmit={handleSubmit(saveUser)}
      className="grid grid-cols-2 gap-3 p-2 border rounded-md shadow place-self-stretch"
    >
      <Input
        errorMessage={errors.firstName?.message}
        isInvalid={!!errors.firstName}
        {...register("firstName")}
        label="Nom"
      />
      <Input
        errorMessage={errors.lastName?.message}
        isInvalid={!!errors.lastName}
        {...register("lastName")}
        label="Prenom"
      />
      <Input
        errorMessage={errors.email?.message}
        isInvalid={!!errors.email}
        {...register("email")}
        className="col-span-2"
        label="Email"
      />{" "}
      <Input
        errorMessage={errors.phone?.message}
        isInvalid={!!errors.phone}
        {...register("phone")}
        className="col-span-2"
        label="Téléphone"
      />{" "}
      <Input
        errorMessage={errors.password?.message}
        isInvalid={!!errors.password}
        {...register("password")}
        className="col-span-2"
        label="Mot de passe"
        type={isVisiblePass ? "text" : "password"}
        endContent={
          isVisiblePass ? (
            <EyeSlashIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisblePass}
            />
          ) : (
            <EyeIcon
              className="w-4 cursor-pointer"
              onClick={toggleVisblePass}
            />
          )
        }
      />
      <PasswordStrength passStrength={passStrength} />
      <Input
        errorMessage={errors.confirmPassword?.message}
        isInvalid={!!errors.confirmPassword}
        {...register("confirmPassword")}
        className="col-span-2"
        label="Confirmer le mot de passe"
        type={isVisiblePass ? "text" : "password"}
      />
      <Controller
        control={control}
        name="accepted"
        render={({ field }) => (
          <Checkbox
            onChange={field.onChange}
            onBlur={field.onBlur}
            className="col-span-2"
          >
            <span>
              {" "}
              J accepte les termes d utilisation
            </span>
          </Checkbox>
        )}
      />
      {!!errors.accepted && (
        <p className="text-red-500">{errors.accepted.message}</p>
      )}
      <div className="flex justify-center col-span-2">
        <Button
          disabled={isSubmitting}
          className="w-48 p-2 px-6 py-2 font-bold text-white bg-orange-400 rounded cursor-pointer btn-get-started scrollto md:p-4"
          color="primary"
          type="submit"
        >
          {isSubmitting ? "Connexion en cours..." : "Enregistrer"}
        </Button>
      </div>
    </form>
  );
};

export default SignUpForm;
