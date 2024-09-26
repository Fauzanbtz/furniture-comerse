import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";
import Image from "next/image";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { fetchProducts } from "@/services/fetchProducts";
import { Skeleton } from "@/components/ui/skeleton";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProductClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (success) {
      const timer = setTimeout(() => {
        closeModal();
        setSuccess("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [success]);

  const addProducts = async (event: any) => {
    event.preventDefault();

    try {
      const res = await fetch("/api/products/add-products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          image,
          description,
          category,
          stock,
        }),
      });

      // Jika respons tidak ok, tangkap pesan error
      if (!res.ok) {
        const errorData = await res.json(); // Dapatkan pesan error dari server
        throw new Error(errorData.message || "Request failed"); // Lempar error dengan pesan
      }

      // Reset form dan tampilkan pesan sukses jika berhasil
      setSuccess("Product added successfully");
      setError(""); // Bersihkan error
      setName("");
      setPrice(0);
      setImage("");
      setDescription("");
      setCategory("");
      setStock(0);
    } catch (err: any) {
      console.error("Request failed:", err);
      setSuccess(""); // Hapus pesan sukses jika ada error
      setError(err.message || "Something went wrong."); // Simpan pesan error ke state
    }
  };

  // --------- Handle Category And Fethcing ---------
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState<
    {
      title: any;
      category: string;
    }[]
  >([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

  const filteredProducts = products.filter((product) => {
    const matchesCategory = category ? product.category === category : true;
    const matchesSearch = search
      ? product.title.toLowerCase().includes(search.toLowerCase())
      : true;

    return matchesCategory && matchesSearch;
  });

  const limitWords = (text: string, wordLimit: number) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  const skeletonCount = 4;

  const categories = [
    { label: "All Categories", value: "" },
    { label: "Men's Clothing", value: "men's clothing" },
    { label: "Women's Clothing", value: "women's clothing" },
    { label: "Electronics", value: "electronics" },
    { label: "Jewelery", value: "jewelery" },
  ];

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Products Grid</h1>
        <div>
          <Link
            href="#"
            onClick={handleAddProductClick}
            className="bg-blue-700 hover:bg-blue-500 p-2 flex items-center text-white rounded-md gap-1">
            <FaPlus />
            <span>Add Product</span>
          </Link>
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50  flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-1/2">
                <h2 className="text-lg font-bold mb-4">Tambah Produk</h2>
                <form onSubmit={addProducts}>
                  <div className="">
                    <label className="block text-sm font-medium mb-1">
                      Nama Produk
                    </label>
                    <input
                      type="text"
                      className="border p-2 w-full"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium mb-1">
                      Harga Produk
                    </label>
                    <input
                      type="number"
                      className="border p-2 w-full"
                      onChange={(e) => setPrice(parseInt(e.target.value))}
                    />
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium mb-1">
                      Gambar
                    </label>
                    <input
                      type="file"
                      className="border p-2 w-full"
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium mb-1">
                      Deskripsi Produk
                    </label>
                    <textarea
                      className="border p-2 w-full"
                      rows={5}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label className="block text-sm font-medium mb-1">
                      Kategori
                    </label>
                    <Select onValueChange={(value) => setCategory(value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Category</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Stock
                    </label>
                    <input
                      type="number"
                      className="border p-2 w-full"
                      onChange={(e) => setStock(parseInt(e.target.value))}
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded mr-2">
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
                    className="bg-red-500 text-white px-4 py-2 rounded">
                    Cancel
                  </button>
                </form>
                <div>
                  <div className="p-5">
                    {success && (
                      <p className="bg-green-500 text-center p-2 rounded-xl text-white">
                        {success}
                      </p>
                    )}
                    {error && (
                      <p className="bg-red-500 text-center p-2 rounded-xl text-white">
                        {error}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      <div className="mt-10 p-5 bg-white ">
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Search Products"
            onChange={(e) => setSearch(e.target.value)}
            className="border border-gray-400 rounded-md p-2"
          />
          {/*---------- Drop Down Section ----------*/}
          <div className="border border-gray-400 rounded-md">
            {/* DropdownMenu untuk kategori */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  {category || "Select Category"}
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
          </div>
        </div>
      </div>
      <div className="border-t-2 p-5 bg-white ">
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
            filteredProducts.map((item: any) => (
              <Card
                key={item.id}
                className="w-56 bg-base-100 shadow-xl h-96 border border-gray-300 flex flex-col justify-between">
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
      </div>
    </div>
  );
}
