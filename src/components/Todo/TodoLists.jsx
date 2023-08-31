import { useState } from "react";
import { FaTrashAlt, FaPen } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import TodoForm from "./TodoForm";
import styles from "./TodoLists.module.scss";

function TodoLists({ text }) {
  const [isOpenForm, setIsOpenForm] = useState(false);
  const clickEdit = (e) => {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <>
      {isOpenForm ? (
        <TodoForm textSubmit="Edit Task" setIsOpen={clickEdit} />
      ) : (
        <ul className={styles.todo__lists}>
          <li className={styles.todo}>
            <div className={styles.todo__checkbox}>
              <HiOutlineCheck className={styles.todo__checkbox__icon} />
            </div>
            <p className={styles.todo__task}>Todo-1</p>
            <span className={styles.todo__date}>30 Aug</span>
            <div className={styles.todo__action}>
              <span onClick={clickEdit}>
                <FaPen className={styles.todo__edit} />
              </span>
              <span>
                <FaTrashAlt className={styles.todo__delete} />
              </span>
            </div>
          </li>
        </ul>
      )}
    </>
  );
}

export default TodoLists;
