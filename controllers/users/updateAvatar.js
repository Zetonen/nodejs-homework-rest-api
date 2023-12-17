import fs from "fs/promises";
import path from "path";
import Jimp from "jimp";
import { HttpError, paramsAvatar } from "../../helpers/index.js";
import User from "../../model/User.js";

const postersPath = path.resolve("public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id: id } = req.user;
  if (req.file === undefined) {
    throw HttpError(404, "Image not found");
  }
  const { path: oldPath, originalname } = req.file;
  const filename = `${id}_${originalname}`;
  const newPath = path.join(postersPath, filename);

  await paramsAvatar(oldPath);
  await fs.rename(oldPath, newPath);

  const avatarURL = path.join("avatars", filename);
  await User.findByIdAndUpdate(id, { avatarURL });

  res.json({
    avatar: avatarURL,
  });
};

export default updateAvatar;
