"use client";

import { toast } from "@/components/ui/use-toast";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Divider, Input } from "@nextui-org/react";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

interface Props {
  callbackUrl?: string;
}

const FormSchema = z.object({
  email: z.string().email("Entrez une adresse valide"),
  password: z.string({
    required_error: "Saisissez un mot de passe",
  }),
});

type InputType = z.infer<typeof FormSchema>;

const SignInForm = (props: Props) => {
  const router = useRouter();
  const [visiblePass, setVisiblePass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit: SubmitHandler<InputType> = async (data) => {
    const result = await signIn("credentials", {
      redirect: false,
      username: data.email,
      password: data.password,
    });
    if (!result?.ok) {
      toast({ description: result?.error });
      return;
    }
    router.push(props.callbackUrl ? props.callbackUrl : "/admin");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full gap-2 overflow-hidden border rounded-md shadow"
      >
        <div className="p-2 text-center bg-gradient-to-b from-white to-slate-200 dark:from-slate-700 dark:to-slate-900">
          CONNECTEZ-VOUS!
        </div>
        <div className="flex flex-col gap-2 p-2">
          <Input
            label="Email"
            {...register("email")}
            errorMessage={errors.email?.message}
          />
          <Input
            label="Mot de passe"
            {...register("password")}
            type={visiblePass ? "text" : "password"}
            errorMessage={errors.password?.message}
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
          <br />
          <br />
          <br />
          <br />      
          <br />
          <br />
          <br />     
        </div>
      </form>
    </>
  );
};

export default SignInForm;
