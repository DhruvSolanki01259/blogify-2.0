import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;

export const connectToDatabase = async () => {
  try {
    const connectionState = mongoose.connection.readyState;
    if (connectionState === 1) {
      console.log("Already connected to MongoDB Database.");
      return;
    }
    if (connectionState === 2) {
      console.log("Connecting to MongoDB Database...");
      return;
    }

    await mongoose.connect(MONGO_URI, {
      dbName: "blogify-version-2",
      bufferCommands: true,
    });
    console.log("Connected to MongoDB Database Successfully!!!");
    return;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown Error Occured.";
    console.error(errorMessage);
    return;
  }
};
