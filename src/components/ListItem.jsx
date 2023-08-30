import "./ListItem.scss";

function ListItem({ text, icon }) {
  return (
    <li className="list__item">
      {icon}
      <p className="list__item__text">{text}</p>
    </li>
  );
}

export default ListItem;
