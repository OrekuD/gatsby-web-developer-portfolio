import React from "react"
import PropTypes from "prop-types"

import { Header, Footer } from "../index"
import "./Layout.scss"

const Layout = ({ children }) => {
  return (
    <div>
      <div className="layout-container">
        <Header />
        {children}
      </div>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
