import express from 'express';
import { deleteUserById, findAllUsers, getUserById, updateUserById } from '../controllers/user.controller';
import { authExist, isAdmin } from '../middlewares/auth.Middleware';

const router = express.Router();

router.get("/users", findAllUsers);

router.route("/user/:userId")
      .get(authExist, getUserById)
      .patch(authExist, updateUserById)
      .delete(authExist, isAdmin,deleteUserById)


export default router;