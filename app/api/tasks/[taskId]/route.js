import { Tasks } from "@/models/tasks";
import { Userss } from "@/models/user";
import { NextResponse } from "next/server";
//single tasks get
export const GET = async ({ params }) => {
  const { taskId } = params;
  console.log(taskId)
  try {
    const taskss = await Tasks.findById(taskId);
    return NextResponse.json(taskss);
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
  const { title, content, status } = await request.json();
  try {
    const task = await Tasks.findById(userId);

    task.title = title;
    task.content = content;
    task.status = status;

    const updatetask = await task.save();

    return NextResponse.json(updatetask, {
      message: "your User is updated",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "your task is not updated Failed",
      success: false,
    });
  }
};

export const DELETE = async (request, { params }) => {
  const { taskId } = params;
  console.log("checking idddd11",taskId)
  try {
    await Userss.deleteOne({
      _id: taskId,
    });
    console.log("checking idddd22",taskId)
    return NextResponse.json({
      message: "Deleted Successfully",
      status: true,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "error in Deleting task",
      status: false,
    });
  }
};
