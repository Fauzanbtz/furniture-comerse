import { useState, useEffect } from "react";
import { fetchProducts } from "@/services/fetchProducts";

export default function useFetchProducts() {
  const [products, setProducts] = useState<{ category: string }[]>([]);
  const [categoryItem, setCategoryItem] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      console.log("data: ",data);
      setProducts(data);
    })();
  }, []);
  


  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryItem
      ? product.category === categoryItem
      : true;
    return matchesCategory;
  });


  return {
    categoryItem,
    setCategoryItem,
    search,
    setSearch,
    products,
    filteredProducts,
  };
}
