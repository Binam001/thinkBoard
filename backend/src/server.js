import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json()); // Middleware to parse JSON bodies

app.use(cors());

// Middleware to log requests (optional, can be uncommented for debugging)
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

connectDB().then(() =>{
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
  })
})