import express from "express";
import connectDb from "./config/db.js";
import { configDotenv } from "dotenv";
import { mw } from "./middlewares/middleware.js";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";


configDotenv();
const app = express();
const PORT = process.env.PORT;

app.use(express.json())
app.use(cors());
connectDb();

app.use("/",notesRoutes)


app.listen(PORT, () => {});
