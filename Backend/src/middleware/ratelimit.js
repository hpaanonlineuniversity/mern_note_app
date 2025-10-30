import { limiter, userLimiter } from '../config/ratelimit.js';

// ✅ Direct export လုပ်လို့ရတယ်
export const ratelimiter = limiter;
export const userRatelimiter = userLimiter;