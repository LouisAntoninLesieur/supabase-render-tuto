import 'dotenv/config';
import express from 'express';
import { MainRouter } from './src/router/MainRouter.js';

export const app = express();

app.use(express.json());

const apiRouter = new MainRouter();
app.use('/api', apiRouter.routes);

// Example of listening on port 3000
// Useful for testing your API endpoints on your local machine

// app.listen(3000, () => {
//   console.log('Lift-off ! 🚀 Your API is running on http://localhost:3000');
// })