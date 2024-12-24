import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    //const client_ID = localStorage.getItem('client_id'); // Assuming you store Company_ID in localStorage

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/task/alltask`);
                setTasks(response.data);
            
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setErrorMessage('Failed to fetch tasks.');
            }
        };

        fetchTask();
        console.log(tasks);
    }, []);

 //HallList
    return (
        <div>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <ul>
                {tasks.map((task) => (
                    <li key={task._id}>
                        <p><strong>Title:</strong> {task.title}</p>
                        <p><strong>description:</strong> {task.description}</p>
                        <p><strong>Date:</strong> {task.description}</p>
                        <button onClick={() => handleDelete(task._id)}>mark as done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
