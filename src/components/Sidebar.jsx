import {
  FaInbox,
  FaCalendar,
  FaCalendarAlt,
  FaChevronDown,
} from "react-icons/fa";
import { useState } from "react";
import "./Sidebar.scss";
import Item from "./SidebarItem";
function Sidebar() {
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__item">
        <Item icon={<FaInbox />} text="Inbox" />
        <Item icon={<FaCalendar />} text="Today" />
        <Item icon={<FaCalendarAlt />} text="Next 7 Days" />
      </div>
      <div className="project">
        <div
          onClick={handleClick}
          className={`project__text ${isShow && "show"}`}
        >
          <div className="project__text-icon">
            <FaChevronDown />
          </div>
          <div className="project__text-text">Projects</div>
        </div>
        {isShow && (
          <>
            <Item icon={<FaInbox />} text="Work" />
            <Item icon={<FaInbox />} text="Home" />
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
