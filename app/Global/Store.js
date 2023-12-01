import { configureStore,getDefaultMiddleware  } from "@reduxjs/toolkit";
import getslice from "./Features/PostSlices/postslice";
import posttaskSlice from "./Features/TaskSlices/posttask";
import registerSlice from "./Features/Register/registerslice";
import loginslice from "./Features/Loginslice/loginslice";
import RegisteruserSlice from "./Features/Registerusers/Registerusers";
import Currentuserslice from "./Features/CurrentuserSlice/CureentuserSlice";
import LogoutSlice from "./Features/LogoutSlice/Logout";
import uploadfileslice from "./Features/FileUploadSlice/Fileupload";

const customizedMiddleware = getDefaultMiddleware({
  serializableCheck: false,
});
export const Store = configureStore({
  reducer: {
    getSlice: getslice,
    posttaskslice: posttaskSlice,
    register: registerSlice,
    loginSlicedata: loginslice,
    RegisteruserSlice: RegisteruserSlice,
    Currentuserslice: Currentuserslice,
    logOutslice: LogoutSlice,
    uploadfileslice: uploadfileslice,
  },
  middleware: customizedMiddleware,
});
