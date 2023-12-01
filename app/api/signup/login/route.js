
import { UserRegister } from "@/models/register";
import { NextResponse } from "next/server";
import { connectdb } from "@/helper/db";
import bcrpyt from "bcryptjs";
import jwt from "jsonwebtoken";
export const POST = async (request) => {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    const logined = await UserRegister.findOne({
      email,
    });
    if (!logined) {
      return NextResponse.json({
        message: "User Not Found",
        status: 404,  
      });
    }
    console.log(logined.password);
   // console.log("password",password);
    const matched = bcrpyt.compareSync(password, logined.password);
    console.log("match",matched);
  //  if(!matched){
  //   console.log("Not macthed");
  //   return NextResponse.json({
  //       message:"Invalid Password"
  //   })
  //  }

    const dataToken = {
        _id:logined._id,
        name:logined.name,
        email:logined.email,
        password:logined.password
    }

    const token = await jwt.sign(dataToken,"xyzabctoken",{expiresIn:"1d"})
    const response = NextResponse.json({
      message: "Login successfully",
      status: 201,
      data:{
        name:logined.name,
        _id:logined._id,
        token:token,
        email:logined.email
      }
    });
    response.cookies.set("token",token, {
      httpOnly: true,
      expiresIn : "1d"
    });
    return response;
  } catch (error) {
    return NextResponse.json({
      message: "login failed",
    });
  }
};

connectdb();
