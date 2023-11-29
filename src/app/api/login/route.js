import connectToDB from "@/database";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req){
    try {
        await connectToDB();
        const {username, password}= await req.json();
        const checkUser = await User.findOne({username})

        if(!checkUser){
            return NextResponse.json({
                success : false,
                message : 'User name is not present ! Please try again'
            })
        }

const hashPassword = await hash(checkUser.password, 12);
const checkPassword = await compare(password, hashPassword)

if(!checkPassword){
    return NextResponse.json({
        success: false,
        message :"wrong passsword"
    })
}

        const saveData = await Home.create(extractData)

        if(saveData){
            return NextResponse.json({
                success : true,
                message : 'Data saved successfully'
            })
        }else{
            return NextResponse.json({
                success: false,
                message :"Data error"
            })
        }
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message :"Something went wrong ! Please try again"
        })
    }
}
