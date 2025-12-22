import { postmanSwagger } from './postmanSwagger';
import { env } from './env';
const swaggerSpec = {
  openapi: '3.0.0',
  info: {
    title: 'Note Taker API',
    version: '1.0.0',
    description: 'A note-taking application with version control and optimistic locking using ETag-based optimistic concurrency control',
    contact: {
      name: 'API Support',
    },
  },
  servers: [
    {
      url: `http://localhost:${env.PORT}`,
      description: 'Local server',
    },
    {
      url: process.env.PROD_SERVER_URL || 'https://api.production.com',
      description: 'Deployed server',
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter your JWT token in the format: Bearer <token>',
      },
    },
  },
  security: [
    {
      bearerAuth: [],
    },
  ],
  paths: postmanSwagger.paths,
  tags: [
    {
      name: 'Authentication',
      description: 'User authentication and authorization endpoints',
    },
    {
      name: 'Notes',
      description: 'Notes management with version control and optimistic locking',
    },
    {
      name: 'NotesSharing',
      description: 'Note share and read/edit shared notes',
    },
  ],
};

export { swaggerSpec };
