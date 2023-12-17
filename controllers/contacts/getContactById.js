import { HttpError } from "../../helpers/index.js";
import Contacts from "../../model/Contacts.js";

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;
  console.log(contactId);
  console.log(owner);
  const result = await Contacts.findOne({ _id: contactId, owner });
  if (!result) {
    throw HttpError(404, `Contact with id = ${contactId} is found`);
  }
  res.json(result);
};
export default getContactById;
