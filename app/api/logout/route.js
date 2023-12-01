import { NextResponse } from "next/server"

export const POST =(request)=>{

    const response = NextResponse.json({
        message :"Logged OUt",
        success : true
    })

    response.cookies.set("token","",{
        expiresIn: new Date(0)
    })

    return response
}