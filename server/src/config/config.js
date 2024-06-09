const ENV = require("./environment");
console.log("🚀 ~ ENV:", ENV);

module.exports = {
  development: {
    username: ENV.DATABASE.DEV.USERNAME,
    password: ENV.DATABASE.DEV.PASSWORD,
    database: ENV.DATABASE.DEV.NAME_DB,
    host: ENV.DATABASE.DEV.HOST_DB,
    dialect: "mysql",
    logging: false,
    collate: "utf8mb4_unicode_ci",
  },
  test: {
    username: ENV.DATABASE.TEST.USERNAME,
    password: ENV.DATABASE.TEST.PASSWORD,
    database: ENV.DATABASE.TEST.NAME_DB,
    host: ENV.DATABASE.TEST.HOST_DB,
    dialect: "mysql",
    logging: false,
    collate: "utf8mb4_unicode_ci",
  },
  production: {
    username: ENV.DATABASE.PRODUCTION.USERNAME,
    password: ENV.DATABASE.PRODUCTION.PASSWORD,
    database: ENV.DATABASE.PRODUCTION.NAME_DB,
    host: ENV.DATABASE.PRODUCTION.HOST_DB,
    dialect: "mysql",
  },
};
