import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes.js";

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

//ROUTES----------------------------------
app.use("/api/users", userRoutes);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
