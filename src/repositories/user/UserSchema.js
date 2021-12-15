import mongoose from 'mongoose';
export const UserSchema = mongoose.Schema({
    name: String,
    email: String,
    username: String,
    password: String,
    role: String
});
