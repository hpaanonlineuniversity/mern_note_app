import { limiter, userLimiter } from '../config/ratelimit.js';

// Middleware function to handle rate limiting errors

//rate limiter middleware with error handling for per ip
const ratelimiter = async (req, res, next) => {
    try {
        await limiter(req, res, next);
    } catch (error) {
        console.error('Rate limiting error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//rate limiter middleware with error handling for per user
const userRatelimiter = async (req, res, next) => {
    try {
        await userLimiter(req, res, next);
    } catch (error) {
        console.error('User rate limiting error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

export { userRatelimiter , ratelimiter };