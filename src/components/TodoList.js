import React from 'react'
import ToDoItems from './ToDoItems'

import './TodoList.css'

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
    }

    this.addItem = this.addItem.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.toggleItem = this.toggleItem.bind(this)
  }

  addItem(e) {
    if (this._inputElement.value !== '') {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now(),
      }

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem),
        }
      })

      this._inputElement.value = ''
    }

    e.preventDefault()
  }

  deleteItem(key) {
    let filteredItems = this.state.items.filter(function(item) {
      return item.key !== key
    })

    this.setState({
      items: filteredItems,
    })
  }

  toggleItem(text) {
    let toggledItems = this.state.items.filter(function(item) {
      return item.text === text
    })
    return toggledItems
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            />
            <button type="submit">add</button>
          </form>
        </div>
        <ToDoItems
          entries={this.state.items}
          delete={this.deleteItem}
          toggle={this.toggleItem}
        />
      </div>
    )
  }
}

export default TodoList
