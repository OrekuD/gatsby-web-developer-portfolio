import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./Header.scss"

const Header = () => (
  <header>
    <h3>
      Portfolio<span>.</span>
    </h3>
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
