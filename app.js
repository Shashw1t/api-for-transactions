import express from 'express';
import { PORT } from './config/env.js';

import authRouter from './routes/auth.routes.js';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

import connectToDatabase from './database/mongodb.js'; // Import the connectToDatabase function
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.use(errorMiddleware);

app.get('/', (req, res) => {
  res.send("everything good to go");
});

app.listen(PORT, async() => {
  console.log(`server running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
