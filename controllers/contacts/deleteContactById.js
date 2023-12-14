import { HttpError } from "../../helpers/index.js";
import Contacts from "../../model/Contacts.js";

const deleteContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contacts.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, `Contact with id = ${contactId} is found`);
  }
  res.json({ message: "contact deleted" });
};
export default deleteContactById;
