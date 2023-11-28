import connectToDB from "@/database";

import Home from "@/models/Home";
import { NextResponse } from "next/server";



export const dynamic = "force-dynamic"

export async function PUT(req) {
    try {
        await connectToDB()
        const extractData = await req.json()
        const { heading,
            summary, } = extractData;

        const updateData = await Home.findOneAndUpdate({
            _id: _id

        }, {
            heading,
            summary,
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
