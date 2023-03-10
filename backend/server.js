import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler } from "./middleware/errorMiddleware.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Connect to database
connectDB();

const PORT = process.env.PORT || 5000;

//ROUTES----------------------------------
app.use("/api/users", userRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
