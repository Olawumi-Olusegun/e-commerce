import express from 'express';
import { signin, signup, signout } from '../controllers/auth.controller';

const router = express.Router();

router.post("/auth/signup", signup)
router.post("/auth/signin", signin)
router.get("/auth/signout", signout)

export default router;