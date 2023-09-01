import { useState } from "react";
import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";

function TodoForm({ textSubmit, openForm, addTodo }) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") {
      setIsError(true);
      return;
    } else {
      setIsError(false);
      addTodo(taskInput);
      openForm();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.todo__form__container}>
      <input
        value={taskInput}
        onChange={handleChange}
        className={styles.todo__form__input}
        placeholder="Task Name"
        autoFocus
      />
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
