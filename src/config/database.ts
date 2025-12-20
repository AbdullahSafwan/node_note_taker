import { PrismaClient } from '../generated/prisma/client';
import { PrismaPlanetScale } from '@prisma/adapter-planetscale';
import { Client } from '@planetscale/database';

let prismaInstance: PrismaClient | null = null;


export const getPrismaClient = (): PrismaClient => {
  if (!prismaInstance) {
    const client = new Client({
      url: process.env.DATABASE_URL!,
    });

    const adapter = new PrismaPlanetScale(client);

    // init prisma clinet
    prismaInstance = new PrismaClient({
      adapter,
      log: process.env.NODE_ENV === 'development'
        ? ['query', 'error', 'warn']
        : ['error'],
    });
  }
  return prismaInstance;
};

export const disconnectPrisma = async (): Promise<void> => {
  if (prismaInstance) {
    await prismaInstance.$disconnect();
  }
};

// Export singleton instance
export const prisma = getPrismaClient();