import React from 'react'

const Tasks = (props) => {
  return (
      <div>
        {
          props.tasks.map((task) => {
            return (
              <div key={task.id}>
                <h1 style={{color: task.completed? 'green': 'black'}}>{task.name}</h1>
                <button onClick={() => props.deleteTask(task.id)}>X</button>
                <button onClick={() => props.updateTask(task.id)}>C</button>
              </div>)
          })
        }
      </div>
  )
}

export default Tasks