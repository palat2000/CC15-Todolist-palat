import { useState, useContext } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import TodoForm from "./TodoForm";
import styles from "./TodoItem.module.scss";
import { TodoContext } from "../../context/TodoContext";

function TodoItem({ task, status, due_date, id }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const { deleteTodo, editTodo } = useContext(TodoContext);

  const openForm = () => {
    setIsOpenForm(!isOpenForm);
  };

  const toggleStatus = () => {
    const newTaskObj = { status: !status };
    editTodo(id, newTaskObj);
  };

  return isOpenForm ? (
    <TodoForm
      textSubmit="Edit Task"
      openForm={openForm}
      oldTodo={{ task, status, due_date, id }}
    />
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
