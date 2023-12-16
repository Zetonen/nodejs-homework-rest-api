import { HttpError } from "../../helpers/index.js";
import Contacts from "../../model/Contacts.js";

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const { _id: owner } = req.user;

  const result = await Contacts.findOneAndUpdate({_id: contactId, owner}, req.body);
  // console.log(result);
  if (!result) {
    throw HttpError(404, `Contact with id = ${contactId} is found`);
  }
  res.json(result);
};
export default updateContactById;
