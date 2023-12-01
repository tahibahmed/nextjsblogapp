"use client"
import "./globals.css";
import Link from "next/link";

import { useDispatch, useSelector } from "react-redux";
import { LogoutApi } from "./Global/Features/LogoutSlice/Logout";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = () => {
  const { data, isLoggedIn } = useSelector((value) => value.loginSlicedata);
  console.log(data && data.name);
  console.log(isLoggedIn);
  const router = useRouter();
  const dispatch = useDispatch();
  const logoutfunc = async() => {
    try {
      await dispatch(LogoutApi());
      router.push("login");
      toast.success('Loggout Successfully',{
        position : "top-center"
      })
    } catch (error) {
      console.log(error)
      toast.error("Error" ,{
        position :'top-center'
      })
    }
  
  };

  return (
    <nav className="bg-blue-400 h-22 flex justify-between w-full  py-2 px-3 items-center">
      <div className="brands font-serif font-bold">
        <h1 className="text-2xl">
          <a href="#!">Works Manager </a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5 font-serif font-bold">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/dashboard">
            <li>dashboard</li>
          </Link>
          <Link href="/about">
            <li>about</li>
          </Link>

          <Link href="/profile">
            <li>profile</li>
          </Link>
          <Link href="/addtasks">
            <li>Add-tasks</li>
          </Link>
        </ul>
      </div>
      <div>
        <ul className="flex  space-x-5 font-serif font-bold">
          <Link href="/login">
            <li>{data ? data && data.name : "Login"}</li>
          </Link>
          <Link href="/register" >
            <li>{data ? data && data.email : " register "}</li>
          </Link>
      
          <button onClick={logoutfunc}>
            {isLoggedIn ? "Logout" : " "}
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
