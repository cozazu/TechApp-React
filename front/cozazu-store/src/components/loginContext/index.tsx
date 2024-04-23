"use client";
import { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";

interface AuthContextProps {
  token: string | null;
  setToken: (token: string | null) => void;
  count: number;
  setCount: (count: number) => void;
}

const LoginContext = createContext<AuthContextProps>({
  token: null,
  setToken: () => {},
  count: 0,
  setCount: () => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

export const LoginProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setToken(token);
    }
    const arraycart: { id: number; quantity: number }[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const totalproducts = arraycart.reduce(
      (acc: number, item: { id: number; quantity: number }) => {
        return acc + item.quantity;
      },
      0
    );

    setCount(totalproducts);
  }, []);

  useEffect(() => {
    if (token) {
      Cookies.set("token", token, {
        secure: true,
        sameSite: "strict",
      });
    } else {
      Cookies.remove("token");
    }
  }, [token]);

  return (
    <LoginContext.Provider value={{ token, setToken, count, setCount }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLoginContext = () => useContext(LoginContext);