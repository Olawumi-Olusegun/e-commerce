import { NextFunction, Request, Response } from "express";
import ProductModel from "../models/product.model";
import { isValidObjectId } from "mongoose";

export const createNewProduct = async (req: Request, res: Response, next: NextFunction) => {


    const { name, oldPrice, newPrice, productImage, color, category } = req.body;

    try {

        const productExist = await ProductModel.findOne({name});

        if(productExist) {
            return  res.status(400).json({ success: false, message: `A product with: ${name} already exist` })
        }

        const newProduct = new ProductModel({name, oldPrice, newPrice, productImage, color, category});

        const savedProduct = await newProduct.save();

        if(!savedProduct) {
            return res.status(400).json({ success: false, message: "Unable to create new product "})
        }

        const productData = {
            success: true, 
            message: "success",
            data: savedProduct,
        }

        return res.status(201).json(productData)
        
    } catch (error) {
        throw new Error("Unable to create new product")
    }
}

export const fetchAllProducts = async (req: Request, res: Response, next: NextFunction) => {


    try {

        const products = await ProductModel.find({});

        const productData = {
            success: true, 
            message: "success",
            data: products,
        }

        return res.status(200).json(productData)
        
    } catch (error) {
        throw new Error("Unable to create new product")
    }
}

export const fetchProductById = async (req: Request, res: Response, next: NextFunction) => {

    const { productId } = req.params;


    try {

        if(!isValidObjectId(productId)) {
            return res.status(400).json({ success: false, message: "Invalid productId"})
        }

        const product = await ProductModel.findById(productId);

        if(!product) {
            return res.status(404).json({ success: false, message: "Product not found"})
        }

        const productData = {
            success: true, 
            message: "success",
            data: product,
        }

        return res.status(200).json(productData)
        
    } catch (error) {
        throw new Error("Unable to create new product")
    }
}