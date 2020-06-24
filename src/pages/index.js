import React from "react"

import { Layout, SEO, Banner, Projects } from "../components"

const projects = [{ name: "" }, { name: "" }, { name: "" }, { name: "" }]

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Projects title="Featured Projects" projects={projects} />
  </Layout>
)

export default IndexPage
