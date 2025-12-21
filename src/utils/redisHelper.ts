import { getRedisClient } from "../config/redis";
import { debugLog } from "./helper";

// cache prefixes and patterns
export const CACHE_KEYS = {
  NOTE: (noteId: string) => `note:${noteId}`,
  USER_NOTES: (userId: number, page: number, limit: number) => `user:${userId}:notes:page:${page}:limit:${limit}`,
  SEARCH_NOTES: (userId: number, query: string, page: number, limit: number) => `user:${userId}:search:${query}:page:${page}:limit:${limit}`,
  USER_NOTES_PATTERN: (userId: number) => `user:${userId}:notes:*`,
  SEARCH_PATTERN: (userId: number) => `user:${userId}:search:*`,
};

// ttl configurations in seconds
export const CACHE_TTL = {
  NOTE: 3600, // 1 hour for individual notes
  NOTE_LIST: 600, // 10 minutes for note lists
  SEARCH_RESULTS: 300, // 5 minutes for search results
};

// get cached data
export const getCache = async <T>(key: string): Promise<T | null> => {
  try {
    const redis = await getRedisClient();
    const data = await redis.get(key);

    if (!data) {
      debugLog(`Cache miss for key: ${key}`);
      return null;
    }

    debugLog(`Cache hit for key: ${key}`);
    return JSON.parse(data) as T;
  } catch (error) {
    debugLog("Error getting cache:", error);
    return null; //fail gracefully
  }
};

//set cache data
export const setCache = async (key: string, data: any, ttl: number = CACHE_TTL.NOTE): Promise<void> => {
  try {
    const redis = await getRedisClient();
    await redis.setEx(key, ttl, JSON.stringify(data));
    debugLog(`Cache set for key: ${key} with TTL: ${ttl}s`);
  } catch (error) {
    debugLog("Error setting cache:", error);
    // Fail gracefully - caching is not critical
  }
};

// delete a specific cache key
export const deleteCache = async (key: string): Promise<void> => {
  try {
    const redis = await getRedisClient();
    await redis.del(key);
    debugLog(`Cache deleted for key: ${key}`);
  } catch (error) {
    debugLog("Error deleting cache:", error);
  }
};

// delete all keys matching a pattern
export const deleteCachePattern = async (pattern: string): Promise<void> => {
  try {
    const redis = await getRedisClient();
    const keys = await redis.keys(pattern);

    if (keys.length > 0) {
      await redis.del(keys);
      debugLog(`Cache deleted for pattern: ${pattern}, count: ${keys.length}`);
    }
  } catch (error) {
    debugLog("Error deleting cache pattern:", error);
  }
};

// invalidate all caches related to a user's notes
export const invalidateUserNotesCache = async (userId: number): Promise<void> => {
  try {
    await Promise.all([deleteCachePattern(CACHE_KEYS.USER_NOTES_PATTERN(userId)), deleteCachePattern(CACHE_KEYS.SEARCH_PATTERN(userId))]);
    debugLog(`Invalidated all note caches for user: ${userId}`);
  } catch (error) {
    debugLog("Error invalidating user notes cache:", error);
  }
};

// invalidate cache for a specific note and related user note lists
export const invalidateNoteCache = async (noteId: string, userId: number): Promise<void> => {
  try {
    await Promise.all([deleteCache(CACHE_KEYS.NOTE(noteId)), invalidateUserNotesCache(userId)]);
    debugLog(`Invalidated cache for note: ${noteId}`);
  } catch (error) {
    debugLog("Error invalidating note cache:", error);
  }
};
