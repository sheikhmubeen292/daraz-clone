import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://admin:12345@cluster0.acdvnpw.mongodb.net/daraz-clone?retryWrites=true&w=majority"
    );
    console.log(`MongoDb connected: ${conn.connection.host}`);
    return conn;
  } catch (e) {
    console.error(e);
  }
};

connectDB();
export { connectDB };
