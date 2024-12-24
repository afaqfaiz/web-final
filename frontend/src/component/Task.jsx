import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HallList = () => {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    //const client_ID = localStorage.getItem('client_id'); // Assuming you store Company_ID in localStorage

    useEffect(() => {
        const fetchTask = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/tasks/all`);
                setTasks(response.data);
            } catch (error) {
                console.error('Error fetching tasks:', error);
                setErrorMessage('Failed to fetch tasks.');
            }
        };

        fetchTask();
    }, []);

 
    return (
        <div>
            {message && <p style={{ color: 'green' }}>{message}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <ul>
                {tasks.map((task) => (
                    <li key={tasks._id}>
                        <p><strong>Title:</strong> {tasks.title}</p>
                        <p><strong>description:</strong> {tasks.description}</p>
                        <p><strong>Date:</strong> {tasks.description}</p>
                        <button onClick={() => handleDelete(hall.Hall_ID)}>mark as done</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HallList;
