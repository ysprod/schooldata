"use client";
import { useRegister } from "@/hooks/useregister";
import { useAuth } from "@/firebase/auth";
import { useEffect } from "react";
import Debut from "../components/debut";

const Homepage = () => {
  const { navigate } = useRegister();
  const { authUser } = useAuth();

  useEffect(() => {
    if (authUser) {
      navigate("admin");
    }
  }, [authUser, navigate]);

  return <Debut />;
};

export default Homepage;
