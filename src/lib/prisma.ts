// prisma.ts

import { PrismaClient } from '@prisma/client';

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma =
  global.prisma ||
  new PrismaClient({
    log: ['query'], // Optional: log query SQL untuk debugging
  });

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
