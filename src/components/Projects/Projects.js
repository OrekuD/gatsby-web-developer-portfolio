import React from "react"
import { Title, Project } from "../index"
import "./Projects.scss"

const Projects = ({ title, projects }) => {
  //   if (!data) {
  //     return <h1> No data </h1>
  //   }

  return (
    <div className="projects-container">
      <Title name={title} />
      <div>
        {projects.map((project, index) => (
          <Project key={index} project={project} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
