
import { Model, Schema, model, models } from 'mongoose';

interface productDocument extends Document {
    name: string;
}

const productSchema = new Schema<productDocument>({
    name: { type: String, required: true, trim: true, },
}, {timestamps: true});

const ProductModel = models.Product || model("Product", productSchema);

export default ProductModel as Model<productDocument>;