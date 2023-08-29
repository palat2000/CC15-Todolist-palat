import "./App.scss";
import { FaHome } from "react-icons/fa";
import { FaSistrix } from "react-icons/fa";
function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <header className="header">
          <div className="header__logo">
            <FaHome />
          </div>
          <div className="header__text">
            <h1>Todoist</h1>
          </div>
          <div className="header__search">
            <input type="text" placeholder="search" />
          </div>
        </header>
      </div>
      <div className="todo__sidebar">SideBar</div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
