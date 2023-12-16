import { Schema, model } from "mongoose";
import { emailRegexp, subscriptionValues } from "../schema/user-schema.js";


const userSchema = new Schema(
  {
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    email: {
      type: String,
      match: emailRegexp,
      required: [true, "Email is required"],
      unique: true,
    },
    subscription: {
      type: String,
      enum: subscriptionValues,
      default: "starter",
    },
    token: { type: String },
  },
  { versionKey: false }
);

const User = model("user", userSchema);
export default User;
