import connectToDB from "@/database";
import Experience from "@/models/Experience";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic"

export async function PUT(req) {
    try {
        await connectToDB()
        const extractData = await req.json()
        const { position,
            company,
            duration,
            location,
            jobprofile, } = extractData;

        const updateData = await Experience.findOneAndUpdate({
            _id: _id

        }, {
            aboutme,
            noofprojects,
            yearofexperience,
            noofclients,
            skills,position,
            company,
            duration,
            location,
            jobprofile,
        }, { new: true });

        if(updateData){
            return NextResponse.json({
                success:true,
                message : 'updated successfully'
            })
        }else{
            return NextResponse.json({
                success:false,
                message : 'Something went wrong !'
            }) 
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success:false,
            message : 'Something went wrong ! pls try again later'
        }) 
    }
}
