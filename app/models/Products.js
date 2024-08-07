import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    Title: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
    },
    Category: {
        type: String,
    },
    Price: {
        type: Number,
    },
    Stock: {
        type: Number,
    },
    Color: {
        type: String,
    },
    Size: {
        type: Number
    },
    Description: {
        type: String,
    }
}, { timestamps: true });
const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

export default Product;
