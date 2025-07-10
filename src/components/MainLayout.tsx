import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
interface ILayoutProps {
  children: React.ReactNode;
}
function MainLayout({ children }: ILayoutProps) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default MainLayout;
