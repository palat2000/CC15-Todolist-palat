import TodoHeader from "./TodoHeader";
import TodoCreate from "./TodoCreate";
import TodoLists from "./TodoLists";

function TodoContent() {
  return (
    <main className="todo__container">
      <TodoHeader />
      <TodoCreate />
      <TodoLists />
    </main>
  );
}

export default TodoContent;
