import { useState } from 'react'
import './App.css'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Signup from './pages/signup'
import {Routes, Route} from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
            <Route path='/' element={<Homepage/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/booking' element={user ? <BookingPage/>: <Navigate to='/login'/>}/> */}
        </Routes>
    </>
  )
}

export default App
