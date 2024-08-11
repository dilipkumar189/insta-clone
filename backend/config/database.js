const mongoose = require("mongoose");

const connectDatabase = () => {
  const dbURI =
    process.env.NODE_ENV === "production"
      ? process.env.MONGO_URI
      : "mongodb://127.0.0.1:27017/instagram";

  mongoose
    .connect(dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log(
        "Mongoose Connected to",
        process.env.NODE_ENV === "production"
          ? "production database"
          : "local database"
      );
    })
    .catch((error) => {
      console.log("Database connection error:", error);
    });
};

module.exports = connectDatabase;
