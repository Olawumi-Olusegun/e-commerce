import jwt from 'jsonwebtoken';
import crypto from 'crypto';


export const generateToken = (id: string, secret: string, expiresIn: string) => {

    const tokenCrypt = crypto.randomBytes(36).toString("hex");

    try {
        const token = jwt.sign({id}, secret, { expiresIn });
        return token;
    } catch (error) {
        throw error;
    }
}