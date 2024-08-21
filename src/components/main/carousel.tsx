import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import image1 from "../../../public/showcase/image1.jpeg";
import image2 from "../../../public/showcase/image2.jpeg";
import image3 from "../../../public/showcase/image3.jpeg";
import image4 from "../../../public/showcase/image4.jpeg";


const Images = [image1, image2, image3, image4];

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Carousels = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full md:w-1/2 mt-8 md:mt-0">
      <Carousel
        plugins={[plugin.current]}
        className="relative w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}>
        <CarouselContent className="flex">
          {Images.map((imageSrc, index) => (
            <CarouselItem key={index} className="w-full">
              <Card className="bg-transparent border-0">
                <CardContent className="flex aspect-square items-center justify-center p-0 rounded-xl">
                  <Image
                    src={imageSrc}
                    alt={`Image ${index + 1}`}
                    width={800}
                    height={800}
                    className="w-full h-[30rem] object-cover rounded-2xl"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div>
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
