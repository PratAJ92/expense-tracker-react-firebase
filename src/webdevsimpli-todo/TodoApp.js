import React, { useState } from 'react'

const TodoApp = () => {

  const [newItem, setNewItem] = useState('')
  const [todos, setTodos] = useState([])

  const addNewItem = (e) => {
    e.preventDefault()
    setTodos((currentTodos) => {
      return [...currentTodos, {id: crypto.randomUUID(), title: newItem, completed: false}]
    })
    setNewItem('')
  }

  const toggleTodo = (id, checked) => {
    //console.log(`Id: ${id} Checked: ${checked}`)
    setTodos((currentTodos) => {
      return currentTodos.map((todo) => {
        if(todo.id === id)
          return {...todo, completed: checked}
        return todo
      })
    })
  }

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id)
    })
  }

  return (
    <>
      <h3 style={{textAlign: 'center'}}>TodoApp</h3>

      <form onSubmit={(e) => addNewItem(e)}>
        <label htmlFor='item'>Enter Item</label>
        <input type='text' id='item' placeholder='Type here' value={newItem} onChange={e => setNewItem(e.target.value)}/>

        <button>Add</button>
      </form>

      <h5>Todo List</h5>
      { todos.length === 0 && 'No Todos' }
      <ul>
      {
        todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label style={{color: todo.completed? 'green': 'black'}}>
                <input type='checkbox' checked={todo.checked} onChange={(e) => toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })
      }
      </ul>
    
    </>
  )
}

export default TodoApp