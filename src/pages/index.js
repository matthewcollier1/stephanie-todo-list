import React from 'react'
import Img from 'gatsby-image'

import Layout from '../components/layout'

import './index.css'
import TodoList from '../components/TodoList'

export default ({ data }) => (
  <Layout>
    <div className="container">
      <div className="bird-container bird-container--one">
        <div className="bird bird--one" />
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two" />
      </div>

      <div className="bird-container bird-container--three">
        <div className="bird bird--three" />
      </div>

      <div className="bird-container bird-container--four">
        <div className="bird bird--four" />
      </div>
      <TodoList />
    </div>

    <Img fluid={data.imageOne.childImageSharp.fluid} className="background" />
  </Layout>
)

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
