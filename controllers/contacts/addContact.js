import Contacts from "../../model/Contacts.js";

const addContact = async (req, res) => {
  const result = await Contacts.create(req.body);
  res.status(201).json(result);
};
export default addContact;