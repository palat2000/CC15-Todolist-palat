import { useState } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

import TodoHeader from "./TodoHeader";
import TodoCreate from "./TodoCreate";
import TodoLists from "./TodoLists";

function TodoContent() {
  const data = [
    {
      id: nanoid(),
      task: "Suspendisse potenti.",
      status: false,
      due_date: dayjs("2023-04-26").format("MMM-DD"),
    },
    {
      id: nanoid(),
      task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      status: false,
      due_date: dayjs("2023-05-08").format("MMM-DD"),
    },
    {
      id: nanoid(),
      task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      status: false,
      due_date: dayjs("2023-04-30").format("MMM-DD"),
    },
  ];
  const [todoTask, setTodoTask] = useState(data);

  const addTodo = (task) => {
    const newTodo = {
      id: nanoid(),
      task: task,
      status: false,
      due_date: dayjs().format("MMM-DD"),
    };
    setTodoTask((pev) => [newTodo, ...pev]);
  };

  const deleteTodo = (id) => {
    // const rmTodo = [...todoTask];
    // rmTodo.splice(
    //   rmTodo.findIndex((task) => task.id === id),
    //   1
    // );
    // setTodoTask(rmTodo);

    // setTodoTask(todoTask.filter((task) => task.id !== id));

    setTodoTask((prev) => prev.filter((task) => task.id !== id));
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
