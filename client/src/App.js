import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import NewUser from './pages/NewUser'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/newUser' element={<NewUser />}/>
      <Route path='*' element={<NotFound />}/>
    </Routes>
  )
}

export default App