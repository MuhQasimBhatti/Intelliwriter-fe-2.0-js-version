import React from "react";
import { AuthProvider } from "@/context/AuthContext";
import { ContextProvider } from "@/context/ContextProvider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Intelliwriter - AI Based Content Writer",
  description: "Powered by Robx.AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ContextProvider>
        <AuthProvider>
            <body className="relative">{children}</body>
        </AuthProvider>
      </ContextProvider>
    </html>
  );
}
