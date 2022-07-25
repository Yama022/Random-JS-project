import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import db from './config/Database.js';
import router from './routes/routes/index.js';
dotenv.config();
const app = express();

app.use(cors({ credentials:true, origin: 'http://localhost:3000' }));
app.use(cookieParser());
app.user(express.json());
app.use(router);

app.listen(5000, () => console.log('Server running on port 5000'));
