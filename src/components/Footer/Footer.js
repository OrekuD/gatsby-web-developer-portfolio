import React from "react"
import "./Footer.scss"

const Footer = () => (
  <footer>
    <p>
      &copy; {new Date().getFullYear()} <span> CodeDevs </span> All rights
      reserved
    </p>
  </footer>
)

export default Footer
