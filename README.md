# node_note_taker
note taking app built using node.js, ts, express, redis, mysql

## Docker Setup

This project includes Docker and Docker Compose configuration for easy deployment and development.

### Prerequisites

- Docker Engine 20.10+
- Docker Compose 2.0+

### Quick Start

1. **Create a `.env` file** in the root directory with the following variables:

```env
NODE_ENV=production
PORT=3000
DATABASE_URL=mysql://notetaker:notetakerpass@mysql:3306/note_taker
REDIS_URL=redis://redis:6379
JWT_SECRET=your-super-secret-jwt-key-minimum-32-characters-long
JWT_EXPIRES_IN=24h

# MySQL Configuration
MYSQL_ROOT_PASSWORD=rootpassword
MYSQL_DATABASE=note_taker
MYSQL_USER=notetaker
MYSQL_PASSWORD=notetakerpass
MYSQL_PORT=3306

# Redis Configuration
REDIS_PORT=6379
```

**Important:** Replace `JWT_SECRET` with a secure random string (at least 32 characters). You can generate one using:
```bash
openssl rand -base64 32
```

2. **Build and start all services:**
```bash
docker-compose up -d
```

This will start:
- MySQL database (port 3306)
- Redis cache (port 6379)
- Node.js application (port 3000)

3. **View logs:**
```bash
docker-compose logs -f app
```

4. **Stop all services:**
```bash
docker-compose down
```

5. **Stop and remove volumes (clean slate):**
```bash
docker-compose down -v
```

### Development Setup

For development, you can run only the database services with Docker and run the app locally:

1. **Start only MySQL and Redis:**
```bash
docker-compose -f docker-compose.dev.yml up -d
```

2. **Update your local `.env` file** to use:
```env
DATABASE_URL=mysql://notetaker:notetakerpass@localhost:3306/note_taker
REDIS_URL=redis://localhost:6379
```

3. **Run the application locally:**
```bash
npm install
npm run dev
```

### Database Migrations

Database migrations run automatically when the container starts. If you need to run migrations manually:

```bash
docker-compose exec app npx prisma migrate deploy
```

Or for development:
```bash
npx prisma migrate dev
```

### Useful Commands

- **Rebuild the application:**
```bash
docker-compose build app
docker-compose up -d
```

- **Access MySQL CLI:**
```bash
docker-compose exec mysql mysql -u notetaker -p note_taker
```

- **Access Redis CLI:**
```bash
docker-compose exec redis redis-cli
```

- **View all running containers:**
```bash
docker-compose ps
```

- **Check application health:**
```bash
curl http://localhost:3000/health
```

### Production Considerations

- Change all default passwords in production
- Use strong, randomly generated `JWT_SECRET`
- Configure proper CORS origins
- Set up proper backup strategy for MySQL volumes
- Consider using Docker secrets for sensitive data
- Review and adjust resource limits in docker-compose.yml
