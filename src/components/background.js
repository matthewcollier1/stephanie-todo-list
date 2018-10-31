import React from 'react'
import Img from 'gatsby-image'
import { graphql, StaticQuery } from 'gatsby'

export default () => (
  <StaticQuery
    query={graphql`
      query {
        imageOne: file(relativePath: { eq: "background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (

       
      <div>
        <Img
          fluid={data.imageOne.childImageSharp.fluid}
          className="background"
        />
        `$
        {console.log(data)}`
      </div>
    )}
  />
)
