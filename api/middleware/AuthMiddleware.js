import jwt from "jsonwebtoken";

const AuthMiddleware = (req, res, next) => {
  console.log('Cookies:', req.cookies);
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json("Not logged in");
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).json("Invalid token");
    }

    req.user = decoded;
    next();
  });
};

export default AuthMiddleware;
