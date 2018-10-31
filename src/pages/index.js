import React from 'react'

import Layout from '../components/layout'

import './index.css'
import TodoList from '../components/TodoList'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div class="bird-container bird-container--one">
            <div class="bird bird--one" />
          </div>

          <div class="bird-container bird-container--two">
            <div class="bird bird--two" />
          </div>

          <div class="bird-container bird-container--three">
            <div class="bird bird--three" />
          </div>

          <div class="bird-container bird-container--four">
            <div class="bird bird--four" />
          </div>
          <TodoList />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
