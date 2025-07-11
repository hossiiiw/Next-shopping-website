"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";
import { useCart } from "@/context/shoppingCartContext";

function Navbar() {
  const pathname = usePathname();
  const { cartTotalQty } = useCart();
  const navLink = [
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

  return (
    <nav className="p-4  font-bold text-white bg-sky-400">
      {/* <Container> */}
      <div className="flex gap-4">
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
