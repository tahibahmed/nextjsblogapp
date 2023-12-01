import mongoose, { Schema } from "mongoose";

const userschema = new Schema({
  name:{
    type:String,
    required:[true,"Enter the Name"],
    unique:true
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email are required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  about: String,
  profileUrl: String,
});

export const Userss =
  mongoose.models.users || mongoose.model("users", userschema);
