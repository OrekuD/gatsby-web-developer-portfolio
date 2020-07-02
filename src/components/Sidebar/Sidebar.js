import React, { useState } from "react"
import { MdClose } from "react-icons/md"
import "./Sidebar.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Sidebar = ({ toggleSidebar, navigateTo }) => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "desk.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="sidebar-container" id="sidebar-container">
      <div>
        <div className="close-menu-icon">
          <span onClick={toggleSidebar}>
            <MdClose fontSize="30" />
          </span>
        </div>
        <div className="content">
          <p onClick={() => navigateTo("/")}>Home</p>
          <p onClick={() => navigateTo("/about")}>About</p>
          <p onClick={() => navigateTo("/projects")}>Projects</p>
          <p onClick={() => navigateTo("/contact")}>Contact</p>
        </div>
      </div>
      <Img fluid={data.image.childImageSharp.fluid} className="sidebar-image" />
    </div>
  )
}

export default Sidebar
