// Dependencies
import "./App.scss";
import AppBar from "../components/Common/AppBar/AppBar";
import SideBar from "../components/SideBar/SideBar";
import TodoContent from "../components/Todo/TodoContent";
// import { Button } from "../components/Common/Button/Button";

function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <AppBar />
      </div>
      <div className="todo__sidebar">
        <SideBar />
      </div>
      <div className="todo__content">
        <main className="todo__container">
          <TodoContent />
        </main>
      </div>
    </div>
  );
}

export default App;
