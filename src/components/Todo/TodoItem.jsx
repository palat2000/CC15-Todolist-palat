import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import TodoForm from "./TodoForm";
import styles from "./TodoItem.module.scss";

function TodoItem({ task, status, due_date, id, deleteTodo, editTodo }) {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const openForm = () => {
    setIsOpenForm(!isOpenForm);
  };

  const toggleStatus = () => {
    const newTodoObj = { id, task, due_date, status: !status };
    editTodo(id, newTodoObj);
  };

  return isOpenForm ? (
    <TodoForm textSubmit="Edit Task" openForm={openForm} />
  ) : (
    <li className={styles.todo}>
      <div
        className={`${styles.todo__checkbox} ${
          status ? styles.todo__checkbox__done : ""
        }`}
      >
        <HiOutlineCheck
          onClick={toggleStatus}
          className={styles.todo__checkbox__icon}
        />
      </div>
      <p
        className={`${styles.todo__task} ${
          status ? styles.todo__task__done : ""
        }`}
      >
        {task}
      </p>
      <span className={styles.todo__date}>{due_date}</span>
      <div className={styles.todo__action}>
        <span onClick={openForm}>
          <FaPen className={styles.todo__edit} />
        </span>
        <span onClick={() => deleteTodo(id)}>
          <FaTrashAlt className={styles.todo__delete} />
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
