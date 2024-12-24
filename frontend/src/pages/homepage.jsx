import React from 'react';
import { useState } from 'react'
import Navbar from '../component/navbar';
import Addtask from './Addtask';

const Homepage = () => {
  

  return (
     <div> 
        <Navbar/>
      <p>Homepage page</p>
      <Addtask/>
 

    </div>

  )
}

export default Homepage;
