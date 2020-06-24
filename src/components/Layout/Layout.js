import React from "react"
import PropTypes from "prop-types"

import Header from "../Header/header"
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header />
      <h1> kasj </h1>
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
