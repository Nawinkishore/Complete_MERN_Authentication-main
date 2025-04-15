import mongoose from "mongoose";
import { config } from "dotenv"; // Import the config function from dotenv

config({ path: "../config.env" }); // Load environment variables from config.env

export const connection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_AUTHENTICATION",
    })
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some error occurred while connecting to database: ${err}`);
    });
};