import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";
import { RequestWithUserId } from "../type";
import { isValidObjectId } from "mongoose";


export const findAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await UserModel.find({});
        
        const allUsers = users.length > 0 ? users.map((user) => {
            return {
                id: user.id,
                name: user.name,
                email: user.email,
                avatar: user.avatar?.imageUrl || ""
            }
        }) : [];

        return res.status(200).json({success: true, message: "All users", users: allUsers })
    } catch (error) {
        return res.status(500).json({success: false, message: error?.message })
    }
}


export const getUserById = async (req: RequestWithUserId, res: Response, next: NextFunction) => {

    const { userId } = req.params;

    try {
        
        if(!isValidObjectId(userId)) {
            return res.status(401).json({success: false, message: "Invalid user" });
        }

        const user = await UserModel.findById(userId);

        if(!user) {
            return res.status(404).json({success: false, message: "User not found" });
        }
        
        const userData = {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            avatar: user.avatar?.imageUrl || ""
        }

        return res.status(200).json({success: true, message: "User", user: userData })
    } catch (error) {
        return res.status(500).json({success: false, message: error?.message })
    }
}

export const updateUserById = async (req: RequestWithUserId, res: Response, next: NextFunction) => {

    const { userId } = req.params;

    const { email, avatar } = req.body;

    const dataToUpdate = { email, avatar };

    if(!avatar) {
        delete dataToUpdate.avatar
    }

    try {
        
        if(!isValidObjectId(userId)) {
            return res.status(401).json({success: false, message: "Invalid user" });
        }

        const user = await UserModel.findById(userId);

        if(!user) {
            return res.status(404).json({success: false, message: "User not found" });
        }

        const updatedUser = await UserModel.findByIdAndUpdate(userId, {
            $set: dataToUpdate
        },{ new: true } );

        if(!updatedUser) {
            return res.status(400).json({success: false, message: "Unable to update user" });
        }
        
        const userData = {
            id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            role: updatedUser.role,
            avatar: updatedUser.avatar?.imageUrl || ""
        }

        return res.status(200).json({success: true, message: "User", user: userData })
    } catch (error) {
        return res.status(500).json({success: false, message: error?.message })
    }
}

export const deleteUserById = async (req: RequestWithUserId, res: Response, next: NextFunction) => {

    const { userId } = req.params;

    try {
        
        if(!isValidObjectId(userId)) {
            return res.status(401).json({success: false, message: "Invalid user" });
        }

        const user = await UserModel.findById(userId);

        if(!user) {
            return res.status(404).json({success: false, message: "User not found" });
        }

        const deletedUser = await UserModel.findByIdAndDelete(userId);

        if(!deletedUser) {
            return res.status(400).json({success: false, message: "Unable to delete user" });
        }
      
        return res.status(200).json({success: true, message: "User deleted", })
    } catch (error) {
        return res.status(500).json({success: false, message: error?.message })
    }
}