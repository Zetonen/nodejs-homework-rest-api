import jwt from "jsonwebtoken";
import "dotenv/config.js";
import { HttpError } from "../helpers/index.js";
import User from "../model/User.js";
import ctrlWrapper from "../decorators/ctrlWrapper.js";

const { JWT_SECRET } = process.env;

const authenticate = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    throw HttpError(401, "Not authorized");
  }
  const [bearer, token] = authorization.split(" ");

  if (bearer !== "Bearer") {
    throw HttpError(401);
  }
  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);
    if (!user || !user.token || user.token !== token) {
      throw HttpError(401, "user not found");
    }
    req.user = user;
    next();
  } catch (error) {
    throw HttpError(401, error.message);
  }
};
export default ctrlWrapper(authenticate);
