import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import image from "../../../public/showcase/image1.jpeg";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import table from "../../../public/images/table.png";
import chair from "../../../public/images/chair.png";
import lamp from "../../../public/images/lamp.png";

const data = [
  {
    id: 1,
    image: table,
    tittle: "Table",
    description: "Discover 120+ products",
  },
  {
    id: 1,
    image: chair,
    tittle: "Chair",
    description: "Discover 120+ products",
  },
  {
    id: 1,
    image: lamp,
    tittle: "Lamp",
    description: "Discover 120+ products",
  },
  {
    id: 1,
    image: table,
    tittle: "Table",
    description: "Discover 120+ products",
  },
  {
    id: 1,
    image: chair,
    tittle: "Chair",
    description: "Discover 120+ products",
  },
  {
    id: 1,
    image: lamp,
    tittle: "Lamp",
    description: "Discover 120+ products",
  },
];

export function CarouselCategories() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const totalSlides = data.length;

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className="flex flex-col justify-center items-center p-10 px-10">
      <div className="w-full py-5 flex items-center justify-between">
        <h1 className="text-5xl text-left font-semibold text-black ">
          Feature Categories
        </h1>
        <div className="flex items-center gap-5 mt-5">
          <Button
            className="p-2 px-10 bg-[#356267] rounded-full hover:bg-secondary"
            onClick={() => api?.scrollTo(current - 1)}>
            <FaArrowLeft className="text-xl" />
          </Button>
          <Button
            className="p-2 px-10 bg-secondary rounded-full hover:bg-[#356267]"
            onClick={() => api?.scrollTo(current + 1)}>
            <FaArrowRight className="text-xl" />
          </Button>
        </div>
      </div>
      <Carousel className="w-full justify-center px-10" setApi={setApi}>
        <CarouselContent className="-ml-1 gap-2 ">
          {data.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/3 lg:basis-1/4  ">
              <div className="p-1">
                <Card className="w-[10rem] bg-transparent border-0 ">
                  <CardContent className="flex items-center justify-center p-0">
                    <div>
                      <Image
                        src={item.image}
                        alt={`Image ${index + 1}`}
                        width={800}
                        height={800}
                        className="w-full object-cover rounded-2xl aspect-[5/6] "
                      />
                      <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="text-2xl font-semibold text-black">
                          {item.tittle}
                        </h1>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="flex gap-2 mt-5">
      {Array.from({ length: totalSlides -2 }).map((_, index) => (
        <button
          key={index}
          className={`w-4 h-4 rounded-full transition-colors duration-300 ${
            current === index ? "bg-[#356267]" : "bg-gray-300"
          }`}
          onClick={() => api?.scrollTo(index)}
        ></button>
      ))}
    </div>
    </div>
  );
}
