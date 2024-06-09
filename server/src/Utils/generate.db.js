const { exec } = require("child_process");
const util = require("util");

const execPromise = util.promisify(exec);

// Mã màu ANSI
const colors = {
  reset: "\x1b[0m",
  fgRed: "\x1b[31m",
  fgGreen: "\x1b[32m",
  fgCyan: "\x1b[36m",
};

module.exports = handleGenerateDB = async () => {
  try {
    console.log(
      `${colors.fgCyan}Running database creation command...${colors.reset}`
    );
    await execPromise("cd src && npx sequelize db:create");
    console.log(
      `${colors.fgGreen}stdout: create database successfully${colors.reset}`
    );

    console.log(`${colors.fgCyan}Running migration command...${colors.reset}`);
    await execPromise("cd src && npx sequelize db:migrate");
    console.log(
      `${colors.fgGreen}stdout: create table successfully${colors.reset}`
    );

    console.log(`${colors.fgCyan}Running seed command...${colors.reset}`);
    await execPromise("cd src && npx sequelize db:seed:all");
    console.log(
      `${colors.fgGreen}stdout: create data successfully${colors.reset}`
    );
  } catch (error) {
    console.error(`${colors.fgRed}Error: ${error.message}${colors.reset}`);
  }
};
