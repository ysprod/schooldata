"use client";
import { useRegister } from "@/hooks/useregister";
import { useAuth } from "@/firebase/auth";
import { useEffect } from "react";
import SignupPage from "./(utilisateurs)/auth/signup/page";
import LoaderCpt from "@/components/loader";

const Homepage = () => {
  const { navigate } = useRegister();
  const { isLoading, authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      navigate("admin");
    }
  }, [authUser, navigate]);

  if (isLoading) {
    return <LoaderCpt />;
  }

  return <SignupPage />;
};

export default Homepage;
