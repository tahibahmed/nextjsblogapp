import { UserRegister } from "@/models/register";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export const GET = async(request) => {
  const Token = await request.cookies.get("token")?.value;
  const verifytoken = jwt.verify(Token, "xyzabctoken");
  // console.log(verifytoken);
  // const currentuserdata = await UserRegister.findById(verifytoken.id).select('-password');
  const currentuserdata = await UserRegister.findById(verifytoken._id).select('-password');
  console.log(currentuserdata)

  return NextResponse.json({currentuserdata});
};
