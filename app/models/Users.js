import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Image: {
        type: String,
    },
    Email: {
        type: String,
    },
    Password: {
        type: String,
    },
    Role: {
        type: Boolean,
    },
    Status: {
        type: Boolean
    },
    Address: {
        type: String,
    }
}, { timestamps: true });
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
