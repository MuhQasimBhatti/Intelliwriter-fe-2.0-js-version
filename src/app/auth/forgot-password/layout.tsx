"use client";

import { useState } from "react";
import Link from "next/link";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import forgotPasswordUser from "@/utils/forgotPassword";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/Header"));

interface ForgotPasswordPageLayoutProps {
  children: React.ReactNode;
  email?: string | string[];
}

const ForgotPasswordPageLayout: React.FC<
  ForgotPasswordPageLayoutProps | any
> = (props) => {
  const [email, setEmail] = useState<string>("");
  const [forgotError, setForgotError] = useState<ForgotPasswordPageLayoutProps | null>(null);
  const router = useRouter();

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = { email };
      if (!email) {
        setForgotError({
          email: "Email is required",
          children: null,
        });
        return;
      } else {
        setForgotError({
          email: "",
          children: null,
        });
        const result = await forgotPasswordUser(userData);
        if (result.success) {
         
          Swal.fire({
            icon: "success",
            title: "Success",
            text: result.message,
          });
          router.push("/auth/reset-password");
        } else {
          Swal.fire({
            icon: "error",
            title: "Ooops...",
            text: result.message,
          });
        }
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Ooops...",
        text: "Something went wrong!",
      });

    }
  };

  return (
    <>
      <Header />
      <section className="w-full bg-contact py-16 bg-bottom bg-no-repeat bg-cover flex items-center justify-center">
        <div className="container rounded shadow-lg md:max-w-xl mx-3">
          <div className="h-full border-2 border-opacity-10 border-white w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-5 px-5 pt-5">
            <form onSubmit={submitForm}>
              <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white">
                <div className="text-center font-bold p-3 text-[20px] lg:text-4xl">
                  Forgot Password
                </div>
                <label className="flex items-center">
                  <div className="absolute lg:left-14 left-[2.5rem]">
                    <FaEnvelope />
                  </div>
                  <input
                    autoComplete="off"
                    name="title"
                    placeholder="Email"
                    type="email"
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                
                {forgotError?.email && (
                  <p className="text-red-400 text-[16px] p-2">
                    {forgotError.email}
                  </p>
                )}
    
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] py-3 hover:opacity-90 transition-all duration-300 px-[35px] text-white font-semibold rounded-full"
                >
                  Reset Password
                </button>
              </div>
            </form>

            <p className="pb-6 !m-0 text-center text-white lg:pt-0 pt-3">
              Remembered your password?{" "}
              <span className="text-red-400">
                <Link href="/auth/login">Login</Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ForgotPasswordPageLayout;
