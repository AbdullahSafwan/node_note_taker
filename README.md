# Note Taker

A modern note-taking application built with Node.js, TypeScript, Express, Redis, and MySQL.

## Production Deployment

### Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+

### 1. Clone Repository

```bash
git clone https://github.com/AbdullahSafwan/node_note_taker.git
cd node_note_taker
```

### 2. Environment Configuration


**Generate a secure JWT secret:**
```bash
openssl rand -base64 32
```

Create a `.env` file in the root directory:

```env
PORT=8080                 # Node.js app port
NODE_ENV=production

# MySQL Configuration
DATABASE_USER=notetaker
DATABASE_PASSWORD=notetakerpass
DATABASE_NAME=note_taker_db
DATABASE_HOST=mysql
DATABASE_PORT=3306
DATABASE_URL=mysql://notetaker:notetakerpass@mysql:3306/note_taker_db
MYSQL_ROOT_PASSWORD=super-strong-root-password

# host port for accessing mysql and redis (change these if host ports are already occupied)
MYSQL_HOST_PORT=3307       # Host port for MySQL container
REDIS_HOST_PORT=6380       # Host port for Redis container

REDIS_URL=redis://redis:6379

# JWT Secrets (use strong, randomly generated values)
JWT_ACCESS_KEY_SECRET=jwt-access-secret
JWT_REFRESH_KEY_SECRET=jwt-refresh-secret

# CORS
CORS_ORIGIN=*

```

### 3. Build & Deploy

```bash
docker-compose up -d
```

This starts:
- MySQL database (port 3306)
- Redis cache (port 6379)
- Node.js application (port 3000)

### 4. Verify Deployment

```bash
# Check running services
docker-compose ps

# View application logs
docker-compose logs -f app

# Test API health
curl http://localhost:3000/health
```

### Production Checklist

- Use strong, randomly generated `JWT_SECRET`
- Change all default database passwords
- Configure CORS origins for frontend domain
- Set up proper backup strategy for MySQL volumes
- Monitor logs and application metrics
- Keep Docker images updated


### 5. Stop all services
```bash
docker-compose down
```

### 6. Stop and remove all volumes
```bash
docker-compose down -v
```
---

## Development Setup

### Prerequisites

- Node.js 18+
- Docker & Docker Compose
- npm or yarn

### 1. Clone & Install

```bash
git clone <repository-url>
cd node_note_taker
npm install
```

### 2. Local Environment

**Generate a secure JWT secret:**
```bash
openssl rand -base64 32
```

Create a `.env` file:

```env
PORT=8080                 # Node.js app port
NODE_ENV=development

# MySQL Configuration
DATABASE_USER=notetaker
DATABASE_PASSWORD=notetakerpass
DATABASE_NAME=note_taker_db
DATABASE_HOST=mysql
DATABASE_PORT=3306
DATABASE_URL=mysql://notetaker:notetakerpass@mysql:3306/note_taker_db
MYSQL_ROOT_PASSWORD=super-strong-root-password
MYSQL_HOST_PORT=3306       # Host port for MySQL container

# Redis Configuration
REDIS_URL=redis://redis:6379
REDIS_HOST_PORT=6379       # Host port for Redis container

# JWT Secrets (use strong, randomly generated values)
JWT_ACCESS_KEY_SECRET=jwt-access-secret
JWT_REFRESH_KEY_SECRET=jwt-refresh-secret

# CORS
CORS_ORIGIN=*



```

### 3. Start Services

Run only database services with Docker:

```bash
docker-compose -f docker-compose.dev.yml up -d
```

### 4. Initialize Database

```bash
npm run migrate
```

### 5. Run Development Server

```bash
npm run dev
```

The API will be available at `http://localhost:3000`

## Available Scripts

```bash
npm run dev       # Start development server with hot reload
npm run build     # Compile TypeScript to JavaScript
npm run start     # Run compiled application
npm run migrate   # Run Prisma migrations
npm run test      # Run test suite
npm run lint      # Run ESLint
```

## Useful Commands

### Docker Operations

```bash
# Stop all services
docker-compose down

# Clean everything (volumes & containers)
docker-compose down -v

# View logs
docker-compose logs -f app

# Access MySQL CLI
docker-compose exec mysql mysql -u notetaker -p note_taker

# Access Redis CLI
docker-compose exec redis redis-cli
```

### Database Migrations

```bash
# Run migrations (production)
docker-compose exec app npx prisma migrate deploy

# Create new migration (development)
npx prisma migrate dev
```
