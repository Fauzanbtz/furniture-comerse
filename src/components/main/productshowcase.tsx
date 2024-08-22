import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { FiShoppingBag } from "react-icons/fi";
import { TiSupport } from "react-icons/ti";
import { IoReturnUpBackOutline } from "react-icons/io5";
import Image from "next/image";
import image1 from "../../../public/showcase/image1.jpeg";
import { IoIosArrowRoundForward } from "react-icons/io";

const data = [
  {
    name: "Center Table",
    image: image1,
  },
  {
    name: "Center Table",
    image: image1,
  },
  {
    name: "Center Table",
    image: image1,
  },
  {
    name: "Center Table",
    image: image1,
  },
];

import { Card, CardContent } from "@/components/ui/card";
import { icons } from "lucide-react";

const ProductShowcase = () => {
  return (
    <div>
      <div className="flex flex-wrap justify-around items-center py-10  text-center">
        <div className="flex flex-col justify-center items-center">
          <div>
            <LiaShippingFastSolid className="text-5xl text-black bg-secondary rounded-full p-2" />
          </div>
          <h1 className="text-3xl text-black text-bold">
            Fast and Free
            <br /> Shipping
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <FiShoppingBag className="text-5xl text-black bg-secondary rounded-full p-2" />
          </div>
          <h1 className="text-3xl text-black text-bold">
            Easy to
            <br /> Shop
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <TiSupport className="text-5xl text-black bg-secondary rounded-full p-2" />
          </div>
          <h1 className="text-3xl text-black text-bold">
            24/7
            <br /> Support
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>
            <IoReturnUpBackOutline className="text-5xl text-black bg-secondary rounded-full p-2" />
          </div>
          <h1 className="text-3xl text-black text-bold">
            Hassle Free
            <br /> Returns
          </h1>
        </div>
      </div>
      <Card className="flex flex-wrap items-center justify-center">
        {data.map((item, index) => (
          <CardContent key={index} className="m-4 w-full md:w-1/2 lg:w-1/3">
            <div className="flex justify-center items-center">
              <div className="flex flex-row reverse justify-center items-center p-10 gap-2">
                <Image
                  src={item.image}
                  alt="Product Image"
                  width={800}
                  height={800}
                  className="w-full h-[18rem] object-cover rounded-2xl"
                />
                <div className="flex flex-col gap-10">
                  <p className="text-primary">NEW COLLECTION</p>
                  <h1 className="text-3xl text-black font-bold">{item.name}</h1>
                  <a
                    href="#"
                    className="underline text-primary flex items-center">
                    View All
                    <IoIosArrowRoundForward />
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        ))}
      </Card>
    </div>
  );
};

export default ProductShowcase;
