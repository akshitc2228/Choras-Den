import jwt from "jsonwebtoken";

const AuthMiddleware = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json("Not logged in");
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json("Invalid token");
    }

    req.user = decoded; // Attach the decoded user information to the request object
    next(); // Proceed to the next middleware or route handler
  });
};

export default AuthMiddleware;
