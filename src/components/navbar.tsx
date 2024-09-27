"use client";
import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { useState } from "react";
import { Button } from "./ui/button";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import  Link  from "next/link";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(!open);
  return (
    <>
      <div className="flex justify-between items-center text-light px-5 md:px-10 p-5 text-white bg-primary">
        <h1 className="text-3xl flex">
          <span className="text-secondary">E-</span>FURNITURE
          <span className="text-secondary">.</span>
        </h1>
        <div className="gap-4 hidden md:flex">
          <a
            href="/"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            Home
          </a>
          <a
            href="/products"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            Products
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            Categories
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            About Us
          </a>
          <a
            href="/contacts"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            Contact Us
          </a>
        </div>
        <div className="text-3xl gap-4 hidden md:flex">
          <CiSearch className="hover:text-secondary cursor-pointer" />
          <Link href="/cart">
            <CiShoppingCart className="hover:text-secondary cursor-pointer" />
          </Link>
          <MdAccountCircle className="hover:text-secondary cursor-pointer" />
        </div>
        {/* -------- RESPONSIVE -------- */}
        <div className="text-3xl gap-4 md:hidden">
          <Button>
            {open ? (
              <IoCloseSharp
                className="hover:text-secondary cursor-pointer text-4xl"
                onClick={toggle}
              />
            ) : (
              <GiHamburgerMenu
                className="hover:text-secondary cursor-pointer text-4xl"
                onClick={toggle}
              />
            )}
          </Button>
        </div>
      </div>
      <div>
        <div
          className={`flex flex-col gap-5 bg-primary p-5 text-white text-end absolute w-full transition-all duration-300 ease-in-out md:hidden ${
            open ? "right-0" : "-right-[100%]"
          }`}>
          <a
            href="/"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            Home
          </a>
          <a
            href="/products"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            Products
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            Categories
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            About Us
          </a>
          <a
            href="/contacts"
            className="hover:underline underline-offset-[8px]"
            style={{ textDecorationColor: "#da9c1d" }}>
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
