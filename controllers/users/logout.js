import User from "../../model/User.js";

const logout = async (req, res) => {
  const { _id } = req.user;
  //   console.log(req.user);
  await User.findByIdAndUpdate(_id, { token: "" });
  res.status(204).send();
};

export default logout;
