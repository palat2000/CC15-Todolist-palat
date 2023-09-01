import { useState } from "react";
import { nanoid } from "nanoid";
import dayjs from "dayjs";

import TodoHeader from "./TodoHeader";
import TodoCreate from "./TodoCreate";
import TodoLists from "./TodoLists";

function TodoContent() {
  const data = [
    {
      id: 1,
      task: "Suspendisse potenti.",
      status: false,
      due_date: "2023-04-26",
    },
    {
      id: 2,
      task: "In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
      status: false,
      due_date: "2023-05-08",
    },
    {
      id: 3,
      task: "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
      status: false,
      due_date: "2023-04-30",
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

  return (
    <main className="todo__container">
      <TodoHeader />
      <TodoCreate setTodoTask={setTodoTask} addTodo={addTodo} />
      <TodoLists todoTask={todoTask} />
    </main>
  );
}

export default TodoContent;
