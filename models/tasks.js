import { v4 as uuidv4 } from "uuid";
import Task from "./task.js";

class Tasks {
  _list = {};

  constructor(description) {
    this._list = {};
  }

  createTask(description = "") {
    const task = new Task(description);

    this._list[task.id] = task;
  }
}
export default Tasks;