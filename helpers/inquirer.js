import inquirer from "inquirer";
import colors from "colors";

const menuOpts = [
  {
    type: "list",
    name: "options",
    message: "Choose an Option",
    choices: [
      { value: 1, name: "1. Create ToDo" },
      {
        value: 2,
        name: "2. List ToDos",
      },
      {
        value: 3,
        name: "3. List Completed ToDos",
      },
      {
        value: 4,
        name: "4. List Pending ToDos",
      },
      {
        value: 5,
        name: "5. Complete ToDos",
      },
      {
        value: 6,
        name: "6. Delete ToDo",
      },
      {
        value: 7,
        name: "7. Logout",
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log(" Choose an Option ".white);
  console.log("===========================\n".green);

  const { options } = await inquirer.prompt(menuOpts);

  return { options };
};

const pause = async () => {
  const question = [
    {
      type: "confirm",
      name: "enter",
      message: `Press ${"enter".green} to continue`,
    },
  ];
  console.log("\n");
  await inquirer.prompt(question);
};

const readInput = async (message) => {
  const question = [
    {
      type: "input",
      name: "description",
      message,
      validate(value) {
        if (value.length === 0) {
          return "Please enter a message";
        }
        return true;
      },
    },
  ];
  const { description } = await inquirer.prompt(question);
  return description;
};

export { inquirerMenu, pause, readInput };
