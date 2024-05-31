const jwt = require("jsonwebtoken");
const config = require("../../config");

exports.createJWT = (email, userID) => {
  try {
    const jwtKey = config.jwtKey;
    const token = jwt.sign({ email, userID }, jwtKey, { expiresIn: "24h" });
    return token;
  } catch (e) {
    return null;
  }
};

exports.decodeToken = (token) => {
  try {
    const key = config.jwtKey;
    const decodedData = jwt.decode(token, key);
    return decodedData;
  } catch (e) {
    return null;
  }
};
