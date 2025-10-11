import rateLimit from 'express-rate-limit'; // Import rate limiting middleware
import Redis from 'ioredis';
import RedisStore from 'rate-limit-redis';
import { REDIS_PASSWORD } from './config.js'; // Import Redis password from config

// Configure Redis client
const redisClient = new Redis({
    host: 'redis', // Replace with your Redis host
    port: 6379,        // Replace with your Redis port
    password: REDIS_PASSWORD, // Use the imported password
});



// Define rate limiting middleware using Redis store
// Set a limit of 100 requests per 30 seconds per IP
const limiter = rateLimit({
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
    }),
    windowMs: 30 * 1000, // 30 seconds
    max: 30, // Limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP, please try again later.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
}); 


// Define a separate rate limiter for authenticated users (if needed)

const userLimiter = rateLimit({
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
    }),
    windowMs: 10 * 10 * 1000, // 10 minutes
    max: 10, // Limit each user to 100 requests per windowMs
    keyGenerator: (req) => req.user.id, // Use user ID as the key
    message: 'Too many requests from this user, please try again later.',
    standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
    legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export { userLimiter , limiter};