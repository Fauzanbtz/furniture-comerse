import { Product } from "@prisma/client";
import { useState, useEffect } from "react";
import Main from "./main";
import Item from "./item/item";
import useFetchProducts from "@/hooks/useFetchProducts";

export default function ParentItem() {
  const { categoryItem, setCategoryItem, search, setSearch, filteredProducts } =
    useFetchProducts();

    console.log({
      filteredProducts
    });
    

  return (
    <div>
      <Main
        categoryItem={categoryItem}
        setCategoryItem={setCategoryItem}
        search={search}
        setSearch={setSearch}
      />
      {/* <Item products={filteredProducts} /> */}
    </div>
  );
}
