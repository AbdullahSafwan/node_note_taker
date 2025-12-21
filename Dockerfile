# Multi-stage build for Node.js TypeScript application

# Stage 1: Dependencies
FROM node:20-alpine AS dependencies
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install all dependencies (including dev dependencies for build)
RUN npm ci

# Stage 2: Build
FROM node:20-alpine AS build
WORKDIR /app

# Copy dependencies from previous stage
COPY --from=dependencies /app/node_modules ./node_modules

# Copy source files and configuration
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build TypeScript
RUN npm run build

# Stage 3: Production
FROM node:20-alpine AS production
WORKDIR /app

# Install production dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev && npm cache clean --force

# Install Prisma CLI globally for migrations
RUN npm install -g prisma@latest

# Copy built application and Prisma files
COPY --from=build /app/build ./build
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/prisma.config.ts ./prisma.config.ts

# Regenerate Prisma client in production to ensure all files are in place
RUN prisma generate

# Expose port (default 8080, but configurable via PORT env var)
EXPOSE 8080

# Health check (uses PORT env var or defaults to 8080)
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node -e "const port = process.env.PORT || '8080'; require('http').get(`http://localhost:${port}/health`, (r) => {process.exit(r.statusCode === 200 ? 0 : 1)}).on('error', () => process.exit(1))" || exit 1

# Start the application  
CMD ["npm", "run", "start:prod"]

