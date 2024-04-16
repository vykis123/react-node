const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJWT = (request, response, next) => {
  const authHeader =
    request.headers.authorization || request.headers.Authorization;
  if (!authHeader?.startsWith("Bearer ")) return response.sendStatus(401);
  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) return response.sendStatus(403); //Invalid token
    request.username = decoded.UserInfo.username;
    next();
  });
};

module.exports = verifyJWT;
