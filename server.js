require("dotenv").config({ path: "./config.env" });
const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const postRoute = require("./routes/postRoute");

connectDB();

const app = express();
app.use(express.json());

app.use("/api/v1/post", postRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`.cyan.bold));

// Handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
  console.log(`Error: ${err.message.red}`);
  // Close server & exit
  server.close(() => process.exit(1));
});
