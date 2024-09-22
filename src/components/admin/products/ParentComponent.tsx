import { Product } from "@prisma/client";
import { useState, useEffect } from "react";
import Main from "./main";
import Item from "./item/item";

export default function ParentItem() {
  const [categoryItem, setCategoryItem] = useState("");
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    console.log("useEffect executed"); // Cek apakah useEffect dieksekusi
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Tambahkan ini
        setProducts(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []); // Pastikan array dependency kosong

  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryItem ? product.category === categoryItem : true;
    const matchesSearch = product.category // Pastikan ini mencari di title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <Main
        categoryItem={categoryItem}
        setCategoryItem={setCategoryItem}
        search={search}
        setSearch={setSearch}
      />
      <Item products={filteredProducts} />
    </div>
  );
}
