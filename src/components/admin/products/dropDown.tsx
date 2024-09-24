import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { fetchProducts } from "@/services/fetchProducts";
import { useState, useEffect } from "react";
import Item from "./item/item";

export default function DropDown() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [category, setCategory] = useState("");


  const categories = [
    { label: "All Categories", value: "" },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
    { label: "Electronics", value: "electronics" },
    { label: "Jewelery", value: "jewelery" },
  ];

  const selectedCategoryLabel = categories.find(
    (cat) => cat.value === selectedCategory
  )?.label;

  const test = () => {
    console.log(category);
  };

  return (
    <div>
      <Button onClick={test}>test</Button>
      <div className="border border-gray-400 rounded-md">
        {/* DropdownMenu untuk kategori */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              {selectedCategoryLabel || "Select Category"}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Select Category</DropdownMenuLabel>
            {categories.map((cat) => (
              <DropdownMenuItem
                key={cat.label}
                onClick={() => setCategory(cat.value)}>
                {cat.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Item category={category} />
      </div>
    </div>
  );
}
