import "./Lists.scss";
import ListItem from "./ListItem";
import { FaChevronDown } from "react-icons/fa";

// function Lists({ data }) {
//   return (
//     <ul className="list">
//       {data.map((obj) => (
//         <ListItem key={obj.id} {...obj} />
//       ))}
//     </ul>
//   );
// }

// function Lists({ children }) {
//   return <ul className="list">{children}</ul>;
// }

function Lists({ isAccordion, children }) {
  // console.log(props);
  if (isAccordion) {
    return (
      <div className="accordion">
        {/* Toggle */}
        <div className="accordion__toggle">
          <li className="accordion__item">
            <FaChevronDown className="accordion__item__icon accordion__item__active" />
            <p className="accordion__item__text">Projects</p>
          </li>
        </div>
        {children}
      </div>
    );
  } else {
    return <ul className="list">{children}</ul>;
  }
}

export default Lists;
