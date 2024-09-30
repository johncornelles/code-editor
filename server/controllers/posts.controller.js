import { Snippet } from "../models/snippet.model.js";

// Add a new snippet
export const addPost = async (req, res) => {
    try {
        const { snippet } = req.body;
        const userID = req.userID;

        const newSnippet = await Snippet.create({
            snippet,
            userID,
            createdby: req.user.username
        });


        return res.status(201).json({
            message: "Snippet created successfully",
            snippet: newSnippet
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to create snippet",
            error: error.message
        });
    }
};

// Get the latest posts
export const getLatestPosts = async (req, res) => {
    try {
        const snippets = await Snippet.find() // Sort by creation date descending
        return res.status(200).json(snippets.reverse()); // Reverse to make the latest post first
    } catch (error) {
        return res.status(500).json({
            message: "Failed to retrieve snippets",
            error: error.message
        });
    }
};

// Update a post
export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        const { snippet } = req.body;
        const userID = req.userID;
        // Find the snippet by ID
        const existingSnippet = await Snippet.findById(id);

        // Ensure the user is the creator of the snippet
        if (!existingSnippet || existingSnippet.userID != userID) {
            return res.status(403).json({ message: "Unauthorized action" });
        }

        // Update the snippet
        existingSnippet.snippet = snippet;
        await existingSnippet.save();

        return res.status(200).json({
            message: "Snippet updated successfully",
            snippet: existingSnippet
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to update snippet",
            error: error.message
        });
    }
};

// Delete a post
export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const userID = req.userID;

        // Find the snippet by ID
        const snippet = await Snippet.findById(id);

        // Ensure the user is the creator of the snippet
        if (!snippet || snippet.userID != userID) {
            return res.status(403).json({ message: "Unauthorized action" });
        }

        // Delete the snippet
        await Snippet.findByIdAndDelete(id);

        return res.status(200).json({
            message: "Snippet deleted successfully"
        });
    } catch (error) {
        return res.status(500).json({
            message: "Failed to delete snippet",
            error: error.message
        });
    }
};
