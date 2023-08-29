import Search from "./Search"
import { FaHome } from "react-icons/fa";
import "./Header.scss"

function Header() {
    return (
        <header className="header">
          <div className="header__logo">
            <FaHome />
          </div>
          <div className="header__text">
            <h1>Todoist</h1>
          </div>
          <div className="header__search">
            <Search />
          </div>
        </header>
    )
}

export default Header;