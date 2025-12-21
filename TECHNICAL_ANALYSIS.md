# TECHNICAL ANALYSIS DOCUMENT
# Note Taker Application Node.js

This project demonstrates versioning, concurrency control, caching, and search.
Designed as a stateless REST API suitable for horizontal scaling.
Focused on clarity and maintainability over premature optimization.

## Tech Stack:

Node.js | TypeScript | Prisma ORM | Express.js | MySQL | Redis | Docker


## Problem Statement:
Build a "Note Taking" API using ExpressJS, MySQL, and Redis, demonstrating expertise in modern JavaScript, ORM (preferably Sequelize), caching with Redis, Docker, and design patterns. The application must address version control, concurrency during updates, and efficient full-text search, with comprehensive documentation of the approach and trade-offs.

## Approach To Problem:
Break Down the problem statement into small chunks and carry each task individually:

1. Initialize Project
2. Implmenet Singleton Pattern for Prisma and Redis
3. Create DataModels:
    - `user` for storing user data
    - `user_session` for auth sessions
    - `note` for storing notes
    - `note_version` for storing notes historical data
    - `note_share` for sharing notes between users
4. Setup User CRUD and Auth modules
    4.1 Test Authentication Modules (Signup, Login, Logout)
5. Setup Notes CRUD
    5.1 Test Notes CRUD (Create, Update, Read, List, Soft Delete)
6. Implement Optimistic Locking on Notes Service layer
    6.1 Test Optimistic Locking Functionality (Tracking changes and revert version functionality)
7. Implement Redis caching and invalidation
    7.1 Test Redis functionality
8. Create Notes Sharing CRUD and business logic
    8.1 A new version is added to `note` when an update is triggered against it and the previous version is added under `note_version`
    8.2 Test Notes Sharing Functionality
9. Setup Swagger Docs
    9.1 Used Postman Collection exports for swagger documentation
10. Setup Docker
    10.1 Setup docker and docker compose. test for both prod and dev builds
11. Update the Documentation



## Reasoning behind chosen implementation:
#### Architecture: 
**MVC Architecture:**
    - Separation of concern.
    - Improved Maintainability and Testing.
    - Easy to scale apps and attach new modules.
    - Code reusability such as helper and utility functions.
    - Easy to read and understand the architecture.

**Prisma ORM**:  
    - TypeSafety
    - Migrations
    - Abstractions
    - Expertise
    - Good Developement Experience

**Swagger Docs**:
    - API Documentation
    - Standardized Docs

**Field Indexing**:
    - Indexed fields such as userId, noteId, versionNumber, and fulltext indexing on notes title and content

## TradeOffs Made During Development:
### Auth Module:
    - Skipped Verify Email functionality for simplicity and time keeping
    - Can still be plugged into the auth layer easily since the functionality is built around JWT Tokens, user module can have an isVerifiedFlag and emails are already unique/

### Versioning Strategy:
    - On notes update: Store previous version in `note_version` table to keep record of historical data.
    - On notes revert: Push the current version to `note_version`, then use the referenced version to create a neww record
    
    **TradeOffs**:
    - Increased storage usage
    - Slight complexity in business logic (service layer)

### Concurrency Control:
    - used `ETag` and `If-match` headers approach for optimistic locking
    - Avoids database locks
    - Scales well

    **TradeOffs**:
    - Clients have to deal with conflicts
    - Retries required when conflicts occur

### Full Text Search Implementation:
    - Used MySQL Full Text Search
    - Used prisma @@fulltext index on `content` field of `note` and `note_version`
    **TradeOffs**:
    - Less powerful then dedicated search engines
    - Vector searching isnt available 


### Caching
    - Used Redis for caching
    - TTL set for standard durations
    **TradeOffs**:
    - Slightly increased complexity in business layer to handle caching and invalidation of objects


### Future Improvements:
    - Upgrading search functionality
    - Adding roles and permissions for notes sharing functionality
    - WebSockets support for realtime updates
    - Code optimization