import React from 'react';
import './style.css';

const Buttons = ({ tasks, isDoneTasksHidden, toggleHideDone, setAllTasksDone }) => (
    tasks.length > 0 && (
        <>
            <button
                className="tasksSection__button tasksSection__button--hide"
                onClick={toggleHideDone}
            >
                {isDoneTasksHidden ? "Show done tasks" : "Hide done tasks"}
            </button>
            <button
                className="tasksSection__button tasksSection__button--toggleDone"
                disabled={tasks.every(({ done }) => done)}
                onClick={setAllTasksDone}
            >
                Set all tasks done
            </button>
        </>
    )
);

export default Buttons;