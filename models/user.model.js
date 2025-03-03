import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, 'Username is required'],
        trim : true,
        minLength : [2, 'Username must be at least 2 characters long'],
        maxLength : [32, 'Username must be at most 32 characters long'],
    },
    email : {
        type : String,
        required : [true, 'User Email is required'],
        unique : true,
        trim : true,
        lowercase : true,
        match : [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please fill a valid email address'],
    },
    password : {
        type : String,
        required : [true, 'Password is required'],
        minLength : [6, 'Password must be at least 6 characters long'],
    }
}, {timestamps : true});

const User = mongoose.model('User', userSchema);

export default User;