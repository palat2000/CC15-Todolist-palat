import { useState } from "react";
import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";

function TodoForm({ textSubmit, openForm, todoTask, setTodoTask, isEdit }) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  const date = new Date();
  const [objTask, setObjTask] = useState({
    ID: 1,
    task: "",
    status: false,
    due_date: "AUG 31",
  });

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
      if (taskInput.trim() === "") setIsError(true);
      else {
        setIsError(false);
        objTask.ID = todoTask.length + 1;
        objTask.task = taskInput;
        objTask.due_date = date;
        setTodoTask([...todoTask, objTask]);
        openForm();
      }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      {/*	Body */}
      <input
        value={taskInput}
        onChange={handleChange}
        className={styles.todo__form__input}
        placeholder="Task Name"
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError && <p className={styles.todo__error}>Title is required</p>}
        <div className={styles.todo__form__buttons}>
          <Button
            type="button"
            onClick={openForm}
            text="Cancel"
            active={false}
          />
          <Button type="submit" text={textSubmit} />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
