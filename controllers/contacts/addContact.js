import Contacts from "../../model/Contacts.js";

const addContact = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await Contacts.create({ ...req.body, owner });
  res.status(201).json(result);
};
export default addContact;
