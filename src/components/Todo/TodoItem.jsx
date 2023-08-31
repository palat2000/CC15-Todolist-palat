import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import TodoForm from "./TodoForm";
import styles from "./TodoItem.module.scss";

function TodoItem({ task, status, due_date, id, todoTask, setTodoTask }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const newDate = new Date(due_date);
  
  const openForm = () => {
    setIsOpenForm(!isOpenForm);
    setEditTaskId(id);
  };

  return isOpenForm ? (
    <TodoForm
      textSubmit="Edit Task"
      openForm={openForm}
      editTaskId={editTaskId}
      setEditTaskId={setEditTaskId}
      todoTask={todoTask}
      setTodoTask={setTodoTask}
    />
  ) : (
    <li className={styles.todo}>
      <div
        className={status ? styles.todo__checkbox__done : styles.todo__checkbox}
      >
        <HiOutlineCheck className={styles.todo__checkbox__icon} />
      </div>
      <p className={status ? styles.todo__task__done : styles.todo__task}>
        {task}
      </p>
      <span className={styles.todo__date}>
        {newDate.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </span>
      <div className={styles.todo__action}>
        <span onClick={openForm}>
          <FaPen className={styles.todo__edit} />
        </span>
        <span>
          <FaTrashAlt className={styles.todo__delete} />
        </span>
      </div>
    </li>
  );
}

export default TodoItem;
