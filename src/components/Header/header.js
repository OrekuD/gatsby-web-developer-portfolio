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
      <Link>Home</Link>
      <Link>About</Link>
      <Link>Project</Link>
      <Link>Contact</Link>
    </div>
  </header>
)

Header.propTypes = {}

Header.defaultProps = {}

export default Header
