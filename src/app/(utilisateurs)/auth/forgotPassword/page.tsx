"use client";

 
import { toast } from "@/components/ui/use-toast";
//import { forgotPassword } from "@/lib/actions/authActions/authActions";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";


export const forgotpasswordFormSchema = z.object({
    email: z.string().email("Saisissez une adresse email valide"),
  });

type InputType = z.infer<typeof forgotpasswordFormSchema>;

const ForgotPasswordPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(forgotpasswordFormSchema),
  });

  const submitRequest: SubmitHandler<InputType> = async (data) => {
    try {
      //   const result = await forgotPassword(data.email);
      //   if (result)
      //     toast({
      //       description:
      //         "Le lien de recuperation du mot de passe vous a été envoyé!",
      //     });
      reset();
    } catch (e) {
      toast({ description: "une erreur s&#39;est produite !" });
    }
  };
  return (
    <>
      <h1 className="text-center text-white">RECUPERATION DE COMPTE</h1>
      <div className="grid items-center grid-cols-1 md:grid-cols-3">
        <form
          className="flex flex-col gap-2 p-2 m-2 border rounded-md shadow"
          onSubmit={handleSubmit(submitRequest)}
        >
          <div className="p-2 text-center text-white">Entrez votre email</div>
          <Input
            label="Email"
            {...register("email")}
            errorMessage={errors.email?.message} />
          <Button
            isLoading={isSubmitting}
            type="submit"
            disabled={isSubmitting}
            color="primary"
          >
            {isSubmitting
              ? "Veuillez patienter..."
              : "Recuperer le mot de passe"}
          </Button>
        </form>
        <Image
          src={"/forgotPass.png"}
          alt="Mot de passe oublié"
          width={500}
          height={500}
          className="col-span-2 place-self-center" />
      </div>
    </>
  );
};

export default ForgotPasswordPage;
