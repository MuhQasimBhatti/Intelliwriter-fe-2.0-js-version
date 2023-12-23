"use client";

import { createContext, useContext, ReactNode, useState } from "react";


const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider= ({ children }) => {
  const [tokens, setTokens] = useState<string | null>(null);
  const [nameLetter, setNameLetter] = useState<string>("");

  const value= {
    tokens,
    setTokens,
    nameLetter,
    setNameLetter,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
