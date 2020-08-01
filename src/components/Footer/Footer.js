import React from "react"
import "./Footer.scss"

const Footer = () => (
  <footer>
    <p>
      &copy; {new Date().getFullYear()} <span> Jesse Nelson </span> All rights
      reserved
    </p>
  </footer>
)

export default Footer
