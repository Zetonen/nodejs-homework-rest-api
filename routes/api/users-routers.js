import express from "express";
import usersController from "../../controllers/user-controllers.js";
import validaterBody from "../../decorators/validateBody.js";
import {
  userAvatarsSchema,
  userSigninSchema,
  userSignupSchema,
} from "../../schema/user-schema.js";
import { isEmptyBody, authenticate, upload } from "../../middlewares/index.js";

const usersRouter = express.Router();

usersRouter.post(
  "/register",
  isEmptyBody,
  validaterBody(userSignupSchema),
  usersController.signup
);

usersRouter.post(
  "/login",
  isEmptyBody,
  validaterBody(userSigninSchema),
  usersController.signin
);

usersRouter.post("/logout", authenticate, usersController.logout);

usersRouter.get("/current", authenticate, usersController.getCurrent);

usersRouter.patch(
  "/avatars",
  authenticate,
  upload.single("avatar"),
  validaterBody(userAvatarsSchema),
  usersController.updateAvatar
);

export default usersRouter;
