import React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import image1 from "../../../public/showcase/image1.jpeg";
import image2 from "../../../public/showcase/image2.jpeg";
import image3 from "../../../public/showcase/image3.jpeg";
import image4 from "../../../public/showcase/image4.jpeg";
const Images = [image1, image2, image3, image4];
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { type CarouselApi } from "@/components/ui/carousel";

const Carousels = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);


  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className="w-full md:w-1/3 mt-8">
      <Carousel
        plugins={[plugin.current]}
        className="relative w-full"
        setApi={setApi}
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
        <div className="flex items-center gap-5 mt-5">
          <Button className="p-2 px-10 bg-[#356267] rounded-full hover:bg-secondary" onClick={() => api?.scrollTo(current - 1)}>
            <FaArrowLeft className="text-xl" />
          </Button>
          <Button className="p-2 px-10 bg-secondary rounded-full hover:bg-[#356267]" onClick={() => api?.scrollTo(current + 1)}>
            <FaArrowRight className="text-xl"/>
          </Button>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
