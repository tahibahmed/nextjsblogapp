"use client"
import { Provider } from "react-redux";
import { Store } from "./Store";

import React from 'react'
import Navbar from "../Navbar";

export function Providers({ children }) {
  return (
    <>
      <Provider store={Store}>
      <Navbar/>
        {children}
      
      </Provider>
    </>
  
  )
}


