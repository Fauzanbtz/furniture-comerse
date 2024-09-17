import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import AddProducts from "../order/orders";
import { useState } from "react";

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
  const [category, setCategory] = useState("");
  const [stock, setStock] = useState(0);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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

      if (!res.ok) {
        const errorData = await res.json(); // Dapatkan pesan error dari server jika ada
        throw new Error(errorData.message || "Request failed"); // Gunakan pesan error dari server jika tersedia
      } else {
        setSuccess("Product added successfully");
        setName("");
        setPrice(0);
        setImage("");
        setDescription("");
        setCategory("");
        setStock(0);
      }
      // Periksa apakah respons adalah JSON yang valid
    } catch (error) {
      console.error("Request failed:", error);
    }
  };

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
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg w-1/3">
                <h2 className="text-lg font-bold mb-4">Tambah Produk</h2>
                <form onSubmit={addProducts}>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Nama Produk
                    </label>
                    <input
                      type="text"
                      className="border p-2 w-full"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Harga Produk
                    </label>
                    <input
                      type="number"
                      className="border p-2 w-full"
                      onChange={(e) => setPrice(parseInt(e.target.value))}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Gambar
                    </label>
                    <input
                      type="file"
                      className="border p-2 w-full"
                      onChange={(e) => setImage(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Deskripsi Produk
                    </label>
                    <input
                      type="text"
                      className="border p-2 w-full"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-sm font-medium mb-1">
                      Kategori
                    </label>
                    <input
                      type="text"
                      className="border p-2 w-full"
                      onChange={(e) => setCategory(e.target.value)}
                    />
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
            className="border border-gray-400 rounded-md p-2"
          />
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="border border-gray-400 text-black p-2 rounded-md inline-flex items-center">
                Categories <FaChevronDown className="ml-2" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-white p-2 mt-2 shadow-lg rounded-md w-48">
                <DropdownMenuItem>
                  <a href="#">Electronics</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Fashion</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Home Appliances</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Books</a>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <a href="#">Sports</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  );
}
