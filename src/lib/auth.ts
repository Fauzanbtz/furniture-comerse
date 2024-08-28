// lib/auth.ts

import bcrypt from "bcrypt";

// Fungsi untuk hashing password
export async function hashPassword(password: string) {
  const saltRounds = 10; // Jumlah putaran salt (dapat disesuaikan)
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

// Fungsi untuk memverifikasi password
export async function verifyPassword(password: string, hashedPassword: string) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
}
