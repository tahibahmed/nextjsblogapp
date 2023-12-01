"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerPost } from "../Global/Features/Register/registerslice";
import { toast } from "react-toastify";
import { RegisterUser } from "../Global/Features/Registerusers/Registerusers";


const Register = () => {
  const [signup, setsignup] = useState({
    name: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handlesubmit = () => {


    try {
      if (signup.name.trim() === "" || signup.name === "") {
        toast.warning("Incorrect Information", {
          position: "top-center",
        });
      }
      console.log(signup);
      dispatch(registerPost(signup));
  
      setsignup({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      toast.error(error, "Error", {
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="space-y-12 w-full ">
          <div className="border-b border-gray-900/10 pb-12 border grid grid-cols-12 justify-cente">
            <div className="mt-10   col-span-6 col-start-4 p-5">
              <div className="sm:col-span-4 ">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="name"
                    value={signup.name}
                    onChange={(e) =>
                      setsignup({ ...signup, name: e.target.value })
                    }
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 ps-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    value={signup.email}
                    onChange={(e) =>
                      setsignup({ ...signup, email: e.target.value })
                    }
                    type="email"
                    autoComplete="email"
                    className="block w-full ps-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    value={signup.password}
                    onChange={(e) =>
                      setsignup({ ...signup, password: e.target.value })
                    }
                    type="password"
                    autoComplete="password"
                    className="block w-full rounded-md border-0 py-1.5 ps-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <button
                onClick={handlesubmit}
                className="rounded-md bg-indigo-600 px-3 py-2 mt-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
