import { HttpError } from "../../helpers/index.js";
import Contacts from "../../model/Contacts.js";

const updateStatusContact = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  const result = await Contacts.findOneAndUpdate(contactId, req.body);
  if (!result) {
    throw HttpError(404, `Contact with id = ${contactId} is found`);
  }
  res.json(result);
};
export default updateStatusContact;
