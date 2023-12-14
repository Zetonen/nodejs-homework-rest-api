import Contacts from "../../model/Contacts.js";

const getAllContacts = async (req, res, next) => {
  const result = await Contacts.find({});
  res.json(result);
};
export default getAllContacts;
