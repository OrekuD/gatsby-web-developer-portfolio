import React from "react"
import "./Project.scss"

const Project = ({ project, index }) => {
  return (
    <div className={`project-container ${index % 2 === 1 ? "right" : ""}`}>
      <div
        className={`project-content ${index % 2 === 1 ? "right-content" : ""}`}
      ></div>
    </div>
  )
}

export default Project
