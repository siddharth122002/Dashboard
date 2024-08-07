import { connectDB } from "./libs/connectDB"
import Product from "./models/Products";
import User from "./models/Users";
//users
export async function fetchings() {
    try {
        await connectDB();
        const allData = await User.find();
        return allData;
    } catch (e) {
        console.log(e)
    }
}
export async function fetchUser(id) {
    try {
        await connectDB();
        const user = await User.findById(id);
        return user;
    } catch (e) {
        console.log(e)
    }
}
//products
export async function fetchingsProduct() {
    try {
        await connectDB();
        const allData = await Product.find();
        return allData;
    } catch (e) {
        console.log(e)
    }
}
export async function fetchSingleProduct(id) {
    try {
        await connectDB();
        const prod = await Product.findById(id);
        return prod;
    } catch (e) {
        console.log(e)
    }
}
