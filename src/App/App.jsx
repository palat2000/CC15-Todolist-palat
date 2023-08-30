import "./App.scss";
import Header from "../components/Header";
import ListItem from "../components/ListItem";
import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <aside className="sidebar">
          <section className="sidebar__category">
            <ul className="list">
              <ListItem text="Inbox" icon={<FaInbox />} />
              <ListItem text="Today" icon={<FaCalendar />} />
              <ListItem text="Next 7 days" icon={<FaCalendarAlt />} />
            </ul>
          </section>
          <section className="sidebar__category">2</section>
        </aside>
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
