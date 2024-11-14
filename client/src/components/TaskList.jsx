// client/src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        const response = await axios.get('http://localhost:5000/api/tasks');
        setTasks(response.data);
    };

    const toggleComplete = async (task) => {
        await axios.patch(`http://localhost:5000/api/tasks/${task._id}`, {
            completed: !task.completed,
        });
        fetchTasks();
    };

    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/api/tasks/${id}`);
        fetchTasks();
    };

    useEffect(() => {
        fetchTasks();
    });

    return (
        <div>
            {tasks.map((task) => (
                <div key={task._id} className="task-item">
                    <span className={task.completed ? 'task-completed' : ''}>
                        {task.title}
                    </span>
                    <div>
                        <button onClick={() => toggleComplete(task)}>
                            {task.completed ? 'Undo' : 'Complete'}
                        </button>
                        <button onClick={() => deleteTask(task._id)}>Delete</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TaskList;
