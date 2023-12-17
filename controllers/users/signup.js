import gravatar from "gravatar";
import User from "../../model/User.js";
import bcrypt from "bcryptjs";
import "dotenv/config.js";
import { HttpError } from "../../helpers/index.js";

const signup = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throw HttpError(409, "Email in use");
  }
  const hashPassword = await bcrypt.hash(password, 10);
  const avatarURL = gravatar.url(email);
  const newUser = await User.create({
    ...req.body,
    password: hashPassword,
    avatarURL,
  });
  console.log(newUser);

  res.status(201).json({
    email: newUser.email,
    subscription: newUser.subscription,
  });
};

export default signup;
