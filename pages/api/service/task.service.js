import axios from "axios";

class TaskService {
  constructor() {
    this.api = axios.create({
      baseURL: `http://localhost:8000/api`,
    });
  }

  getPages = () => {
    return this.api.get("/tasks");
  };

  getTaskBySubpageId = (subpageId) => {
    return this.api.get(`/tasks/subpages?id=${subpageId}`);
  };

  TaskById = (taskId) => {
    return this.api.get(`/tasks/task?id=${taskId}`);
  };

  newPage = (task) => {
    return this.api.post("/tasks", task);
  };
}

const taskService = new TaskService();

export default taskService;
