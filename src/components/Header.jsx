"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { NAV_LINKS, dropdownMenu } from "../constants";
import { useAuth } from "@/context/AuthContext";
import { IoIosClose } from "react-icons/io";
import { useRouter, usePathname } from "next/navigation";
import Swal from "sweetalert2";
import { BiLogOut } from "react-icons/bi";
import { Logo, Hero_Circle, Menu } from "../../public";

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const { tokens, nameLetter, setTokens, setNameLetter } = useAuth();
  const sessionTokens =
    typeof window !== "undefined" ? sessionStorage.getItem("tokens") : null;
  const sessionLetter =
    typeof window !== "undefined" ? sessionStorage.getItem("nameLetter") : null;

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const logout = () => {
    sessionStorage.removeItem("tokens");
    sessionStorage.removeItem("name");
    sessionStorage.removeItem("nameLetter");
    sessionStorage.removeItem("userId");
    setTokens(null);
    setNameLetter("");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Logout Successfully!",
    });
    router.push("/");
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    if (showSidebar) {
      toggleSidebar();
    }
  };

  const pathname = usePathname();

  return (
    <>
      <div className="absolute top-0 left-0 bg-none">
        <Image
          src={Hero_Circle}
          alt="Hero Icons Image"
          width={200}
          height={200}
        />
      </div>

      <header className="container mx-auto flex items-center xl:pt-4 justify-center sticky top-0 z-50 w-full">
        <nav
          className={`py-3 md:px-8 shadow-md flex md:text-[14px] lg:text-[14px]  items-center justify-between  md:rounded-[12px] lg:rounded-[12px] w-full lg:w-11/12 md:w-11/12 transition duration-500 ease-in-out ${
            isScrolled ? "bg-[#640F6C]" : "bg-primary-two"
          }`}
        >
          <div className="px-4">
            <Link href="/" passHref>
              <Image
                src={Logo}
                alt="Logo"
                width={200}
                height={18}
                className="object-contain w-36 xl:w-44"
              />
            </Link>
          </div>

          <ul className="space-x-4 lg:pl-0 md:pl-6 md:pr-8 lg:pb-0 md:pb-5 lg:pt-0 md:pt-5 text-white hidden lg:flex">
            {NAV_LINKS.map((menuItem, index) => (
              <li key={index}>
                <Link
                  href={menuItem.route}
                  passHref
                  className={`py-1 ${
                    pathname == menuItem.route
                      ? `${
                          isScrolled
                            ? "border-b-[3px] border-white"
                            : "border-b-[3px] border-[#af4db7]"
                        }`
                      : ""
                  }
                  ${
                    isScrolled
                      ? "hover:border-b-[3px] hover:border-white"
                      : "hover:border-b-[3px] hover:border-[#af4db7]"
                  }`}
                >
                  {menuItem.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex item-center gap-2">
            {(tokens || sessionTokens) !== null ? (
              <div className="relative">
                <div
                  className="w-10 h-10 rounded-full uppercase bg-slate-300 border-2 flex items-center justify-center text-lg cursor-pointer"
                  onClick={() => setDropdown(!dropdown)}
                >
                  {nameLetter || sessionLetter}
                </div>
                <ul
                  className={`absolute w-40 right-0 bg-primary rounded-md overflow-hidden ${
                    dropdown
                      ? "visible transition-all duration-200 translate-y-2"
                      : " invisible transition-all duration-200 translate-y-0 pointer-events-none "
                  }`}
                >
                  {dropdownMenu.map((item) => (
                    <Link key={item.id} href={item.link} passHref>
                      <li
                        className="py-3 px-5 flex items-center justify-start gap-2 text-white hover:bg-slate-500 transition duration-200"
                        onClick={() => setDropdown(!dropdown)}
                      >
                        <span className="text-xl">{item.icon}</span>
                        <span>{item.title}</span>
                      </li>
                    </Link>
                  ))}

                  <li
                    className="py-3 px-5 flex items-center justify-start gap-2 text-white hover:bg-slate-500 transition duration-200 cursor-pointer"
                    onClick={() => {
                      setDropdown(!dropdown);
                      logout();
                    }}
                  >
                    <span className="text-xl">
                      <BiLogOut />
                    </span>
                    <span>Logout</span>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="lg:block hidden w-fit rounded-3xl p-0.5 bg-gradient-to-r from-[rgb(247,15,255,1)] to-[#2C63FF]">
                <Link href="/auth/login">
                  <CustomButton
                    title="Login / Register"
                    btnType="button"
                    containerStyles="bg-black hover:opacity-75 text-white py-2 px-2 lg:px-9 rounded-3xl"
                  />
                </Link>
              </div>
            )}

            <button
              onClick={toggleSidebar}
              className="lg:hidden text-white mr-4 md:mr-0 focus:outline-none"
            >
              <Image src={Menu} alt="Menu" width={24} height={24} />
            </button>
          </div>
        </nav>

        {showSidebar && (
          <aside
            className="lg:hidden block fixed inset-0 bg-[#121324] z-50 w-full"
            onClick={closeSidebar}
          >
            <div className="flex justify-between items-center pr-4">
              <Link href="/">
                <Image
                  src="/Logo.webp"
                  alt="Logo"
                  width={180}
                  height={18}
                  className=" pl-5 pt-3  xl:w-44"
                />
              </Link>

              {/* Close icon */}
              <IoIosClose
                className="text-white absolute top-3 text-3xl right-2"
                onClick={closeSidebar}
              />
            </div>

            <div className="px-8 pt-3">
              <ul className="text-white">
                {NAV_LINKS.map((menuItem, index) => (
                  <li key={index} className="py-2">
                    <Link href={menuItem.route} passHref>
                      {menuItem.title}
                    </Link>
                  </li>
                ))}
                <div className="flex w-fit rounded-full mt-1 p-0.5 bg-gradient-to-r from-[rgb(247,15,255,1)] to-[#2C63FF]">
                  <Link
                    href="/auth/login"
                    className="bg-black text-white py-2 px-3 lg:px-9 rounded-full"
                  >
                    Register / Login
                  </Link>
                </div>
              </ul>
            </div>
          </aside>
        )}
      </header>

      {dropdown && (
        <div
          className="w-full h-screen z-30 fixed top-0 left-0 bg-black/30 transition-all duration-200"
          onClick={() => setDropdown(!dropdown)}
        />
      )}
    </>
  );
};

export default Header;
