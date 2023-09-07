import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

import TodoHeader from "./TodoHeader";
import TodoCreate from "./TodoCreate";
import TodoLists from "./TodoLists";

const END_POINT = "http://localhost:8080/api/todos";

function TodoContent() {
  const [todoTask, setTodoTask] = useState([]);

  useEffect(() => {
    async function fetchAllTodos() {
      try {
        const res = await fetch("http://localhost:8080/api/todos", {
          method: "GET",
        });
        const data = await res.json();
        setTodoTask([...data.todos]);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllTodos();
  }, []);

  const addTodo = async (task) => {
    const newTodo = {
      id: nanoid(),
      task: task,
      status: false,
      date: dayjs().format("MMM-DD"),
    };
    try {
      const options = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(newTodo),
      };
      let res = await fetch(END_POINT, options);
      let data = await res.json();
      setTodoTask((pev) => [data.todo, ...pev]);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteTodo = async (id) => {
    // const rmTodo = [...todoTask];
    // rmTodo.splice(
    //   rmTodo.findIndex((task) => task.id === id),
    //   1
    // );
    // setTodoTask(rmTodo);

    // setTodoTask(todoTask.filter((task) => task.id !== id));

    try {
      const options = { method: "DELETE" };
      let res = await fetch(`${END_POINT}/${id}`, options);
      setTodoTask((prev) => prev.filter((task) => task.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  const editTodo = (id, newTaskObj) => {
    // let foundedTodo = todoTask.find((task) => task.id === id);
    // if (!foundedTodo) return;
    // const newTodoList = [...todoTask];
    // let foundedIndex = newTodoList.findIndex((task) => task.id === id);
    // newTodoList.splice(foundedIndex, 1, newTaskObj);
    // setTodoTask(newTodoList);

    // const newTodoList = todoTask.map((task) => {
    //   if (task.id !== id) {
    //     return task;
    //   } else {
    //     return { ...task, ...newTaskObj };
    //   }
    // });
    // setTodoTask(newTodoList);

    const newTodoList = todoTask.reduce((acc, task) => {
      if (task.id !== id) acc.push(task);
      else acc.push({ ...task, ...newTaskObj });
      return acc;
    }, []);
    setTodoTask(newTodoList);
  };

  return (
    <main className="todo__container">
      <TodoHeader />
      <TodoCreate setTodoTask={setTodoTask} addTodo={addTodo} />
      <TodoLists
        todoTask={todoTask}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
      />
    </main>
  );
}

export default TodoContent;
