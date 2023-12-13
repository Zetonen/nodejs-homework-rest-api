import { HttpError } from "../helpers/index.js";
import { ctrlWrapper } from "../decorators/index.js";
import Contacts from "../model/Contacts.js";

const getAll = async (req, res, next) => {
  const result = await Contacts.find({});
  res.json(result);
};

const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contacts.findById(contactId);
  if (!result) {
    throw HttpError(404, `Contact with id = ${contactId} is found`);
  }
  res.json(result);
};

const add = async (req, res) => {
  const result = await Contacts.create(req.body);
  res.status(201).json(result);
};

const updateById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contacts.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw HttpError(404, `Contact with id = ${contactId} is found`);
  }
  res.json(result);
};

const updateStatusContact  = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contacts.findByIdAndUpdate(contactId, req.body);
  if (!result) {
    throw HttpError(404, `Contact with id = ${contactId} is found`);
  }
  res.json(result);
};

const deleteById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contacts.findByIdAndDelete(contactId);
  if (!result) {
    throw HttpError(404, `Contact with id = ${contactId} is found`);
  }
  res.json({ message: "contact deleted" });
};

export default {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  updateById: ctrlWrapper(updateById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  deleteById: ctrlWrapper(deleteById),
};
