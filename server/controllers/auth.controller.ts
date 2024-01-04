import { NextFunction, Request, Response } from "express";
import UserModel from "../models/user.model";
import { generateToken } from "../helpers/tokens";


export const signin = async (req: Request, res: Response, next: NextFunction) => {

    const { email, password } = req.body;

    try {

        const userExist = await UserModel.findOne({email});
        
        if(!userExist) {
            return res.status(400).json({success: false, message: `User with ${email} does not exist`});
        }

        const isvalidPassword = await userExist.isvalidPassword(password);

        if(!isvalidPassword) {
            return res.status(400).json({success: false, message: "Invalid credentials" });
        }

        const userData = {
            id: userExist.id,
            name: userExist.name,
            email: userExist.email,
            avatar: userExist?.avatar?.imageUrl || ""
        }

        const accessToken = generateToken(userExist.id, process.env.ACCESS_TOKEN_SECRET || "", "30m");
        const refreshToken = generateToken(userExist.id, process.env.ACCESS_TOKEN_SECRET || "", "30d");

        res.cookie("accessToken", 
        accessToken,
        {
            httpOnly: true,
            expires: new Date(Date.now() + 3600000),
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: "lax"
        })

        res.cookie("refreshToken", 
        refreshToken,
        {
            httpOnly: true,
            expires: new Date(Date.now() + 3600000),
            secure: process.env.NODE_ENV === "production" ? true : false,
            sameSite: "lax"
        })

        return res.status(201).json({success: true, message: "Login successful", userData})
        
    } catch (error) {
         return res.status(500).json({success: false, message: error?.message })
    }
}

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    const { name, email, password } = req.body;

    try {
        const userExist = await UserModel.findOne({email});
        if(userExist) {
            return res.status(400).json({success: false, message: `User with ${email} already exist`});
        }

        const newUser = new UserModel({name, email, password });
        const savedUser = await newUser.save();

        if(!savedUser) {
            return res.status(400).json({success: false, message: "Singup failed"});
        }

        return res.status(201).json({success: true, message: "User created"});

    } catch (error) {
        return res.status(500).json({success: false, message: error?.message })
    }
}

export const signout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch (error) {
        
    }
}