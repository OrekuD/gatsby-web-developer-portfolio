import React from "react"
import { Link } from "gatsby"
import { MdScreenShare } from "react-icons/md"
import { FaGithubSquare } from "react-icons/fa"

import "./Project.scss"

const Project = ({ project, index }) => {
  const { name, url, github, image, description, stack } = project
  return (
    <div className={`project-container ${index % 2 === 1 ? "right" : ""}`}>
      <img
        src={image}
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 5,
        }}
      />
      <div className="overlay" />
      <div
        className={`project-content ${index % 2 === 1 ? "right-content" : ""}`}
      >
        <h2> {name} </h2>
        <p className="description"> {description} </p>
        <div>
          {stack.map(item => (
            <span key={item.id} className="label">
              <p> {item.name} </p>
            </span>
          ))}
        </div>
        <div>
          <a href={url} target="_blank">
            <MdScreenShare fontSize="26" />
          </a>
          <a href={github} target="_blank">
            <FaGithubSquare fontSize="21" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Project
