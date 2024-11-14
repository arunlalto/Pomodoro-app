// client/src/App.js
import React from 'react';
import './App.css';  // Import the CSS file
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import PomodoroTimer from './components/PomodoroTimer';

const App = () => {
    return (
        <div>
            <h1>Pomodoro Task Manager</h1>
            <PomodoroTimer />
            <TaskForm />
            <TaskList />
        </div>
    );
};

export default App;
