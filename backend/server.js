import express from 'express';
import dotenv from 'dotenv';
import connectDB from './DB/db.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 7070;

app.get('/', (req, res) => {
    res.send("Hello World");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});