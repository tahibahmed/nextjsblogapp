"use client";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginApi } from "../Global/Features/Loginslice/loginslice";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Login = () => {
  const [login, setlogin] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const router = useRouter();
  const handlesubmit = () => {
    try {
      if (login.email.trim() === "" || login.email == "") {
        toast.warning("Incorrect Information", {
          position: "top-center",
        });
      }else{
        toast.success("Your Are LoggedIn")
      }

      console.log(login);
      dispatch(loginApi(login));
      router.push("/");
      setlogin({
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
              <h1 className="text-3xl text-center">Login Here </h1>
              <div className="sm:col-span-4 ">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email"
                    value={login.email}
                    onChange={(e) =>
                      setlogin({ ...login, email: e.target.value })
                    }
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 ps-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-4 ">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="mt-2">
                  <input
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={(e) =>
                      setlogin({ ...login, password: e.target.value })
                    }
                    id="password"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 py-1.5 ps-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <button
                onClick={handlesubmit}
                className="rounded-md bg-indigo-600 px-3 py-2 mt-10 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login Here
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
