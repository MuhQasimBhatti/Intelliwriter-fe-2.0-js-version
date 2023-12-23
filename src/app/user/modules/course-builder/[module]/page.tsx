import React from "react";
import { Sidebar } from "@/components/Sidebar";
import UserHeader from "@/components/UserHeader";

const BlogRoutes: React.FC = () => {

  return (
    <div className="flex relative bg-primary w-full h-full">
      <div className="w-full fixed z-50 top-0 left-0">
        <UserHeader />
      </div>
      <Sidebar  />
    </div>
  );
};

export default BlogRoutes;
