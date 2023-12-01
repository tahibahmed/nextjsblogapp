"use client"
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RegisterUser } from '../Global/Features/Registerusers/Registerusers'

const profilepage = () => {
const dispatch = useDispatch()
  const {userData} = useSelector((state=> state.RegisteruserSlice))
  console.log(userData);

  useEffect(()=>{
    dispatch(RegisterUser())
  },[])
  return (
    <div>
       {
        userData && userData.map((item, v)=>( 
        <div key={v}>
          <li>{item.id}</li>
          <li>{item.name}</li>
          <li>{item.email}</li>
        </div>))
       }
    </div>
  )
}

export default profilepage