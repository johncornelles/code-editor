// Import the Express module
import express from "express";
import { config } from "dotenv";
import { db } from "./config/DB.js";
import { authRouter } from "./routes/auth.routes.js";
import { snippetRouter } from "./routes/posts.routes.js";

config()
const app = express();
app.use(express.json())
const PORT = 3000;



// Start the server and listen on the defined port

const start = async () => {
  try {
    await db()
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error.message)
  }
}

start()

app.use("/auth", authRouter)
app.use("/snippet", snippetRouter)