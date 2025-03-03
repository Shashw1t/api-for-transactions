import mongoose from 'mongoose';
import { DB_URI, NODE_ENV } from '../config/env.js';

if(!DB_URI) {
    throw new Error('PLease define the MongoDB URI environment variable inside .env.<development/>production>.local');
}

const connectToDatabase = async() => {
    try{
        await mongoose.connect(DB_URI);
        console.log(`Database connected in ${NODE_ENV} mode`);
    } catch(error){
        console.log('Error connecting to database', error);
    }
}

export default connectToDatabase;