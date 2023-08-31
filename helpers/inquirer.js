import inquirer from "inquirer";
import colors from "colors";

const menuOpts = [
  {
    type: "list",
    name: "options",
    message: "Choose an Option",
    choices: [
      { value: 1, name: `${"1. ".bgCyan.red.bold} Create ToDo` },
      {
        value: 2,
        name: `${"2. ".bgCyan.red.bold} List ToDos`,
      },
      {
        value: 3,
        name: `${"3. ".bgCyan.red.bold} List Completed ToDos`,
      },
      {
        value: 4,
        name: `${"4. ".bgCyan.red.bold} List Pending ToDos`,
      },
      {
        value: 5,
        name: `${"5. ".bgCyan.red.bold} Complete ToDos`,
      },
      {
        value: 6,
        name: `${"6. ".bgCyan.red.bold} Delete ToDo`,
      },
      {
        value: 7,
        name: `${"7. ".bgCyan.red.bold} Logout`,
      },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log("===========================".green);
  console.log(" Choose an Option ".blue);
  console.log("===========================\n".green);

  const { options } = await inquirer.prompt(menuOpts);

  return { options };
};

const pause = async () => {
  const question = [
    {
      type: "input",
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

const deleteTask = async (tasksList = []) => {
  //{ value: 1, name: `${"1. ".bgCyan.red.bold} Create ToDo` }
  const choices = tasksList.map((task, i) => {
    const idx = `${i + 1}`.blue;
    return {
      value: task.id,
      name: `${idx} ${task.description}`,
    };
  });

  const questions = [
    {
      type: "list",
      name: "id",
      message: "Delete",
      choices: [{ value: 0, name: `${"0 ".red} Cancelar` }, ...choices],
    },
  ];
  const { id } = await inquirer.prompt(questions);
  return id;
};

const confirm = async (message) => {
  const question = [
    {
      type: "confirm",
      name: "ok",
      message,
    },
  ];
  const { ok } = await inquirer.prompt(question);
  return ok;
};
const listCompletedTasks = async (tasksList = []) => {
  //{ value: 1, name: `${"1. ".bgCyan.red.bold} Create ToDo` }
  const choices = tasksList.map((task, i) => {
    const idx = `${i + 1}`.blue;
    return {
      value: task.id,
      name: `${idx} ${task.description}`,
      checked: task.completedOn ? true : false,
    };
  });

  const question = [
    {
      type: "checkbox",
      name: "ids",
      message: "Select",
      choices,
    },
  ];
  const { ids } = await inquirer.prompt(question);
  return ids;
};
export {
  inquirerMenu,
  pause,
  readInput,
  deleteTask,
  confirm,
  listCompletedTasks,
};
