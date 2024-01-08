// Import required modules
const express = require("express");
const { connectDB } = require("./conf/connection.conf");
const { json, urlencoded } = require("express");

// Import middleware
const { logRequestResponse } = require("./middlewares/index.middleware");

// Import routes
const userRouter = require("./routes/user.route");

// Create Express application
const app = express();

// Set the port for the application
const PORT = process.env.PORT || 3000;

// Connect to MongoDB database
connectDB("mongodb://127.0.0.1:27017/youtube-app-1");

// Middleware to parse JSON data in the request body
app.use(json());

// Middleware to parse URL-encoded data in the request body
app.use(urlencoded({ extended: true }));

// Custom middleware for logging request and response information to a file
app.use(logRequestResponse("log.txt"));

// Route handling for user-related endpoints
app.use("/api/users", userRouter);

// Start the Express application and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
