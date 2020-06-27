import React from "react"
import { MdClose } from "react-icons/md"
import "./Sidebar.scss"

const Sidebar = ({ toggleSidebar, navigateTo }) => {
  return (
    <div className="sidebar-container" id="sidebar-container">
      <div className="close-menu-icon" onClick={toggleSidebar}>
        <MdClose fontSize="30" />
      </div>
      <div className="content">
        <p onClick={() => navigateTo("/")}>Home</p>
        <p onClick={() => navigateTo("/about")}>About</p>
        <p onClick={() => navigateTo("/projects")}>Projects</p>
        <p onClick={() => navigateTo("/contact")}>Contact</p>
      </div>
    </div>
  )
}

export default Sidebar
