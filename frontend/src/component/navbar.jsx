import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const handlesignup =()=>{
            navigate('/signup')
    }
    const handlelogin =()=>{
        navigate('/login')
    }
  return (
    <div>
        <p>navbar </p>
        <button onClick={handlesignup}>sigup</button>
        <button onClick={handlelogin}>login</button>
      
    </div>
  )
}

export default Navbar
