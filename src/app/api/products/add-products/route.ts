import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const { name, price, description, image, category, stock } = await req.json();
    const product = await prisma.product.create({
        data: {
            name,
            price,
            description,
            image,
            category,
            stock
        }
    });
    return NextResponse.json(product);
}