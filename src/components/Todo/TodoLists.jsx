import { useContext } from "react";

import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";
import { TodoContext } from "../../context/TodoContext";

function TodoLists() {
  const { todoTask } = useContext(TodoContext);
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
