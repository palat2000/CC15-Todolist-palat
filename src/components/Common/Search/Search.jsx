import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.scss";
import useTodo from "../../../hooks/useTodo";

function Search() {
  const [search, setSearch] = useState("");
  const { searchTodos } = useTodo();
  useEffect(() => {
    let timeoutId = setTimeout(() => {
      if (search.trim() !== "") searchTodos(search);
    }, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [search]);
  const handleChangeInput = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className={styles.search}>
      <span className={styles.search__icon}>
        <FaSearch />
      </span>
      <input
        onChange={handleChangeInput}
        value={search}
        type="text"
        placeholder="search"
        className={styles.search__input}
      />
    </div>
  );
}

export default Search;
