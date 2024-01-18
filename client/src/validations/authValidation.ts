import { ZodType, z } from 'zod';


interface Props {
    email: string;
    password: string;
}

export const SignInSchema: ZodType<Props> = z.object({
    email: z.string().min(3, "Minimum of 3 character is required").email(),
    password: z.string().min(8, "Password is required"),
});

export const SignUpSchema = z.object({
    name: z.string().min(2, "Minimum of 2 character is is required"),
    email: z.string().min(3, "Minimum of 3 character is is required").email(),
    password: z.string().min(8, "Minimum of 8 character is is required"),
});


export const ProductSchema = z.object({
    title: z.string().min(2, "Minimum of 2 character is is required"),
    reviews: z.string(),
    ratings: z.number(),
    prevPrice: z.number(),
    newPrice: z.number(),
    company: z.string(),
    color: z.string(),
    category: z.string(),
    img: z.string(),
});