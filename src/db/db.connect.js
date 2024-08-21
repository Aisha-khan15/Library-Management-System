import mongoose from "mongoose";

const connectDB = async () => {
  try {
    let url = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/library";

    if (!url) {
      console.log(
        `Invalid/empty database url found. Kindly update the url in .env`
      );
      process.exit(1);
    }

    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Server is connected to the database!`);
  } catch (error) {
    console.log(`Error connecting to the database: ${error}`);
    process.exit(1);
  }
};

export { connectDB };
