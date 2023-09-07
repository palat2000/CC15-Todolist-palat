import TodoItem from "./TodoItem";
import styles from "./TodoLists.module.scss";

function TodoLists({ todoTask, deleteTodo, editTodo }) {
  return (
    <ul className={styles.todo__lists}>
      {todoTask.map((obj) => (
        <TodoItem
          task={obj.task}
          due_date={obj.due_date}
          status={obj.status}
          id={obj.id}
          key={obj.id}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
        />
      ))}
    </ul>
  );
}

export default TodoLists;
