import mongoose from "mongoose";
import dotenv, { config } from "dotenv";
import app from "./app.js";

dotenv.config();

const POERT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL || "no-mongo-url";

mongoose.connect(MONGO_URL).then(() => {
    console.log("Connected to MongoDB");
    app.listen(POERT, () => {
        console.log(`Server is running on port ${POERT}`);
    });
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
});