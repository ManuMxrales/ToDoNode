import colors from "colors";
import {
  inquirerMenu,
  pause,
  readInput,
  deleteTask,
  confirm,
} from "./helpers/inquirer.js";
import Tasks from "./models/tasks.js";
import { saveDB, readDB } from "./helpers/saveFile.js";

const main = async () => {
  let opt;
  const tasks = new Tasks();
  const tasksDB = readDB();
  //LoadTask
  if (tasksDB) {
    tasks.loadTasksFromArray(tasksDB);
  }

  do {
    opt = await inquirerMenu();

    switch (opt.options) {
      case 1:
        const description = await readInput("Description: ");
        tasks.createTask(description);
        break;
      case 2:
        tasks.completeList();
        break;
      case 3:
        tasks.listCompletedTasks();
        break;
      case 4:
        tasks.listCompletedTasks(false);
        break;
      case 6:
        const id = await deleteTask(tasks.arrayList);
        if (id) {
          const ok = await confirm("Are U Sure?");
          if (ok) {
            tasks.deleteTask(id);
            console.log("Task Deleted");
          }
        }
        break;
      default:
        break;
    }
    saveDB(tasks.arrayList);

    await pause();
  } while (opt.options !== 7);
};

main();
