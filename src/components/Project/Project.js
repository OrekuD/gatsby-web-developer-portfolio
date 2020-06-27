import React from "react"
import { MdScreenShare } from "react-icons/md"
import { FaGithubSquare } from "react-icons/fa"

import "./Project.scss"

const Project = ({ project, index }) => {
  const { name, url, github, image, description, stack } = project
  return (
    <div className={`project-container ${index % 2 === 1 ? "right" : ""}`}>
      <img
        src={image}
        alt="thumbnail"
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
          {url && (
            <a href={url} rel="noreferrer" target="_blank">
              <MdScreenShare fontSize="30" />
            </a>
          )}
          {github && (
            <a href={github} rel="noreferrer" target="_blank">
              <FaGithubSquare fontSize="23" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
