import React, { useState } from 'react';

const AddTask = () => {
   const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // const handleAddTask = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   // Add task logic here
  //   setFormData({
  //     title: "",
  //     description: "",
  //     date: ""
  //   });
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch("http://localhost:3000/api/task/store", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setError("");
        
        alert("task added successful!");
        navigate('/')
      } else {
        setError(data.message || "adding failed");
      }
    } catch (err) {
      setError("Failed to connect. Please try again.");
    }
  };


  return (
    <div className='addtask-main'>
      <div className='addtask-container'>
        <h2 className='addtask-title'>Add Task</h2>
        <form className='addtask-form' onSubmit={handleSubmit}>
          <input
            type='text'
            className='addtask-input'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Task Name'
            required
          />

          <input
            type='text'
            className='addtask-input'
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Task description'
            required
          />

          <input
            type='date'
            className='addtask-input'
            name='date'
            value={formData.date}
            onChange={handleChange}
            placeholder='Due Date'
          />

          <button className='addtask-button' type='submit' >Add Task</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask;