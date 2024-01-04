import { Model, Schema, model, models } from 'mongoose';
import bcrypt from 'bcrypt';

interface UserDocument extends Document {
    name: string;
    email: string;
    role: "user" | "admin" | "super-admin";
    isVerified: boolean;
    password: string;
    avatar?: {
        id: string;
        imageUrl: string;
    };
    provider: "google" | "github" | "credentials",
    providerId: string;
    accessToken: string;
    refreshToken: string;
    isvalidPassword: (password: string) => Promise<boolean>;
}

interface Method {
    isvalidPassword: (password: string) => Promise<boolean>;
}

const userSchema = new Schema<UserDocument, {}, Method>({
    name: { type: String, required: true, trim: true, },
    email: { type: String, required: true, trim: true, lowercase: true, unique: true },
    role: {type: String, enum: ["user", "admin", "super-admin"], default: "user"},
    isVerified: {type: Boolean, default: false },
    password: { type: String, required: true, trim: true, },
    avatar: {  id: String, imageUrl: String, },
    provider:{ type: String, enum: ["google", "github", "credentials" ], default: "credentials" },
    providerId: { type: String, default: ""},
    accessToken: { type: String, default: "", },
    refreshToken: { type: String, default: "", },
}, {timestamps: true});

userSchema.pre("save", async function(next) {
    try {
        if(this.isModified("password")) {
            const salt = await bcrypt.genSalt(12);
            const hashedPassword = await bcrypt.hash(this.password, salt);
            this.password = hashedPassword;
        }
        next();
    } catch (error) {
        throw error;
    }
});

userSchema.methods.isvalidPassword = async function(password) {
    try {
        return await bcrypt.compare(password, this.password);
    } catch (error) {
        throw error;
    }
}

const UserModel = models.User || model("User", userSchema);

export default UserModel as Model<UserDocument, {}, Method>;