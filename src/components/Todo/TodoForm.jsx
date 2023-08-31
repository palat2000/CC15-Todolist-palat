import { useState } from "react";
import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";

function TodoForm({ textSubmit, setIsOpen }) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState("");

  const handleChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim() === "") setIsError(true);
    else {
      setIsError(false);
      setIsOpen();
    }
    setTaskInput("");
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
            onClick={setIsOpen}
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
