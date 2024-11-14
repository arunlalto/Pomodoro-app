// client/src/components/PomodoroTimer.js
import React, { useState, useEffect } from 'react';
import './PomodoroTimer.css'; // Create a new CSS file for the timer styles

const PomodoroTimer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isCompleted, setIsCompleted] = useState(false);

    useEffect(() => {
        let timer;
        if (isActive && (minutes > 0 || seconds > 0)) {
            timer = setInterval(() => {
                if (seconds === 0) {
                    setMinutes((prev) => prev - 1);
                    setSeconds(59);
                } else {
                    setSeconds((prev) => prev - 1);
                }
            }, 1000);
        } else if (isActive && minutes === 0 && seconds === 0) {
            setIsActive(false);
            setIsCompleted(true);
            alert('Pomodoro complete! Take a break.');
        }
        return () => clearInterval(timer);
    }, [isActive, minutes, seconds]);

    const handleStartStop = () => {
        setIsActive(!isActive);
        if (isCompleted) {
            setMinutes(25);
            setSeconds(0);
            setIsCompleted(false);
        }
    };

    const handleReset = () => {
        setIsActive(false);
        setMinutes(25);
        setSeconds(0);
        setIsCompleted(false);
    };

    return (
        <div className={`timer ${isCompleted ? 'pulse' : ''}`}>
            <h2>{`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`}</h2>
            <button onClick={handleStartStop}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default PomodoroTimer;
