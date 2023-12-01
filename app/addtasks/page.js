"use client";
import Image from "next/image";
import React, { useState } from "react";
import imgpublic from "../../public/login.svg";

import { useDispatch } from "react-redux";
import { posttaskss } from "../Global/Features/TaskSlices/posttask";

const Addtasks = () => {
  const [tasks, settasks] = useState({
    title: "",
    content: "",
    userId :"65537b175b121aa3d4dfef80"
  
  });
  const dispatch = useDispatch();

  //   const handlechnage = (e) => {
  //     settasks({ ...tasks, title:e.target.value,content:e.target.value });
  //   };

  
  const handleadd = async () => {
    console.log(tasks);
    try {
      await dispatch(posttaskss({
        title : tasks.title,
        content :tasks.content,
        userId : tasks.userId
        
      }));
      // Any code that depends on the completion of the API call can go here
    } catch (error) {
      // Handle the error, e.g., show an error message to the user
      console.error("Error adding task:", error);
    }
  };
  

  return (
    <div>
      <div className="grid grid-cols-12 justify-center ">
        <div className="col-span-6 col-start-4 p-5">
          <div className="flex justify-center ">
            <Image
              src={imgpublic}
              alt=""
              style={{
                width: "200px",
              }}
            />
          </div>
          <h1 className="text-3xl text-center pt-3">Add task Here</h1>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="mt-4">
              <label className="block text-sm font-medium">Title</label>
              <input
                className=" bg-gray-300 rounded-full w-full  p-3 focus:ring-slate-400"
                type="text"
                name="title"
                value={tasks.title}
                placeholder="Title"
                onChange={(e) => settasks({ ...tasks, title: e.target.value })}
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Content</label>
              <textarea
                className=" bg-gray-300 rounded w-full  p-3 "
                name="content"
                value={tasks.content}
                onChange={(e) =>
                  settasks({ ...tasks, content: e.target.value })
                }
                rows={5}
              ></textarea>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium">Status</label>
              <select
                name="status"
                onChange={(e) => settasks({ ...tasks, status: e.target.value })}
                value={tasks.status}
                className=" bg-gray-300 rounded w-full  p-3"
              >
                <option value="none">--Selected ---</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
              </select>
            </div>
            <div className="flex justify-center">
              <button
                className="rounded bg-blue-700  text-white ms-4 p-3 mt-4"
                onClick={handleadd}
              >
                Add task
              </button>
              <button className="rounded bg-red-700 text-white ms-4 p-3 mt-4">
                Clear
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Addtasks;


function app(){
}
