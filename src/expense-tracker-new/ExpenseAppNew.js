import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Login } from './pages/auth/Login'
import {Main} from './pages/app/Main'
import { Error } from './pages/Error'

export const ExpenseAppNew = () => {
  return (
    <>
      <h2>ExpenseAppNew</h2>
      <Router>
        <Routes>
          <Route path='/' exact index element={<Login/>} errorElement={<Error/>}/>
          <Route path='/app' element={<Main/>} errorElement={<Error/>}/>
        </Routes>
      </Router>
    </>
  )
}