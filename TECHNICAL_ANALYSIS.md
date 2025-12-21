# Technical Analysis Document  
## Note Taker Application (Node.js)

This project demonstrates **versioning**, **concurrency control**, **caching**, and **search** capabilities.  
It is designed as a **stateless REST API** suitable for **horizontal scaling**, with a strong focus on **clarity**, **maintainability**, and avoiding **premature optimization**.

---

## Tech Stack

- Node.js  
- TypeScript  
- Express.js  
- Prisma ORM  
- MySQL  
- Redis  
- Docker  

---

## Problem Statement

Build a **Note Taking API** using **ExpressJS, MySQL, and Redis**, demonstrating expertise in modern JavaScript, ORM usage, caching with Redis, Docker, and design patterns.  
The application must address:

- Version control for notes  
- Concurrency during updates  
- Efficient full-text search  
- Comprehensive documentation of approach and trade-offs  

---

## Approach to the Problem

The problem was broken down into smaller, manageable tasks and implemented incrementally:

1. Initialize the project
2. Implement **Singleton Pattern** for Prisma and Redis clients
3. Create data models:
   - `user` – stores user data
   - `user_session` – manages authentication sessions
   - `note` – stores current notes
   - `note_version` – stores historical versions of notes
   - `note_share` – manages note sharing between users
4. Set up User CRUD and Authentication modules  
   - Test authentication flows (Signup, Login, Logout)
5. Set up Notes CRUD functionality  
   - Create, Update, Read, List, Soft Delete
6. Implement Optimistic Locking at the Notes service layer  
   - Test version tracking and revert functionality
7. Implement Redis caching and cache invalidation  
   - Test Redis behavior and performance
8. Implement Notes Sharing logic and CRUD  
   - Ensure new versions are created on updates
   - Validate sharing permissions
9. Set up API documentation  
   - Used Postman collection exports for Swagger documentation
10. Dockerize the application  
    - Docker and Docker Compose for both development and production
11. Update project documentation

---

## Reasoning Behind Chosen Implementation

### Architecture

**MVC Architecture**
- Clear separation of concerns
- Improved maintainability and testability
- Easier to scale and extend with new modules
- Encourages code reusability via helpers and utilities
- Easy to understand and navigate

---

### Prisma ORM

- Strong type safety
- Built-in migrations
- Clean abstraction over database queries
- Excellent developer experience
- Familiarity and proven reliability

---

### Swagger Documentation

- Standardized API documentation
- Easy onboarding for developers and reviewers
- Improves API discoverability and usability

---

### Field Indexing

- Indexed frequently queried fields:
  - `userId`
  - `noteId`
  - `versionNumber`
- Full-text indexing on `note.title` and `note.content` for search optimization

---

## Trade-Offs Made During Development

### Authentication Module

**Decisions**
- Skipped email verification for simplicity and time constraints

**Rationale**
- Authentication is JWT-based and modular
- Email verification can be easily added later using:
  - `isVerified` flag on user
  - Existing unique email constraint

---

### Versioning Strategy

**Implementation**
- On note update:
  - Store the previous version in `note_version`
- On revert:
  - Store current version in `note_version`
  - Create a new note version from the selected historical version

**Trade-Offs**
- Increased storage usage
- Slightly more complex service-layer logic

---

### Concurrency Control

**Approach**
- Used **ETag** and **If-Match** headers for optimistic locking
- Prevents lost updates without database-level locks

**Benefits**
- No blocking locks
- Scales well in distributed systems

**Trade-Offs**
- Clients must handle conflict responses
- Retries may be required in case of version mismatch

---

### Full-Text Search Implementation

**Approach**
- Used MySQL Full-Text Search
- Prisma `@@fulltext` index on:
  - `note.content`
  - `note_version.content`

**Trade-Offs**
- Less powerful than dedicated search engines
- No vector or semantic search support

---

### Caching Strategy

**Approach**
- Used Redis for caching frequently accessed data
- Applied TTLs for cached entries
- Cache invalidation on create/update/delete operations

**Trade-Offs**
- Slight increase in business-layer complexity
- Requires careful cache consistency management

---

### Overall Trade-Off Summary

Throughout development, several trade-offs were made to balance simplicity,
performance, and maintainability within the scope of this assessment:

- Chose MySQL full-text search over Elasticsearch to reduce operational
  complexity and setup time.
- Used optimistic locking instead of database-level locks to support
  horizontal scalability at the cost of occasional client retries.
- Implemented Redis caching with manual invalidation, increasing code
  complexity while significantly improving read performance.
- Prioritized clean architecture and clarity over advanced features such as
  real-time collaboration and semantic search.

These decisions were made intentionally to deliver a reliable, scalable, and
maintainable system without over-engineering.

---

## Future Improvements

- Upgrade search to a dedicated engine (e.g., Elasticsearch)
- Introduce roles and permissions for note sharing
- Add WebSocket support for real-time updates
- Further performance and query optimizations

---
