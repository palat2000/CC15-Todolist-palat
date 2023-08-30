import "./App.scss";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import Lists from "../components/Lists";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
function App() {
  const generalList = [
    { id: 1, text: "inbox", icon: <FaInbox />, active: true },
    { id: 2, text: "Today", icon: <FaCalendar />, active: false },
    { id: 3, text: "Next 7 days", icon: <FaCalendarAlt />, active: false },
  ];
  const projectList = [
    { id: 4, text: "Project-A", icon: <FaInbox />, active: true },
    { id: 5, text: "Project-B", icon: <FaInbox />, active: false },
  ];
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <Lists isAccordion={true}>
              <ListItem text="hello" icon={<FaCalendar />} active={true} />
            </Lists>
          </section>
          <section className="sidebar__category">
            <div className="accordion">
              {/* Toggle */}
              <div className="accordion__toggle">
                <li className="accordion__item">
                  <FaChevronDown className="accordion__item__icon accordion__item__active" />
                  <p className="accordion__item__text">Projects</p>
                </li>
              </div>
              {/* <Lists data={projectList} /> */}
            </div>
          </section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
