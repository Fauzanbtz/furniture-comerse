import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
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
import { useState, useEffect } from "react";
import Item from "./item/item";
import DropDown from "./dropDown";

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
  const [category, setCategory] = useState("");
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
                    <textarea
                      className="border p-2 w-full"
                      rows={5}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
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
            className="border border-gray-400 rounded-md p-2"
          />
          <DropDown />
        </div>
      </div>
      <div className="border-t-2 p-5 bg-white ">
        <Item />
      </div>
    </div>
  );
}
