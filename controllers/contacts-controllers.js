import { ctrlWrapper } from "../decorators/index.js";
import * as contactsService from "./contacts/index.js";

export default {
  getAll: ctrlWrapper(contactsService.getAllContacts),
  getById: ctrlWrapper(contactsService.getContactById),
  add: ctrlWrapper(contactsService.addContact),
  updateById: ctrlWrapper(contactsService.updateContactById),
  updateStatusContact: ctrlWrapper(contactsService.updateStatusContact),
  deleteById: ctrlWrapper(contactsService.deleteContactById),
};
