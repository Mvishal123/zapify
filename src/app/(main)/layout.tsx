import React from "react";

import Sidebar from "@/components/sidebar";
import Infobar from "@/components/infobar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="w-full">
        <Infobar />
        {children}
      </div>
    </div>
  );
};

export default Layout;
