import React from "react"
import "./About.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { about, technologies } from "../../data/about-me"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="about-container">
      <div className="left-container">
        <Img fluid={data.image.childImageSharp.fluid} className="image" />
      </div>
      <div className="right-container">
        <p> {about} </p>
        <div className="technologies">
          {technologies.map(tech => (
            <div className="label" key={tech.id}>
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
