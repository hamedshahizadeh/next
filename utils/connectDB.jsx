import mongoose from "mongoose";
 async function connectDB() {
  try {
    if (mongoose.connections[0].readyState) return;
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to DB");
  } catch (error) {
    console.log("Connection filed");
  }
}
export default connectDB