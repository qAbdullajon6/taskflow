import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ['query', 'error', 'warn'], // Dev rejimida terminalda SQL so'rovlarni ko'rib turish uchun
  });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;