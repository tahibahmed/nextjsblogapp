import { Userss } from "@/models/user";
import { NextResponse } from "next/server";

export const GET = async ({ params }) => {
  const { userId } = params;
  try {
    const user = await Userss.findById(userId);
    return NextResponse.json(user);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "user is not find ",
      success: false,
    });
  }
};
export const PUT = async (request, { params }) => {
  const { userId } = params;
  const { name, password, about, profileUrl } = await request.json();
  try {
    const user = await Userss.findById(userId);
    user.name = name;
    user.password = password;
    user.about = about;
    user.profileUrl = profileUrl;
    const updateuser = await user.save();

    return NextResponse.json(updateuser,{
      message : "your User is updated",
      success : true
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message:"your user is not updated Failed",
      success :false
    })
  }
};

export const DELETE = async (request, { params }) => {
  const { userId } = params;
  try {
    await Userss.deleteOne({
      _id: userId,
    });
    return NextResponse.json({
      message: "Deleted Successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "error in Deleting user",
      status: false,
    });
  }
};
