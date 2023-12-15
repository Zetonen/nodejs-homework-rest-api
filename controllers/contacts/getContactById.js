import { HttpError } from "../../helpers/index.js";
import Contacts from "../../model/Contacts.js";

const getContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contacts.findById(contactId);
  if (!result) {
    throw HttpError(404, `Contact with id = ${contactId} is found`);
  }
  res.json(result);
};
export default getContactById;
