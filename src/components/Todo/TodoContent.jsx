import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

import TodoHeader from "./TodoHeader";
import TodoCreate from "./TodoCreate";
import TodoLists from "./TodoLists";
import useTodo from "../../hooks/useTodo";

const END_POINT = "http://localhost:8080/api/todos";

function TodoContent() {
  // const [todoTask, setTodoTask] = useState([]);
  const { fetchAllTodos, todoTask, setTodoTask } = useTodo();

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

  const editTodo = async (id, newTaskObj) => {
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

    // const newTodoList = todoTask.reduce((acc, task) => {
    //   if (task.id !== id) acc.push(task);
    //   else acc.push({ ...task, ...newTaskObj });
    //   return acc;
    // }, []);
    // setTodoTask(newTodoList);

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
