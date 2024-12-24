import { useState } from 'react'
import './App.css'
import Homepage from './pages/homepage'
import Login from './pages/login'
import Signup from './pages/signup'
import {Routes, Route , Navigate} from 'react-router-dom'
import {useAuthStore} from './Store/userAuthStore' 
import {useNavigate} from 'react-router-dom'
const App = () => {
  const {user}=useAuthStore();
  const navigate=useNavigate();

  return (
    <div>
      <Routes>
            <Route path='/' element= {user ? <Homepage/>: <Navigate to='/login'/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Login/>}/>
            {/* <Route path='/booking' element={user ? <BookingPage/>: <Navigate to='/login'/>}/> */}
        </Routes>
    </div>
  )
}

export default App;
