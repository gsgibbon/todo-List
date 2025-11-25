import useLocalStorage from "use-local-storage";
import { TASKS_KEY, TaskState, type Task } from "../models/task";
import { v4 as uuidv4 } from "uuid";

export default function useTask() {
  const [tasks, setTasks] = useLocalStorage<Task[]>(TASKS_KEY, []);

  function prepareTask() {
    setTasks([...tasks, { 
      id: uuidv4(), 
      title: "", 
      state: TaskState.Creating 
    }])
  }

  function updateTask(id: string, payload: {title: Task["title"]}) {
    setTasks(
      tasks.map((task) => task.id === id ? {
        ...task, state: TaskState.Created, ...payload
      } : task)
    );
  }

  function updateTaskStatus(id: string, concluded: boolean) {
    setTasks(
      tasks.map((task) => task.id === id ? {...task, concluded} : task)
    );
  }

  function deleteTask(id: string) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return {
    prepareTask,
    updateTask,
    updateTaskStatus,
    deleteTask
  }
} 