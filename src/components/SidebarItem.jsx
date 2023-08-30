import "./SidebarItem.scss"
function SidebarItem({icon,text}) {
    return (
        <div className="item">
                <div className="item__icon">{icon}</div>
                <div className="item__text">{text}</div>
            </div>
    )
}

export default SidebarItem;