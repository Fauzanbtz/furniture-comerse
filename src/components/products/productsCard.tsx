import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { CiShoppingCart } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
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

export default function ProductsCard() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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

            <div className="flex items-center justify-between  rounded-xl p-5">
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold ">{product.tittle}</h1>
                <p className="text-sm">$ {product.price}</p>
              </div>
              <a className=" bg-secondary p-3 rounded-full">
                <CiShoppingCart className="text-xl text-white" />
              </a>
            </div>
          </Card>
        ))}
      </div>
      <div className="mt-10 w-fullflex justify-center md:justify-end">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>1</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink isActive>2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </>
  );
}
