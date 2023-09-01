import { useState } from "react";

import { HiPlus } from "react-icons/hi";

import TodoForm from "./TodoForm";
import styles from "./TodoCreate.module.scss";

/*
Condition Rendering
- Default : Show Button & Text
- Active : Show TodoForm
*/

function TodoCreate({ setTodoTask, addTodo }) {
  const [isOpenForm, setIsOpenForm] = useState(false);

  const openForm = () => {
    setIsOpenForm(!isOpenForm);
  };
  return (
    <>
      {isOpenForm ? (
        <TodoForm
          textSubmit="Add Task"
          openForm={openForm}
          setTodoTask={setTodoTask}
          addTodo={addTodo}
        />
      ) : (
        <div onClick={openForm} className={styles.todo__create}>
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
