import React from "react"

import { Layout, SEO, Projects } from "../components"
import { projects } from "../data/projects"

const ProjectsPage = () => (
  <Layout title="Projects">
    <SEO title="Projects" />
    <Projects projects={projects} />
  </Layout>
)

export default ProjectsPage
