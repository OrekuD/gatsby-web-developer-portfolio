import React from "react"

import { Layout, SEO, Projects } from "../components"
import { projects } from "../data/projects"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Projects title="Projects" projects={projects} />
  </Layout>
)

export default ProjectsPage
