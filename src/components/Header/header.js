import { Link } from "gatsby"
import React from "react"
import { MdMenu } from "react-icons/md"
import "./Header.scss"

const Header = ({ toggleSidebar }) => (
  <header>
    <h3>
      Nelson<span>.</span>
    </h3>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
    <div className="menu-icon" onClick={toggleSidebar}>
      <MdMenu fontSize="30" />
    </div>
  </header>
)

export default Header
