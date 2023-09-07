import { useState } from "react";

function useTodo() {
  const [todoTask, setTodoTask] = useState([]);
  async function fetchAllTodos() {
    try {
      const res = await fetch("http://localhost:8080/api/todos", {
        method: "GET",
      });
      const data = await res.json();
      const newTodoTaskList = data.todos.map((task) => {
        const newTask = { ...task, due_date: task.date };
        delete newTask.date;
        return newTask;
      });
      setTodoTask([...newTodoTaskList]);
    } catch (err) {
      console.log(err);
    }
  }
  return { todoTask, fetchAllTodos, setTodoTask };
}

export default useTodo;
