import rateLimit from 'express-rate-limit';
import Redis from 'ioredis';
import RedisStore from 'rate-limit-redis';
import { REDIS_PASSWORD } from './config.js';

const redisClient = new Redis({
    host: 'redis',
    port: 6379,
    password: REDIS_PASSWORD,
});

// Define rate limiting middleware using Redis store
const limiter = rateLimit({
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
        prefix: 'noteapp:rate-limit:',
    }),
    windowMs: 30 * 1000, // 30 seconds
    max: 30, // Limit each IP to 30 requests per windowMs
    message: {
        error: 'Too many requests from this IP, please try again later.',
        status: 429
    },
    statusCode: 429, // ✅ 429 status code ပြန်ပါ
    standardHeaders: true,
    legacyHeaders: false,
});

const userLimiter = rateLimit({
    store: new RedisStore({
        sendCommand: (...args) => redisClient.call(...args),
        prefix: 'noteapp:rate-limit:',
    }),
    windowMs: 10 * 60 * 1000, // ✅ 10 minutes (ပြင်ထားတာ)
    max: 10,
    keyGenerator: (req) => req.user?.id, // ✅ optional chaining သုံးပါ
    message: {
        error: 'Too many requests from this user, please try again later.',
        status: 429
    },
    statusCode: 429, // ✅ 429 status code ပြန်ပါ
    standardHeaders: true,
    legacyHeaders: false,
});

export { userLimiter, limiter };