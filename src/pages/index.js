import React from "react"

import { Layout, SEO, Banner, Projects } from "../components"
import { projects } from "../data/projects"

const IndexPage = () => {
  const featured = projects.filter(project => project.featured)
  return (
    <Layout>
      <SEO title="Home" />
      <Banner />
      <Projects title="Featured Projects" projects={featured} />
    </Layout>
  )
}

export default IndexPage
