import mongoose from "mongoose";
// const configOptions = { 
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // connectTimeoutMS: 10000, // Increase the timeout as needed
    // socketTimeoutMS: 10000,  // Increase the timeout as needed
  //("mongodb+srv://moxiz:123456782023@cluster0.vwvvdox.mongodb.net/");
//   };
export default async function connectToDB(){
    const connectionUrl = 'mongodb+srv://moxiz:123456782023@cluster0.vwvvdox.mongodb.net/portfolio?retryWrites=true&w=majority';
    try {
        await mongoose.connect(connectionUrl);
        console.log("Database connected successfully")
    } catch (error) {
        console.log("error message",error);
    }


}