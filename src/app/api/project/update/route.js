import connectToDB from "@/database";
import Project from "@/models/Project";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic"

export async function PUT(req) {
    try {
        await connectToDB()
        const extractData = await req.json()
        const { _id, name,
            technologies,
            website,
            github, } = extractData;

        const updateData = await Project.findOneAndUpdate({
            _id: _id

        }, {
            name,
            technologies,
            website,
            github,
        }, { new: true });

        if (updateData) {
            return NextResponse.json({
                success: true,
                message: 'updated successfully'
            })
        } else {
            return NextResponse.json({
                success: false,
                message: 'Something went wrong !'
            })
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({
            success: false,
            message: 'Something went wrong ! pls try again later'
        })
    }
}
