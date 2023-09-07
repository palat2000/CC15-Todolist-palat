import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";
import useTodo from "../../hooks/useTodo";

function TodoLists() {
  const { todoTask } = useTodo();
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
