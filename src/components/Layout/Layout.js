import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

import { Header, Footer, Sidebar } from "../index"
import "./Layout.scss"
import gsap from "gsap"
import { navigate } from "gatsby"

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)

  const openMenu = () => {
    setIsOpen(true)
    const tl = gsap.timeline()
    tl.to("#app-container", {
      duration: 0.6,
      scale: 0.95,
    })
      .to("#sidebar-container", {
        delay: -0.4,
        duration: 0.6,
        translateX: 0,
      })
      .to("body", {
        duration: 0,
        css: {
          overflow: "hidden",
        },
      })
  }

  const closeMenu = () => {
    setIsOpen(false)
    const tl = gsap.timeline()
    tl.to("#sidebar-container", {
      duration: 0.6,
      translateX: "-100%",
    })
      .to("#app-container", {
        delay: -0.5,
        duration: 0.6,
        scale: 1,
      })
      .to("body", {
        duration: 0,
        css: {
          overflow: "scroll",
        },
      })
  }

  const navigateTo = location => {
    closeMenu()
    setTimeout(() => {
      navigate(location)
    }, 700)
  }

  return (
    <>
      <Sidebar toggleSidebar={closeMenu} navigateTo={navigateTo} />
      <div className="layout-container" id="app-container">
        <Header toggleSidebar={openMenu} />
        {children}
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
