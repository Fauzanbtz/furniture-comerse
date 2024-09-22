import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
export default function Item({ products = [] }: any) {
  const limitWords = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };


  const skeletonCount = 4;
  return (
    <div className="flex justify-center items-center flex-wrap gap-4">
      {products.length === 0 ? (
        <div className="flex justify-center items-center space-y-3 gap-5">
          {Array.from({ length: skeletonCount }).map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl bg-slate-500" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px] bg-slate-400" />
                <Skeleton className="h-4 w-[200px] bg-slate-400" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        products.map((item: any) => (
          <Card
            key={item.id}
            className="w-56 bg-base-100 shadow-xl h-96 flex flex-col justify-between">
            <CardHeader className="py-2">
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={400}
                  className="object-fill h-56 w-56"
                />
              </div>
              <CardTitle className="font-normal text-sm">
                {limitWords(item.title, 5)} {/* Batas 20 kata */}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm font-bold py-0">
              ${item.price}
            </CardContent>
            <CardFooter className="py-0">{item.category}</CardFooter>
            <div className="flex justify-around text-end p-2">
              <Link
                href="#"
                className="btn btn-sm btn-primary flex items-center gap-2 px-2 border rounded-md ">
                <CiEdit />
                Edit
              </Link>
              <button className="btn btn-sm btn-error flex items-center gap-2 px-2 border rounded-md text-red-500 border-[#ee90a4]">
                <MdDelete />
                Delete
              </button>
            </div>
          </Card>
        ))
      )}
    </div>
  );
}
