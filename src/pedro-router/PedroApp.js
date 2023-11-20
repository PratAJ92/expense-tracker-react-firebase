import React, { useState } from 'react'
import { Link, Route, RouterProvider, createBrowserRouter, createRoutesFromElements, Outlet } from 'react-router-dom'
import Home from './Home'
import Contact from './Contact'
import { About, dataLoader } from './About'
import ErrorPage from './ErrorPage'

const PedroApp = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>} errorElement={<ErrorPage/>}>
        <Route index element={ <Home/> } />
        <Route path='contact' element={ <Contact/> } />
        <Route path='about' element={ <About/> } loader={dataLoader} />
      </Route>
    )
  )

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  )
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
        <Outlet />
      </div>
    </>
  )
}

export default PedroApp