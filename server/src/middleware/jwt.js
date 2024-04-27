let jwt = require("jsonwebtoken");

let key = "lebatrinh2004";

const createToken = (payload) => {
  let token = null;
  try {
    token = jwt.sign(payload, key);
  } catch (error) {
    console.log(error);
  }
  return token;
};

const verifyToken = (token) => {
  let key = "lebatrinh2004";
  let data = null;
  try {
    data = jwt.verify(token, key);
  } catch (error) {
    console.log(data);
  }
  return data;
};

module.exports = {
  createToken,
  verifyToken,
};
