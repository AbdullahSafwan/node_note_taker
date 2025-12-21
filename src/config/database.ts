import "dotenv/config";
import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from "../../generated/prisma/client";
import { debugLog } from '../utils/helper';


const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};


const createAdapter = () => {
  return new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    connectionLimit: 10, // Maximum number of connections in pool
    allowPublicKeyRetrieval: true,
    connectTimeout: 30000,
    acquireTimeout: 30000,
    idleTimeout: 600000,
    ssl: false,
  });
};

// init prisma client with singleton pattern
export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  adapter: createAdapter(),
  log: process.env.NODE_ENV === 'development'
    ? ['query', 'error', 'warn']
    : ['error'],
});

// store in global for development hot reload
if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// graceful shutdown handling
process.on('beforeExit', async () => {
  debugLog('Disconnecting Prisma Client...');
  await prisma.$disconnect();
});

process.on('SIGINT', async () => {
  debugLog('SIGINT received: Disconnecting Prisma Client...');
  await prisma.$disconnect();
  process.exit(0);
});

process.on('SIGTERM', async () => {
  debugLog('SIGTERM received: Disconnecting Prisma Client...');
  await prisma.$disconnect();
  process.exit(0);
});