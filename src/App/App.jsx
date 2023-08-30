import "./App.scss";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
function App() {
  return (
    <div className="todo">
      <div className="todo__header">
        <Header />
      </div>
      <div className="todo__sidebar">
        <Sidebar />
      </div>
      <div className="todo__content">TodoContent</div>
    </div>
  );
}

export default App;
