import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: [true, "Please provide Username"],
    },
    password: {
      type: String,
      required: [true, "Please provide Username"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UserSchema);
