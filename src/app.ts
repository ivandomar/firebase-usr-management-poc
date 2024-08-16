import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Firebase Usr Management PoC');
});

export default app;
