import express, { Application } from 'express';

import * as dotenv from 'dotenv';

import crypto from 'crypto';

import authRoute from './routes/auth.route';
import userRoute from './routes/user.route';

dotenv.config();

const PORT: number = Number(process.env.PORT) || 2121;

const app: Application = express();

app.use(express.json());

app.get('/', (req: any, res: any) => {
    const token = crypto.randomBytes(36).toString('hex');
    return res.status(200).json({token})
});

app.use("/api/v1", authRoute);
app.use("/api/v1", userRoute);


app.listen(PORT, () => console.log(`App running on port: ${PORT}`))