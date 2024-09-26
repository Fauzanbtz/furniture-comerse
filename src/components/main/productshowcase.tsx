import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiShoppingBag } from "react-icons/fi";
import { TiSupport } from "react-icons/ti";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Image from "next/image";
import image1 from "../../../public/showcase/image1.jpeg";
import table from "../../../public/images/table.png";
import lamp from "../../../public/images/lamp.png";
import chair from "../../../public/images/chair.png";

const ProductShowcase = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-around items-center py-10 text-center">
        <div className="flex flex-col justify-center items-center">
          <div>
            <LiaShippingFastSolid className="text-5xl text-black bg-secondary rounded-full p-2" />
          </div>
          <h1 className="text-xl text-black font-bold">
            Fast and Free
            <br /> Shipping
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <FiShoppingBag className="text-5xl text-black bg-secondary rounded-full p-2" />
          </div>
          <h1 className="text-xl text-black font-bold">
            Easy to
            <br /> Shop
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <TiSupport className="text-5xl text-black bg-secondary rounded-full p-2" />
          </div>
          <h1 className="text-xl text-black font-bold">
            24/7
            <br /> Support
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <IoReturnUpBackOutline className="text-5xl text-black bg-secondary rounded-full p-2" />
          </div>
          <h1 className="text-xl text-black font-bold">
            Hassle Free
            <br /> Returns
          </h1>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-4 gap-6 p-8">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center col-span-2">
          <div className="w-1/2 ">
            <span className="bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
              NEW COLLECTION
            </span>
            <h2 className="text-2xl font-bold mt-4">Center Table</h2>
            <ul className="mt-2 text-gray-600">
              <li>Square table</li>
              <li>Round table</li>
              <li>Wooden table</li>
              <li>Glass table</li>
            </ul>
            <a href="#" className="text-blue-500 mt-4 inline-block">
              View All →
            </a>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image
              src={table}
              alt="Accent Chairs"
              className="max-w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-xl shadow-md flex col-span-2 row-span-2">
          <div className="w-1/2">
            <span className="bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
              NEW COLLECTION
            </span>
            <h2 className="text-2xl font-bold mt-4">Lighting Lamp</h2>
            <ul className="mt-2 text-gray-600">
              <li>Floor lamps</li>
              <li>Tripod lamps</li>
              <li>Table lamps</li>
              <li>Study lamps</li>
            </ul>
            <a href="#" className="text-blue-500 mt-4 inline-block">
              View All →
            </a>
          </div>
          <div className="w-1/2 flex justify-center">
            <Image
              src={lamp}
              alt="Accent Chairs"
              className="max-w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
          <div className="w-1/2">
            <span className="bg-gray-200 text-gray-800 text-sm font-semibold px-3 py-1 rounded-full">
              NEW COLLECTION
            </span>
            <h2 className="text-2xl font-bold mt-4">Accent Chairs</h2>
            <ul className="mt-2 text-gray-600">
              <li>Arm chair</li>
              <li>Wing chair</li>
              <li>Cafe chair</li>
              <li>Wheels chair</li>
            </ul>
            <a href="#" className="text-blue-500 mt-4 inline-block">
              View All →
            </a>
          </div>
          <div className="w-1/2 h-full flex justify-center">
            <Image
              src={chair}
              alt="Accent Chairs"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-primary p-6 rounded-xl shadow-md text-white flex flex-col items-center justify-center">
          <p className="font-bold text-lg bg-secondary p-2 rounded-full">GET DISCOUNT</p>
          <h2 className="text-4xl font-bold">20% OFFER</h2>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
