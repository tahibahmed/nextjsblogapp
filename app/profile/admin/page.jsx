"use client";
import { Currentuserapi } from "@/app/Global/Features/CurrentuserSlice/CureentuserSlice";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
} from "@/app/firebase";

const adminpage = () => {
  const dispatch = useDispatch();
  const [file, setfile] = useState();
  const [imgaeUrl, setimageUrl] = useState([]);
  const [imgUrl, setImgUrl] = React.useState("");
  console.log(file);
  const { userData } = useSelector((state) => state.Currentuserslice);
  useEffect(() => {
    dispatch(Currentuserapi());
  }, []);

  // console.log(userData);

  const handlesubmit = (e) => {
    try {
      const storageRef = ref(storage, `images/${file.name}`);

      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImgUrl(downloadURL);
          });
        }
      );
    } catch (error) {
      console.log(error);
    }
    // const data = new FormData();
    // data.set("file", file);
    // console.log(file);
    // dispatch(Uploadfileapi(data));
    setfile();
  };
  console.log(imgUrl);
  useEffect(() => {
    const imageListRef = ref(storage, `/images`);
    listAll(imageListRef).then((res) =>
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setimageUrl((pre) => [...pre, url]);
        });
      })
    );
  }, []);

  return (
    <div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="file"
          onChange={(e) => {
            setfile(e.target.files[0]);
          }}
        />
        <button onClick={handlesubmit}>upload file</button>
      </form>
      <div>
        {imgaeUrl ? (
          imgaeUrl.map((items) => (
            <img src={items} alt="" style={{ width: "200px" }} />
          ))
        ) : (
          <h1>Data not found</h1>
        )}
      </div>
    </div>
  );
};

export default adminpage;
