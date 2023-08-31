import { useState } from "react";

import TodoHeader from "./TodoHeader";
import TodoCreate from "./TodoCreate";
import TodoLists from "./TodoLists";

function TodoContent() {
  const [todoTask, setTodoTask] = useState([]);

  return (
    <main className="todo__container">
      <TodoHeader />
      <TodoCreate todoTask={todoTask} setTodoTask={setTodoTask} />
      <TodoLists todoTask={todoTask} setTodoTask={setTodoTask} />
    </main>
  );
}

export default TodoContent;
