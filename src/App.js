import { useState } from "react";
import Tasks from "./Tasks";
import Text from "./Text"
import Excuser from "./Excuser";
import { createBrowserRouter, createRoutesFromElements, Link, Outlet, Route, RouterProvider } from "react-router-dom";
import Home from "./pedro-router/Home";
import Contact from "./pedro-router/Contact";
import { About } from "./pedro-router/About";
import ErrorPage from "./pedro-router/ErrorPage";

function App() {

  const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root/>} errorElement={<ErrorPage/>} >
          <Route index element={<Home/>} />
          <Route path="contact" element={<Contact/>}/>
          <Route path='about' element={<About/>}/>
        </Route>
      )
  )

  const [newTaskName, setNewTaskName] = useState();
  const [tasks, setTasks] = useState([]);
  const [showText, setShowText] = useState(false);

  const addTask = (event) => {
    const task =  {
      id: tasks.length == 0 ? 0 : (tasks[tasks.length-1].id + 1),
      name: newTaskName,
      completed: false
    }
    setTasks([...tasks, task])
    setNewTaskName('')
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const completeTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if(task.id == id)
          return {...task, completed: true}
        return task
      })
    )
    console.log(tasks)
  }

  return (
    <div className="App">

      <div className="addTask">
        <input placeholder="Enter task name" value={newTaskName} onInput={(event) => {setNewTaskName(event.target.value)}}></input>
        <button onClick={addTask}>Add Task</button>
      </div>

      <Tasks tasks={tasks} deleteTask={deleteTask} updateTask={completeTask}/>

      <button onClick={() => {setShowText(!showText);}}>Show Text</button>
      {showText && <Text/>}

      <Excuser/>

      <RouterProvider router={router} />

    </div>
  );
}

const Root = () => {
  return (
    <>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About</Link>
      </div>
      <div>
        <Outlet/>
      </div>
    </>
  )
}

export default App;
