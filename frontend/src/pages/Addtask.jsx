import React, { useState } from 'react';

const AddTask = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add task logic here
    setFormData({
      title: "",
      description: "",
      date: ""
    });
  };

  return (
    <div className='addtask-main'>
      <div className='addtask-container'>
        <h2 className='addtask-title'>Add Task</h2>
        <form className='addtask-form' onSubmit={handleAddTask}>
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

          <button className='addtask-button' type='submit'>Add Task</button>
        </form>
      </div>
    </div>
  )
}

export default AddTask;