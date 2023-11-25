import mongoose from "mongoose";

export default async function connectToDB(){
    try {
        await mongoose.connect("mongodb+srv://moxiz:123456782023@cluster0.vwvvdox.mongodb.net/");
        console.log("Dataase connected successfully")
    } catch (error) {
        console.log(error);
    }
}//C:\Program Files\nodejs\