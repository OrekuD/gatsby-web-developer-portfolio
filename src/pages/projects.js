import React from "react"

import { Layout, SEO, Projects } from "../components"

const projects = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }]

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" />
    <Projects title="Projects" projects={projects} />
  </Layout>
)

export default ProjectsPage
