import Contacts from "../../model/Contacts.js";

const getAllContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const result = await Contacts.find({ owner });
  res.json(result);
};
export default getAllContacts;
