import Jimp from "jimp";

const paramsAvatar = async (path) => {
  if (path === undefined) return;
  const image = await Jimp.read(path);
  return await image.resize(250, 250).writeAsync(path);
};

export default paramsAvatar;
