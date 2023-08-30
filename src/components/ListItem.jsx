import "./ListItem.scss";

function ListItem({ text, icon, active }) {
  return (
    <li className={`list__item ${active && "active"}`}>
      {icon}
      <p className="list__item__text">{text}</p>
    </li>
  );
}

export default ListItem;
