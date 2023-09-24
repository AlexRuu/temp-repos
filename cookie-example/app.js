require("dotenv").config();
require("express-async-errors");

// Express
const express = require("express");
const app = express();

// Packages
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Database
const connectDB = require("./db/connect");

// Routers
const authRouter = require("./routes/auth");

// Middleware
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const { signedCookie } = require("cookie-parser");

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.JWT_SECRET));

app.use(express.static("./public"));

// Routes
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Running...");
});

app.get("/api/v1", (req, res) => {
  // console.log(req.cookies);
  console.log(req.signedCookies);
  res.send("Running...");
});

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Port
const port = process.env.PORT || 4000;

// Start Server
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`Server is running on ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
