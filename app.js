import express from 'express';
import { PORT } from './config/env.js';

const app = express();

app.get('/', (req,res) => {
    res.send("everything good to go");
});

app.use(express.json());

app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});