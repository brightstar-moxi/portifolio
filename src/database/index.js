import mongoose from "mongoose";
const configOptions = { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // connectTimeoutMS: 10000, // Increase the timeout as needed
    // socketTimeoutMS: 10000,  // Increase the timeout as needed
  //("mongodb+srv://moxiz:123456782023@cluster0.vwvvdox.mongodb.net/");
  };
export default async function connectToDB(){
    const connectionUrl = 'mongodb+srv://moxiz:123456782023@cluster0.vwvvdox.mongodb.net/';
    try {
        await mongoose.connect(connectionUrl, configOptions);
        console.log("Dataase connected successfully")
    } catch (error) {
        console.log(error);
    }


}