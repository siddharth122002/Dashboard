import { redirect } from "next/navigation";
import User from "../models/Users";
import { connectDB } from "./connectDB";
import Product from "../models/Products";
import { revalidatePath } from "next/cache";
const bcrypt = require('bcrypt');
const addUser = async (form) => {
    "use server" //important else wont work
    try {
        await connectDB();
        const { Name, Image, Email, Password, Role, Status, Address } = Object.fromEntries(form);
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(Password, salt)
        const newUser = await User.create({
            Name,
            Image,
            Email,
            Password: hashedPassword,
            Role,
            Status,
            Address,
        })
        await newUser.save();
    } catch (e) {
        console.log(e);
    }
    return redirect('/dashboard/users')
}
const updateUser = async (form) => {
    "use server"
    try {
        await connectDB();
        const { id, Name, Email, Password, Address, Role, Status } = Object.fromEntries(form);
        const updatedField = {
            Name,
            Email,
            Password,
            Role,
            Status,
            Address,
        }
        await User.findByIdAndUpdate(id, updatedField)
    } catch (e) {
        console.log(e);
    }
    return redirect('/dashboard/users')
}
const deleteUser = async (form) => {
    "use server"
    try {
        await connectDB();
        const { id } = Object.fromEntries(form);
        await User.findByIdAndDelete(id);
    } catch (e) {
        console.log(e);
    }
    return revalidatePath('/dashboard/users');
}

const addProduct = async (form) => {
    "use server"
    try {
        await connectDB();
        const { Title, Image, Category, Price, Stock, Color, Size, Description } = Object.fromEntries(form);
        const newProduct = await Product.create({
            Title,
            Image,
            Category,
            Price,
            Stock,
            Color,
            Size,
            Description,
        })
        await newProduct.save();
    } catch (e) {
        console.log(e);
    }
    return redirect('/dashboard/products')
}
const updateProduct = async (form) => {
    "use server"
    try {
        await connectDB();
        const { id, Title, Image, Category, Price, Stock, Color, Size, Description } = Object.fromEntries(form);
        const newProduct = {
            Title,
            Image,
            Category,
            Price,
            Stock,
            Color,
            Size,
            Description,
        }
        // console.log(newProduct);
        await Product.findByIdAndUpdate(id, newProduct)
    } catch (e) {
        console.log(e);
    }
    return redirect('/dashboard/products')
}

const deleteProduct = async (form) => {
    "use server"
    try {
        await connectDB();
        const { id } = Object.fromEntries(form);
        await Product.findByIdAndDelete(id);
    } catch (e) {
        console.log(e);
    }
    return revalidatePath('/dashboard/products');
}


export { addUser, addProduct, deleteUser, deleteProduct, updateUser, updateProduct }