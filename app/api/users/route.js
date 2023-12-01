import { NextResponse } from "next/server";
import { connectdb } from "@/helper/db";
import { Userss } from "@/models/user";


// Get api

export  const GET = async() => {
 let newusers = []
  try {
    newusers = await Userss.find()
  } catch (error) {
    console.log(error)
    return NextResponse.json({
        message:"Failed to get users",
        success : false
    })
  }
  return NextResponse.json(newusers);
};


//post api

export const POST = async (request) => {
  const { name, email, password, about, profileUrl } = await request.json();
  const userss = new Userss({
    name,
    email,
    password,
    about,
    profileUrl,
  });
  try {
    const createuser = await userss.save();
    const response = NextResponse.json({
      message: "User Created ",
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "user created failed",
      status: false,
    });
  }
};

connectdb();


