import { Tasks } from "@/models/tasks";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const { userId } = params;
  console.log(params.userId)
  try {
    const taskget = await Tasks.find({
      userId: userId,
    });
    return NextResponse.json(taskget, {
      message: "Get task successfully ",
      success : true
    });
  } catch (error) {
    console.log(error)
    return NextResponse.json({
        message :'failesd',
        success : false
    })
  }
};
