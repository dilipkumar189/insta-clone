const mongoose = require("mongoose");

const connectDatabase = () => {
  const dbUrl =
    process.env.NODE_ENV === "production"
      ? process.env.DB_URL
      : "mongodb://127.0.0.1:27017/instagram";

  mongoose
    .connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("DB Connected");
    })
    .catch((error) => {
      console.error("DB Connection Error:", error);
    });
};

module.exports = connectDatabase;
