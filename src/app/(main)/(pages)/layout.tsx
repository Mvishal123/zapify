import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="h-screen overflow-scroll rounded-l-3xl 
    border-l-[1px] border-t-[1px] border-muted-foreground/20 pb-20"
    >
      {children}
    </div>
  );
};

export default Layout;
