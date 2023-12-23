"use client";
import React, { ReactNode, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser, FaEnvelope, FaHome, FaUserTie } from "react-icons/fa";
import { BiSolidLock, BiMessageRoundedDetail } from "react-icons/bi";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { GrOrganization } from "react-icons/gr";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

type Props = {
  children: ReactNode;
};

interface ErrorResponse {
  response?: {
    data?: {
      error?: string;
    };
  };
}

interface ProfilePageLayoutProps {
  children: React.ReactNode;
  fullname?: string;
  email?: string;
  phone: number;
  password?: string;
  newpassword?: string;
  address: string;
  companyname: string;
  companyposition: string;
  shortbio: string;
}
const Layout: React.FC<ProfilePageLayoutProps | any> = ({
  children,
}: Props) => {
  const [fullname, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [companyPosition, setCompanyPosition] = useState<string>("");
  const [shortBio, setShortBio] = useState<string>("");
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [seePass, setSeePass] = useState<"text" | "password">("password");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [seeConfirmPass, setSeeConfirmPass] = useState<"text" | "password">(
    "password"
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (fullname === "") {
      setError("Full Name is required");
    } else if (!email) {
      setError("Email is required");
    } else if (password === "") {
      setError("Password is required");
    } else if (confirmPassword === "") {
      setError("Confirm Password is required");
    }
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    if (password === confirmPassword) {
      setError("Current password and new password cannot be the same.");
      return;
    }

    try {
      const response = await axios.post("/api/update-profile", {
        phone,
        fullname,
        email,
        companyName,
        companyPosition,
        password,
        confirmPassword,
        address,
      });
      setSuccess(response.data.message);
      setError(null);
    } catch (error) {
      const typedError = error as ErrorResponse;

      setSuccess(null);
      setError(typedError.response?.data?.error || "An error occurred");
    }
  };
  return (
    <div className="layout">
      <main>{children}</main>
      <div className="absolute top-14 right-0 md:px-20 md:py-5 p-6 w-full lg:w-[calc(100%-250px)] text-white">
        <h2 className="text-2xl lg:text-start text-center font-semibold pb-5">
          PROFILE
        </h2>
        <div className="rounded-[12px] py-6 bg-[rgba(32,45,72,0.41)] p-6 ">
          <div className="p-5 text-xl font-medium">General</div>
          <div className="p-5 border-t">
            <form onSubmit={handleSubmit}>
              <div className=" flex flex-col lg:flex-row justify-between">
                <label className="relative">
                  <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                    <FaUser size={16} />
                  </div>
                  Full Name <span className="text-red-500">*</span> <br />
                  <input
                    autoComplete="off"
                    name="fullname"
                    placeholder="Full Name"
                    type="text"
                    className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white pl-10"
                    value={fullname}
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
                <label className="relative">
                  <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                    <FaEnvelope size={16} />
                  </div>
                  Email <span className="text-red-500">*</span> <br />
                  <input
                    autoComplete="off"
                    name="email"
                    placeholder="Email"
                    type="email"
                    className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className=" flex flex-col lg:flex-row justify-between">
                <label className="relative">
                  <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2  ">
                    <MdOutlinePhoneAndroid size={18} />
                  </div>
                  Phone Number <span className="text-red-500">*</span> <br />
                  <input
                    autoComplete="off"
                    name="phone"
                    placeholder="Phone Number"
                    type="tel"
                    className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                    value={phone}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </label>
                <label className="relative">
                  <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2  ">
                    <FaHome size={16} />
                  </div>
                  Address <span className="text-red-500">*</span> <br />
                  <input
                    autoComplete="off"
                    name="address"
                    placeholder="Enter your Address"
                    type="text"
                    className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                    value={address}
                    required
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </label>
              </div>
              <div className="p-5 text-xl font-medium">Work</div>
              <div className="p-5 border-t">
                <div className=" flex flex-col lg:flex-row justify-between">
                  <label className="relative">
                    <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2  ">
                      <GrOrganization size={14} />
                    </div>
                    Company Name <br />
                    <input
                      autoComplete="off"
                      name="companyName"
                      placeholder="Company Name"
                      type="text"
                      className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </label>
                  <label className="relative">
                    <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                      <FaUserTie size={16} />
                    </div>
                    Company Position <br />
                    <input
                      autoComplete="off"
                      name="companyPosition"
                      placeholder="Type your job title"
                      type="text"
                      className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                      value={companyPosition}
                      onChange={(e) => setCompanyPosition(e.target.value)}
                    />
                  </label>
                </div>
                <label className="relative">
                  <div className="flex flex-row items-center gap-2 absolute left-3 top-[26%] ">
                    <BiMessageRoundedDetail size={22} />
                  </div>
                  Short Bio <br />
                  <textarea
                    autoComplete="off"
                    name="shortBio"
                    placeholder="Tell about your background, capabilities and work"
                    rows={4}
                    cols={30}
                    className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                    value={shortBio}
                    onChange={(e) => setShortBio(e.target.value)}
                  />
                </label>
              </div>

              <div className="p-5 text-lg lg:text-xl font-medium">
                Change Password
              </div>
              <div className="p-5 border-t">
                <div className=" flex flex-col lg:flex-row justify-between">
                  <label className="relative">
                    <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                      <BiSolidLock size={18} />
                    </div>
                    Current Password <span className="text-red-500">*</span>{" "}
                    <br />
                    <div className="flex items-center">
                      <input
                        name="password"
                        placeholder=" Current Password"
                        type={seePass}
                        className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                        value={password}
                        onChange={(e) => {
                          if (password === "") {
                            setSeePass("password");
                          }
                          setPassword(e.target.value);
                        }}
                      />
                      {/* Toggle password visibility */}
                      <div className="absolute right-[10px]">
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
                    </div>
                  </label>
                  <label className="relative">
                    <div className="flex flex-row items-center gap-2 absolute left-3 top-1/2 ">
                      <BiSolidLock size={18} />
                    </div>
                    New Password <span className="text-red-500">*</span> <br />
                    <div className="flex items-center">
                      <input
                        name="confirmPassword"
                        placeholder="New Password"
                        type={seeConfirmPass}
                        className="w-full px-12 py-3 rounded-[12px] bg-[rgba(32,45,72,0.41)] outline-none  focus:outline-[#640F6C] lg:!pl-[48px] mt-2 mb-4 text-white"
                        value={confirmPassword}
                        onChange={(e) => {
                          if (confirmPassword === "") {
                            setSeeConfirmPass("password");
                          }
                          setConfirmPassword(e.target.value);
                        }}
                      />
                      {/* Toggle confirm password visibility */}
                      <div className="absolute right-[10px]">
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
                    </div>
                  </label>
                </div>
              </div>

              {success && (
                <div className="p-2 rounded mb-2  bg-green-50 text-green-600">
                  {success}
                </div>
              )}
              {error && (
                <div className="p-2 rounded mb-2  bg-red-50 text-red-600">
                  {error}
                </div>
              )}
              <div className="flex justify-end">
                <button
                  className="text-white px-6 py-2 rounded bg-gradient-to-r from-[rgba(247,15,255,1)] to-[#2C63FF]"
                  type="submit"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
