import { connectdb } from "@/helper/db";
import { UserRegister } from "@/models/register";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export const GET = async () => {
  let newuserslogin = [];
  try {
    newuserslogin = await UserRegister.find();
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get users",
      success: false,
    });
  }
  return NextResponse.json(newuserslogin);
};

export const POST = async (request) => {
  try {
    
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    const existUser = await UserRegister.findOne({ email });
    if (existUser) {
      return NextResponse.json({
        message: "Already Exist",
        status: 201,
      });
    }
    const signUser = new UserRegister({
      name,
      email,
      password,
    });
    const salt = bcrypt.genSaltSync(10)
    signUser.password = bcrypt.hashSync(password, salt);
  
    const signUserSaved = await signUser.save();
    console.log(signUserSaved);
    return NextResponse.json({
      message: "User created",
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json({
      message: "User creation failed",
      status: false,
    });
  }
};
connectdb();
