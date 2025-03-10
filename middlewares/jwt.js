const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports.authCheck = (req, res, next) => {
  const { authorization } = req.headers;

  console.log(req.headers);

  if (!authorization) {
    return res.status(401).json({
      status: 401,
      message: "Access Denied: No token provided",
    });
  }

  // Extract the token from the 'Authorization' header
  const token = authorization.split(" ")[1];  // "Bearer <token>"

  if (!token) {
    return res.status(401).json({
      status: 401,
      message: "Access Denied: Token missing",
    });
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // Attach decoded token to req.user
    next();  // Proceed to next middleware/route
    
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      status: 401,
      message: "Authentication failed! Invalid or expired token.",
    });
  }
};
