import { createContext, useEffect } from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

const TodoContext = createContext();

function TodoContextProvider(props) {
  const [todoTask, setTodoTask] = useState([]);
  const END_POINT = "http://localhost:8080/api/todos";

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

  useEffect(() => {
    fetchAllTodos();
  }, []);

  const addTodo = async (task) => {
    const newTodo = {
      id: nanoid(),
      task: task,
      status: false,
      due_date: dayjs().format("MMM-DD"),
    };
    try {
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newTodo),
      };
      let res = await fetch(END_POINT, options);
      let data = await res.json();
      const newData = { ...data.todo, due_date: data.todo.date };
      setTodoTask((pev) => [newData, ...pev]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const options = { method: "DELETE" };
      let res = await fetch(`${END_POINT}/${id}`, options);
      setTodoTask((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = async (id, newTaskObj) => {
    console.log(newTaskObj);
    try {
      let index = todoTask.findIndex((task) => task.id === id);
      if (index !== -1) {
        const updatedTodo = { ...todoTask[index], ...newTaskObj };
        updatedTodo.date = todoTask[index].due_date;
        console.log(todoTask[index]);
        const options = {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(updatedTodo),
        };
        let res = await fetch(`${END_POINT}/${id}`, options);
        let data = await res.json();
        // console.log(data.todo);
        const newTodoTask = [...todoTask];
        newTodoTask[index] = data.todo;
        setTodoTask(newTodoTask);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const shareObj = { todoTask, addTodo, deleteTodo, editTodo };
  return (
    <TodoContext.Provider value={shareObj}>
      {props.children}
    </TodoContext.Provider>
  );
}

export default TodoContextProvider;
export { TodoContext };
