import connectToDB from "@/database";

import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req){
    try {
        await connectToDB();
        const extractData = await req.json()
    } catch (error) {
        console.log(error);

        return NextResponse.json({
            success: false,
            message :"Something went wrong ! Please try again"
        })
    }
}