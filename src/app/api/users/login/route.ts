import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { hashPassword } from "@/lib/auth";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  const user = await prisma.user.findFirst({
    where: {
      email: {
        equals: email,
        mode: "insensitive", // Mengabaikan case
      },
    },
  });
  if (!user) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }
  const isMatch = await hashPassword(password);
  if (!isMatch) {
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 }
    );
  }
  return NextResponse.json({ message: "Login successful", user });
}

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();
  const user = await prisma.user.delete({
    where: {
      id,
    },
  });
  return NextResponse.json(user);
}
