import express from "express"
import { addPost, deletePost, getLatestPosts, updatePost } from "../controllers/posts.controller.js"
import { protectRoute } from "../middlewares/protectRoute.js"

export const snippetRouter = express()

snippetRouter.get("/getlatestposts",protectRoute ,getLatestPosts)
snippetRouter.post("/addposts",protectRoute ,addPost)
snippetRouter.put("/update/:id", protectRoute, updatePost)
snippetRouter.delete("/delete/:id", protectRoute, deletePost)