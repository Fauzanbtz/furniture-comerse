import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export async function POST(req: NextRequest) {
  try {
    // Mengambil data dari request body
    const { name, price, description, image, category, stock } = await req.json();

    // Validasi input: Cek jika ada field yang kosong
    if (!name || !price || !description || !category || !stock) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Proses pembuatan produk di database
    const product = await prisma.product.create({
      data: {
        name,
        price,
        description,
        image,
        category,
        stock,
      },
    });

    // Response sukses dengan produk yang berhasil dibuat
    return NextResponse.json(product, { status: 201 });

  } catch (error: any) {
    console.error("Error creating product:", error);

    // Jika terjadi error Prisma (kesalahan pada database)
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return NextResponse.json(
        { message: "Database error occurred. Please try again." },
        { status: 500 }
      );
    }

    // Error umum lainnya
    return NextResponse.json(
      { message: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
