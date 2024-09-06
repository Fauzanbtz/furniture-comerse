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

const data = [
  {
    id: 1,
    image: image.src,
  },
  {
    id: 1,
    image: image.src,
  },
  {
    id: 1,
    image: image.src,
  },
  {
    id: 1,
    image: image.src,
  },
  {
    id: 1,
    image: image.src,
  },
  {
    id: 1,
    image: image.src,
  },
  {
    id: 1,
    image: image.src,
  },
  {
    id: 1,
    image: image.src,
  },
  {
    id: 1,
    image: image.src,
  },
];

export function CarouselCategories() {
  return (
    <div className="flex flex-col justify-center items-center p-10 px-10">
      <div className="w-full py-5">
        <h1 className="text-5xl text-left font-semibold text-black ">
          Feature Categories
        </h1>
      </div>
      <Carousel className="w-full px-10">
        <CarouselContent className="-ml-1 gap-2 ">
          {data.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/5  ">
              <div className="p-1">
                <Card className="w-[10rem] bg-transparent border-0 ">
                  <CardContent className="flex items-center justify-center p-0 object-fit">
                    <Image
                      src={item.image}
                      alt={`Image ${index + 1}`}
                      width={800}
                      height={800}
                      className="w-full h-[15rem] object-cover rounded-2xl"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
          <CarouselPrevious className="-left-0" />
          <CarouselNext className="-right-0" />
        </div>
      </Carousel>
    </div>
  );
}
