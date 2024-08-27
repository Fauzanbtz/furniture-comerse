import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const { name, password } = await req.json();
  const user = await prisma.user.create({
    data: {
      name,
      password,
    },
  });

  return NextResponse.json(user);
}
