import mongoose, { Schema } from "mongoose";

export interface IContact {
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactSchema = new Schema<IContact>({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    trim: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please add a valid email",
    ],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model is already defined to prevent errors during hot reloading
const Contact = mongoose.models.Contact || mongoose.model<IContact>("Contact", ContactSchema);

export default Contact; 