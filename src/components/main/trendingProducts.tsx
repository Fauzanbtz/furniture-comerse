import React from "react";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FcLike } from "react-icons/fc";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CiShoppingCart } from "react-icons/ci";
import Image from "next/image";
import table from "../../../public/images/table.png";
import chair from "../../../public/images/chair.png";
import lamp from "../../../public/images/lamp.png";

const data = [
  {
    id: 1,
    image: table,
    tittle: "Table",
    price: 120.99,
  },
  {
    id: 1,
    image: chair,
    tittle: "chair",
    price: 50.99,
  },
  {
    id: 1,
    image: lamp,
    tittle: "lamp",
    price: 90.99,
  },
  {
    id: 1,
    image: table,
    tittle: "Table",
    price: 120.99,
  },
  {
    id: 1,
    image: chair,
    tittle: "chair",
    price: 50.99,
  },
  {
    id: 1,
    image: lamp,
    tittle: "lamp",
    price: 90.99,
  },
  
];

const TrendingProducts = () => {
  // State to track which button is active
  const [activeIndex, setActiveIndex] = useState(0);

  // Handler to change active button
  const handleActive = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="py-10 px-5 md:px-20">
      <div className="flex  justify-between items-center">
        <h1 className="text-3xl font-semibold text-black">
          Trending Products for You!
        </h1>
        <Button className="p-4 bg-secondary rounded-3xl items-center">
          View All Products <IoIosArrowRoundForward className="text-3xl" />{" "}
        </Button>
      </div>
      <div className="md:w-1/2 overflow-auto">
        <ul className="flex justify-between items-center my-10">
          {["Bed Room", "Living Room", "Kitchen", "Bathroom", "Office"].map(
            (room, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className={`${
                    activeIndex === index
                      ? "underline text-primary underline-offset-4"
                      : ""
                  } text-lg`}
                  onClick={() => handleActive(index)}>
                  {room}
                </Button>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="flex flex-wrap justify-around items-center my-10 gap-10">
        {data.map((product) => (
          <Card className="border rounded-xl bg-[#f8f7f7]" key={product.id}>
            <div className="flex justify-between items-center p-3">
              <h1 className="font-light text-sm p-2 rounded-full text-white bg-primary w-fit ">
                -20%
              </h1>
              <FcLike className="text-3xl text-white" />
            </div>
            <CardContent>
              <Image src={product.image} alt="table" width={300} height={300} />
            </CardContent>

            <div className="flex items-center justify-between bg-primary rounded-xl p-5">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold text-white">
                  {product.tittle}
                </h1>
                <p className="text-sm font-thin text-white">
                  $ {product.price}
                </p>
              </div>
              <a className=" bg-secondary p-3 rounded-full">
                <CiShoppingCart className="text-xl text-white" />
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
