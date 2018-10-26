import React from 'react'

import Layout from '../components/layout'

import './index.css'
import TodoList from '../components/TodoList'

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div id="container">
          <TodoList />
        </div>
      </Layout>
    )
  }
}

export default IndexPage
