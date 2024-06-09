const { Sequelize } = require("sequelize");
const env = process.env.NODE_ENV || "development";
const config = require("./config.js")[env];
const readline = require("readline");
const handleGenerateDB = require("../Utils/generate.db.js");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
    logging: false,
  }
);

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log(
      "Connection database (mysql) has been established successfully."
    );
  } catch (error) {
    console.log("🚀 ~ connectDB ~ error:", error.message);
    console.log("Do you want generate database by sequelize ? ");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Please enter y or n: ", function (answer) {
      if (answer.toLowerCase() === "y") {
        handleGenerateDB();
      } else {
        console.log("Database creation skipped.");
      }
      rl.close();
    });
  }
};

module.exports = connectDB;
