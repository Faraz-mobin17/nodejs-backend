const fs = require("fs");

/**
 * Middleware to log request and response information to a file.
 * @param {string} filename - The name of the log file.
 * @returns {function} - Express middleware function.
 */
function logRequestResponse(filename) {
  return (req, res, next) => {
    // Format log entry with timestamp, IP, request method, and path
    const logEntry = `\n${Date.now()}: ${req.ip} ${req.method}: ${req.path}\n`;

    // Append log entry to the specified file
    fs.appendFile(filename, logEntry, (err) => {
      if (err) {
        console.error(`Error writing to ${filename}: ${err.message}`);
      }

      // Continue with the next middleware or route handler
      next();
    });
  };
}

// Export the logRequestResponse middleware for use in other modules
module.exports = { logRequestResponse };
