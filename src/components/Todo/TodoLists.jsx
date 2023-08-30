import styles from "./TodoLists.module.scss";
import { FaRegCircle, FaTrashAlt, FaPen } from "react-icons/fa";

function TodoLists() {
  return (
    <ul className={styles.todo_lists}>
      <li className={styles.todo}>
        <span className={styles.todo__checkbox}>{/* <FaRegCircle /> */}</span>
        <p className={styles.todo__task}>Todo Item 1</p>
        <span className={styles.todo__date}>30 AUG</span>
        <div className={styles.todo__action}>
          <span className={styles.todo__edit}>
            <FaPen />
          </span>
          <span className={styles.todo__delete}>
            <FaTrashAlt />
          </span>
        </div>
      </li>
    </ul>
  );
}

export default TodoLists;
