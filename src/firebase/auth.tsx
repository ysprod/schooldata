"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { onAuthStateChanged, signOut as authSignOut, User } from "firebase/auth";

import { NextUIProvider } from "@nextui-org/react";
import { auth } from "./firebase";

interface AuthUser {
  uid?:string;
  id?: string;
  email: string | null;
  name: string | null;
}

interface AuthContextType {
  authUser: AuthUser | null;
  isLoading: boolean;
  setAuthUser: (user: AuthUser | null) => void;  
  signOut: () => void;
}

export const AuthUserContext = createContext<AuthContextType | undefined>(undefined);

export  function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [isLoading, setLoading] = useState(true);

  const clear = () => {
    setAuthUser(null);
    setLoading(false);
  };

  const authStateChanged = (user: User | null) => {
    setLoading(true);
    if (!user) {
      clear();
      return;
    }

    setAuthUser({
      id: user.uid,
      email: user.email,
      name: user.displayName,
    });
    setLoading(false);
  };

  const signOut = () => {
    authSignOut(auth).then(() => clear());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  return {
    authUser,
    isLoading,
    setAuthUser, // Expose setAuthUser ici
    signOut,
  };
}

export const AuthUserProvider = ({ children }: { children: ReactNode }) => {
  const auth = useFirebaseAuth();

  return (
    <AuthUserContext.Provider value={auth}>
      <NextUIProvider>{children}</NextUIProvider>
    </AuthUserContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthUserContext);

  if (context === undefined) {
    throw new Error('useAuth doit être utilisé à l’intérieur du AuthUserProvider');
  }

  return context;
};
