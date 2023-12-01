"use client";
import React, { useEffect } from "react";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getdata } from "../Global/Features/PostSlices/postslice";
const dashboardpage = () => {
  const { data } = useSelector((state) => state.getSlice);
  // const {data} = useSelector(value=>value.loginSlicedata)
  console.log("Dataaaaaa",data)
  const dispatch = useDispatch();
  // console.log(data);
  useEffect(() => {
    dispatch(getdata());
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-4">
          {data.map((item,v) => (
            <div key={v}>
              <h1 className="text-yellow-700 text-2xl"> Name : {item.name}</h1>
              <h2> Email : {item.email}</h2>
              <h4> Password : {item.password}</h4>
              <h4> About :{item.about}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default dashboardpage;
