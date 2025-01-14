import { ctrlWrapper } from "../decorators/index.js";
import * as usersService from "./users/index.js";

export default {
  signup: ctrlWrapper(usersService.signup),
  signin: ctrlWrapper(usersService.signin),
  logout: ctrlWrapper(usersService.logout),
  getCurrent: ctrlWrapper(usersService.getCurrent),
  updateAvatar: ctrlWrapper(usersService.updateAvatar),
  verify: ctrlWrapper(usersService.verify),
  resendVerify: ctrlWrapper(usersService.resendVerify),
};
