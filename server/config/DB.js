import mongoose from "mongoose";

export const db = async () => {
    try {
        console.log("started out")
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error.message)
    }
}