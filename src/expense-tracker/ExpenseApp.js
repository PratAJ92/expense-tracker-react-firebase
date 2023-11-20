import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Auth } from './pages/auth/index'
import { MainApp } from './pages/app/index'


const ExpenseApp = () => {
  return (
    <>
      <div>ExpenseApp</div>
      <Router>
        <Routes>
          <Route path='/' exact element={<Auth/>} />
          <Route path='/app' exact element={<MainApp/>} />
        </Routes>
      </Router>
    </>
  )
}

export default ExpenseApp