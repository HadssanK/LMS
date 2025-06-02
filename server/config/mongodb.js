import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load variables from .env

const ConnectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    mongoose.connection.on('connected', () => {
      console.log("✅ MongoDB Connected Successfully");
    });

    mongoose.connection.on('error', (err) => {
      console.log("❌ MongoDB Connection Error:", err);
    });

  } catch (error) {
    console.error("❌ Failed to connect MongoDB:", error.message);
    process.exit(1);
  }
};

export default ConnectDb;
