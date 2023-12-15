import Joi from "joi";

export const contactsAddSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required": `missing required "name" field`,
    "string.base": `"name" must be text`,
  }),
  email: Joi.string().required().messages({
    "any.required": `missing required "email" field`,
    "string.base": `"email" must be text`,
  }),
  phone: Joi.string().required().messages({
    "any.required": `missing required "phone" field`,
    "string.base": `"phone" must be text`,
  }),
  favorite: Joi.boolean(),
});

export const contactsUpdateSchema = Joi.object({
  name: Joi.string().messages({
    "string.base": `"name" must be text`,
  }),
  email: Joi.string().messages({
    "string.base": `"email" must be text`,
  }),
  phone: Joi.string().messages({
    "string.base": `"phone" must be text`,
  }),
  favorite: Joi.boolean().messages({
    "boolean.base": `"favorite" must be bool`,
  }),
});

export const contactsFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required().messages({
    "boolean.base": `"favorite" must be bool`,
  }),
});
