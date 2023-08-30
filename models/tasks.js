import colors from "colors";
import { v4 as uuidv4 } from "uuid";
import Task from "./task.js";
class Tasks {
  _list = {};

  get arrayList() {
    const list = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      list.push(task);
    });
    return list;
  }

  constructor(description) {
    this._list = {};
  }

  deleteTask( id = ''){
    if (this._list[id]) {
      delete this._list[id];
    }
  }

  loadTasksFromArray(tasks = []) {
    tasks.forEach((task) => {
      this._list[task.id] = task;
    });
  }

  createTask(description = "") {
    const task = new Task(description);

    this._list[task.id] = task;
  }

  completeList() {
    this.arrayList.forEach((task, index) => {
      const idx = `${index + 1}`.yellow;
      const { description, completedOn } = task;
      const state = completedOn ? "Completed".green : "Pending".red;
      console.log(`\n${idx} ${description} :: ${state}`);
    });
  }

  listCompletedTasks(completed = true) {
    console.log();
    let counter = 0;
    this.arrayList.forEach((task) => {
      const { description, completedOn } = task;
      const state = completedOn ? "Completed".green : "Pending".red;
      if (completed) {
        if (completedOn) {
          counter += 1;
          console.log(`${counter.toString().green} ${description} :: ${state}`);
        }
      } else {
        if (!completedOn) {
          counter += 1;
          console.log(`${counter.toString().yellow} ${description} :: ${state}`);
        }
      }
      
    });
  }
}
export default Tasks;
