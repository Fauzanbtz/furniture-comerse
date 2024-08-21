import React from "react";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-light px-10 p-5 text-white bg-primary">
      <h1 className="text-3xl"><span className="text-secondary">E-</span>FURNITURE<span className="text-secondary">.</span></h1>
      <div className="gap-4 flex">
        <a href="#" className="hover:underline underline-offset-[8px]" style={{ textDecorationColor: "#da9c1d" }}>Home</a>
        <a href="#" className="hover:underline underline-offset-[8px]" style={{ textDecorationColor: "#da9c1d" }}>Products</a>
        <a href="#" className="hover:underline underline-offset-[8px]" style={{ textDecorationColor: "#da9c1d" }}>Categories</a>
        <a href="#" className="hover:underline underline-offset-[8px]" style={{ textDecorationColor: "#da9c1d" }}>About Us</a>
        <a href="#" className="hover:underline underline-offset-[8px]" style={{ textDecorationColor: "#da9c1d" }}>Contact Us</a>
      </div>
      <div className="flex text-3xl gap-4">
        <CiSearch className="hover:text-secondary cursor-pointer" />
        <CiShoppingCart className="hover:text-secondary cursor-pointer" />
        <MdAccountCircle className="hover:text-secondary cursor-pointer" />
      </div>
    </div>
  );
};

export default Navbar;
