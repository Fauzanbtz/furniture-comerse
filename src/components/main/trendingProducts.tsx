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

const TrendingProducts = () => {
    // State to track which button is active
    const [activeIndex, setActiveIndex] = useState(0);

    // Handler to change active button
    const handleActive = (index: number) => {
      setActiveIndex(index);
    };

  return (
    <div className="h-screen py-10 px-20">
      <div className="flex  justify-between items-center">
        <h1 className="text-3xl font-semibold text-black">
          Trending Products for You!
        </h1>
        <Button className="p-4 bg-secondary rounded-3xl items-center">
          View All Products <IoIosArrowRoundForward className="text-3xl" />{" "}
        </Button>
      </div>
      <div className="w-1/2">
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
      <div className="flex justify-around items-center my-10">
        <Card className="w-[20rem] bg-red-300 border-0 ">
          <div className="flex justify-between items-center p-3">
            <h1 className="font-light text-sm p-2 rounded-full text-white bg-primary w-fit ">
              -20%
            </h1>
            <FcLike className="text-3xl text-white" />
          </div>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default TrendingProducts;
