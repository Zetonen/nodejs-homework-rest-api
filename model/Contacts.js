import { Schema, model } from "mongoose";
import { handleSaveError, preUpdate } from "./hook.js";

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "set name for contact"],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

contactsSchema.post("save", handleSaveError);
contactsSchema.pre("findOneAndUpdate", preUpdate);
contactsSchema.post("findOneAndUpdate", handleSaveError);

const Contacts = model("contact", contactsSchema);
export default Contacts;
