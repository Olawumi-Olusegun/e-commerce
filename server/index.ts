import express, { Application } from 'express';

import * as dotenv from 'dotenv';

import authRoute from './routes/auth.route';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 8080;

const app: Application = express();

app.use(express.json());

app.use("/api/v1", authRoute);


app.listen(PORT, () => console.log(`App running on port:${PORT}`))