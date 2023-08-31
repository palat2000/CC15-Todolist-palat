import { useState } from "react";

import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

function TodoLists({ todoTask, setTodoTask }) {
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
  const [allTodo, setAllTodo] = useState([...data]);
  return (
    <ul className={styles.todo__lists}>
      {todoTask.map((obj) => (
        <TodoItem
          task={obj.task}
          due_date={obj.due_date}
          status={obj.status}
          id={obj.id}
          key={obj.id}
        />
      ))}
    </ul>
  );
}

export default TodoLists;
