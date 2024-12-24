import React from 'react';
import { useState } from 'react'
import Navbar from '../component/navbar';
import Addtask from './Addtask';
import Task from '../component/Task';

const Homepage = () => {
  

  return (
     <div> 
      <Navbar/>
      <Task/>
      <Addtask/>
 

    </div>

  )
}

export default Homepage;
