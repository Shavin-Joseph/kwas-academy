"use client";

import React, { createContext, useContext, useState } from "react";
import { UserProfile } from "@/types";

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, pass: string) => Promise<boolean>;
  loginAsDemo: (role?: "user" | "admin") => void;
  register: (name: string, email: string, pass: string) => Promise<boolean>;
  logout: () => void;
}

const AUTH_STORAGE_KEY = "kwas_academy_user_session";

const DEMO_USER: UserProfile = {
  id: "usr_alex_dev",
  name: "Alex Developer",
  email: "alex@kwasacademy.dev",
  role: "user",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  createdAt: "2026-01-15",
};

const DEMO_ADMIN: UserProfile = {
  id: "usr_admin_kwas",
  name: "Prof. Kenneth Kwas",
  email: "admin@kwasacademy.dev",
  role: "admin",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  createdAt: "2025-11-01",
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(() => {
    if (typeof window !== "undefined") {
      try {
        const savedUser = localStorage.getItem(AUTH_STORAGE_KEY);
        if (savedUser) {
          return JSON.parse(savedUser);
        }
      } catch {
        // fallback
      }
    }
    return DEMO_USER;
  });

  const [isLoading, setIsLoading] = useState(false);

  const login = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 300));
    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name: email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
      email,
      role: email.includes("admin") ? "admin" : "user",
      createdAt: new Date().toISOString().split("T")[0],
    };
    setUser(newUser);
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
    }
    setIsLoading(false);
    return true;
  };

  const loginAsDemo = (role: "user" | "admin" = "user") => {
    const selected = role === "admin" ? DEMO_ADMIN : DEMO_USER;
    setUser(selected);
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(selected));
    }
  };

  const register = async (name: string, email: string): Promise<boolean> => {
    setIsLoading(true);
    await new Promise((res) => setTimeout(res, 300));
    const newUser: UserProfile = {
      id: `usr_${Date.now()}`,
      name,
      email,
      role: "user",
      createdAt: new Date().toISOString().split("T")[0],
    };
    setUser(newUser);
    if (typeof window !== "undefined") {
      localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(newUser));
    }
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setUser(null);
    if (typeof window !== "undefined") {
      localStorage.removeItem(AUTH_STORAGE_KEY);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        loginAsDemo,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
