async function authMiddleware(req, res, next) {
    // Check authentication token or regenerate with refresh token
  
    // Call next() to pass control to the next middleware or route handler
    next();
}

export default authMiddleware
