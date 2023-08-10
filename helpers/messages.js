require("colors");

const showMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("====================".green);
    console.log(" Seleccione una opción ".blue);
    console.log("====================\n".green);

    console.log(`${"1.".blue} Create ToDo`);
    console.log(`${"2.".blue} List ToDos`);
    console.log(`${"3.".blue} List Completed ToDos`);
    console.log(`${"4.".blue} List Pending ToDos`);
    console.log(`${"5.".blue} Complete ToDos`);
    console.log(`${"6.".blue} Delete ToDo`);
    console.log(`${"0.".blue} Logout\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question("Choose an Option: ", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};
const pause = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    readLine.question(`\nPress ${"Enter".green} to continue: `, (opt) => {
      readLine.close();
      resolve();
    });
  });
};

module.exports = {
  showMenu,
  pause,
};
