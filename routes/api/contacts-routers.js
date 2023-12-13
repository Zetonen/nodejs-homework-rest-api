import express from "express";
import contactsControllers from "../../controllers/contacts-controllers.js";
import {
  contactsAddSchema,
  contactsUpdateSchema,
  contactsFavoriteSchema
} from "../../schema/contacts-schema.js";
import { isEmptyBody,isValidId } from "../../middlewares/index.js";
import { validaterBody } from "../../decorators/index.js";
const router = express.Router();

router.get("/", contactsControllers.getAll);

router.get("/:contactId", isValidId, contactsControllers.getById);

router.post(
  "/",
  isEmptyBody,
  validaterBody(contactsAddSchema),
  contactsControllers.add
);

router.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validaterBody(contactsUpdateSchema),
  contactsControllers.updateById
);

router.patch(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validaterBody(contactsFavoriteSchema),
  contactsControllers.updateStatusContact
);

router.delete("/:contactId", isValidId, contactsControllers.deleteById);

export default router;
