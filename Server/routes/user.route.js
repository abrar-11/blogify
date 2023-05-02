import { Router } from "express";
import User from "../models/user.model.js";

const router = Router();

router.get("/login", async (req, res) => {
  const username = "brucew";
  const password = "abcde";
  try {
    const user = await User.findOne({ username });
    if (user) {
      const isPassword = await User.findOne({ username, password });
      if (isPassword) {
        res.status(200).json({
          success: true,
          message: "Login Successfully..",
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Password is incorrect",
        });
      }
    } else {
      res.status(500).json({
        success: false,
        message: "Username is invalid",
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});

//
//
//
//
//
//
//

router.get("/register", async (req, res) => {
  const userData = {
    username: "bruce",
    password: "abcd",
  };

  try {
    const newUser = new User(userData);
    const result = await newUser.save();

    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
});
router.post("/register", (req, res) => {
  res.send("register");
});

export default router;
