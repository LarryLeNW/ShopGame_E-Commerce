require("dotenv").config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  DATABASE: {
    DEV: {
      USERNAME: process.env.USERNAME_DB,
      PASSWORD: process.env.PASSWORD_DB,
      NAME_DB: process.env.NAME_DB,
      HOST_DB: process.env.HOST_DB,
    },
    PRODUCTION: {
      USERNAME: "",
      PASSWORD: "",
      NAME_DB: "",
      HOST_DB: "",
    },
    TEST: {
      USERNAME: "",
      PASSWORD: "",
      NAME_DB: "",
      HOST_DB: "",
    },
  },
};
