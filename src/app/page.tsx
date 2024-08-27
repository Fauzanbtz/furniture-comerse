"use client";

import Navbar from "@/components/navbar";
import Info from "@/components/main/info";
import Carousels from "@/components/main/carousel";
import ProductShowcase from "@/components/main/productshowcase";
import * as React from "react";
import { CarouselCategories } from "@/components/main/carouselCategories";
import Footer from "@/components/common/footer";
import TrendingProducts from "@/components/main/trendingProducts";


export default function Home() {


  return (
    <>
      <Navbar />
      <header className="h-screen bg-primary flex items-center px-10">
        <div className="flex flex-wrap items-center justify-around w-full">
          {/* Konten Teks */}
          <Info/>
          {/* Carousel */}
          <Carousels />
        </div>
      </header>

      <ProductShowcase />
      <CarouselCategories />
      <TrendingProducts/>
      <Footer />
    </>
  );
}
