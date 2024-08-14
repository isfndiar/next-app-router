"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavbarPage = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="w-full py-3 bg-black flex justify-between px-3">
      <h1 className="text-white">Navbar</h1>
      <div className="flex text-white gap-1">
        <Link className={pathname == "/" ? "text-gray-50" : ""} href={"/"}>
          Home
        </Link>
        <Link
          className={pathname == "/about" ? "text-gray-50" : ""}
          href={"/about"}
        >
          about
        </Link>
        <Link
          className={pathname == "/products" ? "text-gray-50" : ""}
          href={"/products"}
        >
          product
        </Link>
        <Link
          className={pathname == "/setting" ? "text-gray-50" : ""}
          href={"/setting"}
        >
          setting
        </Link>
      </div>
    </div>
  );
};

export default NavbarPage;
