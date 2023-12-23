import React, { createContext } from "react";
import { Sidebar } from "@/components/Sidebar";
import UserHeader from "@/components/UserHeader";

const Module: React.FC = () => {
  const currentUser = {
    name: "John Doe",
    email: "john@example.com",
  };

  return (
    <div className="flex relative bg-primary w-full h-full">
      <div className="w-full fixed z-50 top-0 left-0">
        <UserHeader user={currentUser} />
      </div>
      <Sidebar  />
    </div>
  );
};

export default Module;
