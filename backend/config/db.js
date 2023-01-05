import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected`.cyan.underline);
  } catch (error) {
    console.log(`Error:${error.message}`.red.underline);
    process.exit(1);
  }
};

export default connectDB;
