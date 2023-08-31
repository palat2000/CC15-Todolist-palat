import { useState } from "react";

import { FaPlus } from "react-icons/fa";
import { HiPlus } from "react-icons/hi";

import TodoForm from "./TodoForm";
import styles from "./TodoCreate.module.scss";

/*
Condition Rendering
- Default : Show Button & Text
- Active : Show TodoForm
*/

function TodoCreate() {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const handleClick = (e) => {
    setIsOpenForm(!isOpenForm);
  };

  return (
    <>
      {isOpenForm ? (
        <TodoForm />
      ) : (
        <div onClick={handleClick} className={styles.todo__create}>
          <div className={styles.todo__create__button}>
            <HiPlus />
          </div>
          <h3 className={styles.todo__create__text}>Add Task</h3>
        </div>
      )}
    </>
  );
}

export default TodoCreate;
