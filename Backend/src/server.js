import express from 'express';
import connectDB from './config/db.js';
import cors from 'cors';

// Enable CORS for all routes

const corsOptions = {
  // origin: '*', //allow All origins
  origin: "*",
  Credentials: true, // enable set cookies from browser to pass through
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], //allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], //allowed headers
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  

};

 



import dotenv from 'dotenv';
import noteRoutes from './routes/note_route.js';

import { ratelimiter } from './middleware/ratelimit.js';

dotenv.config(); // Load environment variables from .env file


const app = express();
const PORT = process.env.PORT || 3000;


// Use the CORS middleware
app.use(cors(corsOptions));



// Apply the rate limiting middleware to all requests
app.use(ratelimiter);



app.use(express.json()); // Middleware to parse JSON request bodies

// Use note routes
app.use('/api/notes', noteRoutes);


app.get('/', (req, res) => {
  res.send('Hello World');
});

connectDB().then(() => {
    app.listen(PORT, () => {
      
        // '0.0.0.0' ကို explicitly bind လုပ်ပါ
      app.listen(PORT, '0.0.0.0', () => {
          console.log(`✅ Server is running on http://0.0.0.0:${PORT}`);
          console.log(`✅ Accessible via http://localhost:${PORT}`);
      }); 

  });
}).catch((err) => {
  console.error('Database connection failed:', err);
  process.exit(1); // Exit process with failure
});





