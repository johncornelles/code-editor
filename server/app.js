// Import the Express module
import express from "express";
import { config } from "dotenv";
import { db } from "./config/DB.js";
import { authRouter } from "./routes/auth.routes.js";
import { snippetRouter } from "./routes/posts.routes.js";
import cors from "cors"
config()

const app = express();
app.use(cors());
app.use(express.json())
const PORT = 3000;


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