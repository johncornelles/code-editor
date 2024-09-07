import mongoose from "mongoose";

const snippet = mongoose.Schema({
    snippet: {
        type: String,
        required: true
    },
    createdby: {
        type: String,
        required: true
    },
    userID: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true
    }
},{ timestamps: true })

export const Snippet = mongoose.model("Snippet", snippet)