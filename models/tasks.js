import mongoose, { Schema } from "mongoose";

const Taskschema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
    unique: true,
  },
  addeddate: {
    type: Date,
    default: Date.now(),
    required: true,
  },

  // status: {
  //   type: String,
  //   enum: ["pending", "complete"],
  //   default: "pending",
  // },
  userId: {
    type: String,
    required: true,
  },
});

export const Tasks =
  mongoose.models.tasks || mongoose.model("tasks", Taskschema);
