import connectToDB from "@/database";

import Education from "@/models/Education";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic"

export async function PUT(req) {
    try {
        await connectToDB()
        const extractData = await req.json()
        const { degree,
            year,
            college, _id} = extractData;

        const updateData = await Education.findOneAndUpdate({
            _id: _id

        }, {
            degree,
            year,
            college,
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
