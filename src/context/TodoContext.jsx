import { createContext, useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

axios.defaults.baseURL = "http://localhost:8080/api";
const END_POINT = "http://localhost:8080/api/todos";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoTask, setTodoTask] = useState([]);
  const [showTodos, setShowTodos] = useState([]);
  async function fetchAllTodos() {
    try {
      const res = await axios.get("/todos");
      const data = await res.data;
      const newTodoTaskList = data.todos.map((task) => {
        const newTask = { ...task, due_date: task.date };
        delete newTask.date;
        return newTask;
      });
      setTodoTask(newTodoTaskList);
      setShowTodos(newTodoTaskList);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const searchTodos = (keyword) => {
    console.log("search");
    if (keyword.trim() === "") {
      setShowTodos(todoTask);
    } else {
      const newShowTodos = todoTask.filter((task) =>
        task.task.toLowerCase().includes(keyword.toLowerCase())
      );
      setShowTodos(newShowTodos);
    }
  };

  const addTodo = async (task) => {
    const newTodo = {
      id: nanoid(),
      task: task,
      status: false,
      due_date: dayjs().format("MMM-DD"),
    };
    try {
      //   const options = {
      //     method: "POST",
      //     headers: { "content-type": "application/json" },
      //     body: JSON.stringify(newTodo),
      //   };
      //   let res = await fetch(END_POINT, options);
      //   let data = await res.json();
      const { data } = await axios.post("/todos", newTodo);
      const newData = { ...data.todo, due_date: data.todo.date };
      setTodoTask((pev) => [newData, ...pev]);
      setShowTodos((pev) => [newData, ...pev]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      let res = await axios.delete(`/todos/${id}`);
      setTodoTask((prev) => prev.filter((task) => task.id !== id));
      setShowTodos((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = async (id, newTaskObj) => {
    try {
      let index = todoTask.findIndex((task) => task.id === id);
      if (index !== -1) {
        const updatedTodo = { ...todoTask[index], ...newTaskObj };
        updatedTodo.date = todoTask[index].due_date;
        const { data } = await axios.put(`/todos/${id}`, updatedTodo);
        const newTodoTask = [...todoTask];
        newTodoTask[index] = data.todo;
        setTodoTask(newTodoTask);
        setShowTodos(newTodoTask);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const shareObj = {
    todoTask,
    showTodos,
    addTodo,
    deleteTodo,
    editTodo,
    searchTodos,
  };
  return (
    <TodoContext.Provider value={shareObj}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
