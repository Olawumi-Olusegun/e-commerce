import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { isValidObjectId } from "mongoose";
import UserModel from "../models/user.model";
import { RequestWithUserId } from "../type";

const findUserById = async (userId: string) => {
    try {
        const user = await UserModel.findById(userId);
        return user || null;

    } catch (error) {
        throw error;
    }
}

export const authExist = async (req: RequestWithUserId, res: Response, next: NextFunction) => {
    
    const token = req.cookies["accessToken"] ?? null;

    if(!token) {
        return res.status(401).json({success: false, message: "Unathorized."});
    }

    try {

        const verifyToken = jwt.verify(token, "secret") as { id: string };

        const userId = verifyToken.id;

        if(!isValidObjectId(userId)){
            return res.status(401).json({success: false, message: "Unathorized.."});
        }

        const user = await UserModel.findById(userId);

        if(!user) {
            return res.status(401).json({success: false, message: "User not found"});
        }

        req.userId = userId;

        next();
        
    } catch (error) {
        return res.status(500).json({success: false, message: error?.message });
    }
}

export const isAdmin = async (req: RequestWithUserId, res: Response, next: NextFunction) => {
    const userId = req.userId;
    
    if(!userId) {
        return res.status(401).json({success: false, message: "Unathorized."});
    }

    if(!isValidObjectId(userId)) {
        return res.status(401).json({success: false, message: "Invalid ID"});
    }

    try {

        const user = await UserModel.findById(userId);

        if(!user) {
            return res.status(401).json({success: false, message: "User not found"});
        }

        const roles = ["admin", "super-admin"];

        if(!roles.includes(user.role)) {
            return res.status(401).json({success: false, message: "Unathorized..."});
        }

        next();

    } catch (error) {
        throw error;
    }
}