import express from "express";
import contactsControllers from "../../controllers/contacts-controllers.js";
import {
  contactsAddSchema,
  contactsUpdateSchema,
} from "../../schema/contacts-schema.js";
import { isEmptyBody } from "../../middlewares/index.js";
import { validaterBody } from "../../decorators/index.js";
const router = express.Router();

router.get("/", contactsControllers.getAll);

router.get("/:contactId", contactsControllers.getById);

router.post(
  "/",
  isEmptyBody,
  validaterBody(contactsAddSchema),
  contactsControllers.add
);

router.put(
  "/:contactId",
  isEmptyBody,
  validaterBody(contactsUpdateSchema),
  contactsControllers.updateById
);

router.delete("/:contactId", contactsControllers.deleteById);

export default router;
