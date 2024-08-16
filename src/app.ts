import express from 'express';

import signRouter from './routers/sign';
import userRouter from './routers/user';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Firebase Usr Management PoC');
});

app.use(signRouter);
app.use(userRouter);

export default app;
