import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import "./Banner.scss"

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "nomad.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className="banner-container">
      <div className="banner-content">
        <h3> I'm David </h3>
        <h4> a software developer </h4>
        <Link to="/contact" className="button">
          <p> Contact me </p>
        </Link>
      </div>
      <div className="image-container">
        <Img
          fluid={data.image.childImageSharp.fluid}
          className="banner-image"
        />
      </div>
    </section>
  )
}

export default Banner
