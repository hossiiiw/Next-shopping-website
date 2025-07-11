"use client";
import Link from "next/link";
import { redirect, usePathname,  } from "next/navigation";
import React from "react";
import { useCart } from "@/context/shoppingCartContext";
import Cookies from "js-cookie";

function Navbar() {
  const pathname = usePathname();
  const { cartTotalQty } = useCart();
  const navLink = [
    {
      title: "Login",
      href: "/login",
    },
    {
      title: "Dashboard",
      href: "/dashboard",
    },
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Store",
      href: "/store",
    },
  ];

  const handleExit = () => {
    Cookies.remove("token");
    redirect("/login");
  };

  return (
    <nav className="p-4 text-xs md:text-lg font-bold text-white bg-sky-400">
      {/* <Container> */}
      <div className="flex gap-4">
        <button className="text-red-600 gont-bold" onClick={handleExit}>
          Exit
        </button>
        {navLink.map((item) => {
          return (
            <Link
              key={item.title}
              className={pathname === item.href ? "text-sky-950" : ""}
              href={item.href}
            >
              {item.title}
            </Link>
          );
        })}

        <div className="relative">
          <span className="bg-sky-900 px-1 rounded-4xl absolute -top-0 -right-8 text-red-400">
            {cartTotalQty}
          </span>
          <Link href={"/cart"}>Cart</Link>
        </div>
      </div>
      {/* </Container> */}
    </nav>
  );
}

export default Navbar;
