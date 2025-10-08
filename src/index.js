import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});
/*
const app = express();
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERRR: ", error);
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
  }
})();
*/

connectDB()
  .then(() => {
    app.listen(process.env.PPORT || 8000, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    })
  })
  .catch(() => {
  console.log("MongoDb connection Failed !!!!!!");
  
})