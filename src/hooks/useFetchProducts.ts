import { useState, useEffect } from "react";
import { fetchProducts } from "@/services/fetchProducts";
export default function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [categoryItem, setCategoryItem] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = categoryItem
      ? product.category === categoryItem
      : true;
    const matchesSearch = product.category // Pastikan ini mencari di title
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
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
