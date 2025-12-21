import dotenv from 'dotenv';

dotenv.config();

export const env = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL!,
  REDIS_URL: process.env.REDIS_URL,
  JWT_SECRET: process.env.JWT_ACCESS_KEY_SECRET!,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_KEY_SECRET!,
};

// List of required environment variable keys
const requiredVars = ['NODE_ENV', 'PORT', 'DATABASE_URL', 'JWT_SECRET', 'JWT_REFRESH_SECRET'] as const;

// Collect missing variables
const missingVars = requiredVars.filter(key => !env[key]);

if (missingVars.length > 0) {
  throw new Error(`Missing required environment variables: ${missingVars.join(', ')}`);
}
if (!env.JWT_SECRET || env.JWT_SECRET.length < 32) {
  throw new Error('JWT_SECRET must be at least 32 characters');
}