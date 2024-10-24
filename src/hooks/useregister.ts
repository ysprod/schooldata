import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { registerSchema } from "@/schemas/userschema";
import { useAuth } from "@/firebase/auth";
import { useState } from "react";
import { auth } from "@/firebase/firebase";
import { createuser } from "@/crud/user";
import { User } from "@/lib/interfaces";

const provider = new GoogleAuthProvider();

export const useRegister = () => {
  const initialValues = {
    nom: "",
    prenoms: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    accepted: false,
  };
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { setAuthUser } = useAuth();

  const handleNavigate = (url) => { router.push(`/${url}`); };

  const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const { user } = result;
      const luser: User = {
        nom: user.displayName || "",
        email: user.email,
        phone: user.phoneNumber || "",
      };
      await createuser(luser, user.uid);
      setAuthUser({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      });
      handleNavigate("admin");
    } catch (error) {
      console.error("Error..", error);
    }
  };

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    const { email, password, accepted, confirmPassword, ...user } = values;
    const formattedUser: User = {
      nom: user.nom,
      prenoms: user.prenoms,
      email: email,
      phone: user.phone,
      displayName: `${user.nom} ${user.prenoms}`
    };

    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const { user: authUser } = result;
      await updateProfile(authUser, { displayName: `${user.nom} ${user.prenoms}` });
      await createuser(formattedUser, authUser.uid);
      setAuthUser({
        uid: authUser.uid,
        email: authUser.email,
        name: authUser.displayName,
      });
      handleNavigate("admin");
      resetForm();
    } catch (error) {
      console.error("Error during registration:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    initialValues,
    schema: registerSchema,
    handleSubmit,
    navigate: handleNavigate,
    googleSignUp: handleGoogleSignUp,
    isSubmitting,
  };
};