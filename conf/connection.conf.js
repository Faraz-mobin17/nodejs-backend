const { default: mongoose } = require("mongoose");

/**
 * Connects to MongoDB using the provided URL.
 * @param {string} url - The MongoDB connection URL.
 */
async function connectDB(url) {
  try {
    // Establish a connection to MongoDB
    await mongoose.connect(url);

    // Log successful connection
    console.log("MongoDB connected");
  } catch (err) {
    // Log connection error
    console.error("MongoDB connection error", err);
  }
}

// Export the connectDB function for use in other modules
module.exports = { connectDB };
