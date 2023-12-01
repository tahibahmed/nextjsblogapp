import { NextResponse } from "next/server";
import { connectdb } from "@/helper/db";
import { Tasks } from "@/models/tasks";


// Get api

export const GET = async (request) => {
  try {
    const task = await Tasks.find();
    return NextResponse.json(task);
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Failed to get newtask",
      success: false,
    });
  }
};

//post api

export const POST = async (request) => {
  const { title, content,  userId } = await request.json();
  const taskkks = new Tasks({
    title,
    content,
    // status,
    userId,
  });
  try {
    const createtask = await taskkks.save();
    const response = NextResponse.json(createtask, {
      message: "Task Created ",
      status: 201,
    });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "Task created failed",
      status: false,
    });
  }
};
connectdb();