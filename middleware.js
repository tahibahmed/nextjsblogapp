
import { NextResponse } from "next/server";

export  function middleware(request) {
  console.log("middleware executing");
  const token = request.cookies.get("token")?.value || ''

  console.log(token)
  if(request.nextUrl.pathname ==='/api/signup'||request.nextUrl.pathname ==='/api/signup/login' ){
    return;
  }

  const Loggeninsignupaccess = request.nextUrl.pathname === "/login" || request.nextUrl.pathname ==="/register";


  if(Loggeninsignupaccess){
    if(token){
         return NextResponse.redirect(new URL('/dashboard', request.url))
       
    }
  }else{
    if(!token){
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  
}

export const config = {
  matcher: ["/","/login","/dashboard","/about","/addtasks","/register","/profile","/api/:path*"],
 
};
