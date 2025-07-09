"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Container from "./Container";

function Navbar() {
  const pathname = usePathname();
  const navLink = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Store",
      href: "/store",
    },
    {
      title: "Cart",
      href: "/cart",
    },
  ];

  return (
    <nav className="p-4  font-bold text-white bg-sky-400">
      <Container>
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

          <div></div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
