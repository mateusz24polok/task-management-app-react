import React from 'react';
import './style.css';

const Buttons = ({tasks, isDoneTasksHidden}) => (
    tasks.length > 0 && (
        <>
            <button
                className="tasksSection__button tasksSection__button--hide">
                {isDoneTasksHidden ? "Pokaż ukończone" : "Ukryj ukończone"}
            </button>
            <button
                className="tasksSection__button tasksSection__button--toggleDone"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </>
    )
);

export default Buttons;