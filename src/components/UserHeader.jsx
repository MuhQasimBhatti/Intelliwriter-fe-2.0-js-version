"use client";

import Link from "next/link";
import { IoMdNotificationsOff } from "react-icons/io";
import React, { useState, useRef, useEffect } from "react";
import { IconType } from "react-icons";
import { BiLogOut } from "react-icons/bi";
import { dropdownMenu, staticNotifications } from "../constants";
import { useAuth } from "@/context/AuthContext";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { IoMdMenu } from "react-icons/io";
import { useWebContext } from "@/context/ContextProvider";
import Notifications from "./Notifications";


const UserHeader = ({ user }) => {
  const { toggle, setToggle } = useWebContext();
  const router = useRouter();
  const [showNotifications, setShowNotifications] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { nameLetter, setTokens, setNameLetter } = useAuth();
  const sessionLetter =
    typeof window !== "undefined" ? sessionStorage.getItem("nameLetter") : null;
  const sessionName =
    typeof window !== "undefined" ? sessionStorage.getItem("name") : null;

  const logout = () => {
    ["tokens", "name", "nameLetter", "userId"].forEach((item) =>
      sessionStorage.removeItem(item)
    );
    setTokens(null);
    setNameLetter("");
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Logout Successfully!",
    });
    router.push("/");
  };

  const toggleNotifications = () => {
    setShowNotifications((prevState) => !prevState);
  };

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

  return (
    <div
      className={`flex items-center sticky top-0 z-20 justify-between px-2 md:px-8 py-2 sm:h-[80px] h-[60px] lg:ml-[250px] ${
        isScrolled ? "bg-[rgba(32,45,72,0.41)]" : "bg-transparent"
      }`}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-start gap-3">
        <IoMdMenu
          className="text-3xl p-0 m-0 pl-2 flex lg:hidden text-white"
          onClick={() => setToggle(!toggle)}
        />

        <div>
          <h2 className="text-white font-semibold md:text-lg text-sm">
            Hi, {sessionName || "Loading..."}
          </h2>
          <p className="text-[10px] md:text-sm text-slate-400">
            Welcome to intelliwriter
          </p>
        </div>
      </div>

      <div className="flex">
        <div className="flex items-center gap-3">
          {/* Notifications */}
          <span
            className="text-[22px] text-white bg-[rgba(32,45,72,0.41)] p-4 rounded-full cursor-pointer"
            onClick={toggleNotifications}
          >
            <IoMdNotificationsOff />
          </span>

          {/* User Avatar */}
          <div className="relative">
            <div
              className="w-10 h-10 rounded-full uppercase bg-slate-300 border-2 flex items-center justify-center text-lg cursor-pointer"
              onClick={() => setDropdown(!dropdown)}
            >
              {nameLetter || sessionLetter}
            </div>
            <ul
              className={`absolute w-40 right-0 bg-primary rounded-md overflow-hidden z-40  ${
                dropdown
                  ? "visible transition-all duration-200 translate-y-2"
                  : " invisible transition-all duration-200 translate-y-0 pointer-events-none "
              }`}
            >
              {dropdownMenu.map((item) =>
                item.title !== "Dashbaord" ? (
                  <Link key={item.id} href={item.link} passHref>
                    <li
                      className="py-3 px-5 flex items-center justify-start gap-2 text-white hover:bg-slate-500 transition duration-200"
                      onClick={() => setDropdown(!dropdown)}
                    >
                      <span className="text-xl">
                        {React.createElement(item.icon)}
                      </span>
                      <span>{item.title}</span>
                    </li>
                  </Link>
                ) : (
                  ""
                )
              )}

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

          {dropdown && (
            <div
              className="w-full h-screen z-20 fixed top-0 left-0 bg-black/30 transition-all duration-200"
              onClick={() => setDropdown(!dropdown)}
            />
          )}
        </div>
      </div>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div className="absolute right-0 mt-0 mr-2 z-30">
          <span className="py-2">Notification is empty!</span>
          {/* {showNotifications && (
            <div>
              <div
                className="w-full h-screen fixed bg-black/40 top-0 left-0"
                onClick={() => setShowNotifications(false)}
              ></div>

              <div className="absolute right-0 mt-0 md:mr-6 z-30">
                <Notifications
                  notifications={staticNotifications}
                  toggleNotifications={toggleNotifications}
                />
              </div>
            </div>
          )} */}
        </div>
      )}
    </div>
  );
};

export default UserHeader;
