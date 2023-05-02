import express from "express";
import userRouter from "./routes/user.route.js";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
dotenv.config();


const app = express();
const port = 5000;

// Login Routes  https://localhost:5000/api/login
app.use("/api/", userRouter);

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`server is listening on port: http://localhost:${port}/`);
    });
  })
  .catch((err) => {
    console.log("error: ", err);
  });
