import React from "react";
import Navbar from "./Navbar";
interface ILayoutProps {
  children: React.ReactNode;
}
function MainLayout({ children }: ILayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default MainLayout;
