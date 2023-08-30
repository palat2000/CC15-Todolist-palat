import "./List.scss";
import ListItem from "./ListItem";

function List({ data }) {
  return (
    <ul className="list">
      {data.map((obj) => (
        <ListItem key={obj.id} {...obj} />
      ))}
    </ul>
  );
}

export default List;
