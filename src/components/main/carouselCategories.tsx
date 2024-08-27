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

const data = [
  {
    id: 1,
    image:
      "https://images.eq3.com/image-service/0e021226-37da-47dc-a6be-759a71bece56/Joan-30216-S3-Panama-Natural-Walnut-Legs-Front-Web.jpg_ORIGINAL.jpg",
  },
  {
    id: 1,
    image:
      "https://media.designcafe.com/wp-content/uploads/2024/01/24175345/modern-luxury-bedroom-design-ideas.jpg",
  },
  {
    id: 1,
    image:
      "https://media.designcafe.com/wp-content/uploads/2024/01/24175345/modern-luxury-bedroom-design-ideas.jpg",
  },
  {
    id: 1,
    image:
      "https://media.designcafe.com/wp-content/uploads/2024/01/24175345/modern-luxury-bedroom-design-ideas.jpg",
  },
  {
    id: 1,
    image:
      "https://media.designcafe.com/wp-content/uploads/2024/01/24175345/modern-luxury-bedroom-design-ideas.jpg",
  },
  {
    id: 1,
    image:
      "https://media.designcafe.com/wp-content/uploads/2024/01/24175345/modern-luxury-bedroom-design-ideas.jpg",
  },
  {
    id: 1,
    image:
      "https://media.designcafe.com/wp-content/uploads/2024/01/24175345/modern-luxury-bedroom-design-ideas.jpg",
  },
  {
    id: 1,
    image:
      "https://media.designcafe.com/wp-content/uploads/2024/01/24175345/modern-luxury-bedroom-design-ideas.jpg",
  },
];

export function CarouselCategories() {
  return (
    <div className="flex flex-col justify-center items-center p-10 px-10">
      <div className="w-full py-5">
        <h1 className="text-5xl text-left font-semibold text-black ">Feature Categories</h1>
      </div>
      <Carousel className="w-full px-10">
        <CarouselContent className="-ml-1 gap-2 ">
          {data.map((item, index) => (
            <CarouselItem key={index} className=" md:basis-1/2 lg:basis-1/5  ">
              <div className="p-1">
                <Card className="w-[10rem] bg-transparent border-0 ">
                  <CardContent className="flex items-center justify-center p-0 object-fit">
                    <img src={item.image} alt="" className="rounded-xl w-full h-64 object-cover" />
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
