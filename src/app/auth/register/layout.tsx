"use client";

import Swal from "sweetalert2";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaEnvelope, FaUser } from "react-icons/fa";
import { BiSolidLock } from "react-icons/bi";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import registerUser from "@/utils/registerUser";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer"));
const Header = dynamic(() => import("@/components/Header"));

interface RegisterPageLayoutProps {
  children: React.ReactNode;
  name?: string;
  email?: string;
  password?: string;
  confirmpassword?: string;
}

const RegisterPageLayout: React.FC<RegisterPageLayoutProps | any> = (props) => {
  const router = useRouter();
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [seePass, setSeePass] = useState<"text" | "password">("password");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [seeConfirmPass, setSeeConfirmPass] = useState<"text" | "password">(
    "password"
  );
  const [registerError, setRegisterError] =
    useState<RegisterPageLayoutProps | null>(null);

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userData = { name, email, password };

      const result = await registerUser(userData);
      if (!name) {
        setRegisterError({
          name: "Name is required",
          children: null,
        });
      } else if (!email) {
        setRegisterError({
          email: "Email is required",
          children: null,
        });
      } else if (password === "") {
        setRegisterError({
          password: "Password is required",
          children: null,
        });
      } else if (confirmPassword === "") {
        setRegisterError({
          confirmpassword: "Confirm Password is required",
          children: null,
        });
      } else if (password !== confirmPassword) {
        Swal.fire({
          icon: "error",
          title: "Passwords do not match",
          text: "Please make sure the passwords match.",
        });
        return;
      } else if (result.success) {
        setRegisterError({
          name: "",
          email: "",
          password: "",
          confirmpassword: "",
          children: null,
        });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Registration done Successfully!",
        });
        router.push("/auth/login");
      } else {
        Swal.fire({
          icon: "error",
          title: "Ooops...",
          text: result.message,
        });
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
          <div className="h-full border-2 border-white border-opacity-10 w-full bg-slate-800 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 space-y-5 px-5 pt-5">
            <form onSubmit={submitForm} autoComplete="off">
              <div className="flex flex-col lg:p-5 p-0 gap-y-6 text-white">
                <div className="text-center font-bold p-3 text-[20px] lg:text-4xl">
                  Register
                </div>
                {/* Name input */}
                <label className="flex items-center">
                  <div className="absolute lg:left-14 left-[2.5rem]">
                    <FaUser />
                  </div>
                  <input
                    autoComplete="off"
                    name="name"
                    placeholder="Name"
                    type="text"
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                {registerError?.name && (
                  <p className="text-red-400 text-[16px] p-2">
                    {registerError.name}
                  </p>
                )}

                {/* Email input */}
                <label className="flex items-center">
                  <div className="absolute lg:left-14 left-[2.5rem]">
                    <FaEnvelope />
                  </div>
                  <input
                    autoComplete="off"
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
                {registerError?.email && (
                  <p className="text-red-400 text-[16px] p-2">
                    {registerError.email}
                  </p>
                )}

                {/* Password input */}
                <label className="flex items-center">
                  <div className="absolute lg:left-14 left-[2.5rem]">
                    <BiSolidLock size={24} />
                  </div>
                  <input
                    name="password"
                    placeholder="Password"
                    type={seePass}
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                    value={password}
                    onChange={(e) => {
                      if (password === "") {
                        setSeePass("password");
                      }
                      setPassword(e.target.value);
                    }}
                  />
                  {/* Toggle password visibility */}
                  <div className="absolute right-[60px]">
                    {password === "" ? null : seePass === "text" ? (
                      <AiFillEye
                        size={24}
                        onClick={() => setSeePass("password")}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        size={24}
                        onClick={() => setSeePass("text")}
                      />
                    )}
                  </div>
                </label>
                {registerError?.password && (
                  <p className="text-red-400 text-[16px] p-2">
                    {registerError.password}
                  </p>
                )}

                {/* Confirm password */}
                <label className="flex items-center">
                  <div className="absolute lg:left-14 left-[2.5rem]">
                    <BiSolidLock size={24} />
                  </div>
                  <input
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    type={seeConfirmPass}
                    className="contact-input bg-gradient-to-b !pl-[48px] from-[#0F1333] to-[#1D203F] "
                    value={confirmPassword}
                    onChange={(e) => {
                      if (confirmPassword === "") {
                        setSeeConfirmPass("password");
                      }
                      setConfirmPassword(e.target.value);
                    }}
                  />
                  {/* Toggle confirm password visibility */}
                  <div className="absolute right-[60px]">
                    {confirmPassword === "" ? null : seeConfirmPass ===
                      "text" ? (
                      <AiFillEye
                        size={24}
                        onClick={() => setSeeConfirmPass("password")}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        size={24}
                        onClick={() => setSeeConfirmPass("text")}
                      />
                    )}
                  </div>
                </label>
                {registerError?.confirmpassword && (
                  <p className="text-red-400 text-[16px] p-0 m-0">
                    {registerError.confirmpassword}
                  </p>
                )}

                <button
                  type="submit"
                  className="bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF] py-3 hover:opacity-90 transition-all duration-300 px-[35px] text-white font-semibold rounded-full"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="pb-6 !m-0 text-center text-white lg:pt-0 pt-3">
              Already have an account?{" "}
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

export default RegisterPageLayout;
